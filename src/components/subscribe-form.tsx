"use client"

import React, { useState } from "react"
import { useSubscribers } from "@/lib/sdk/provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Loader2, Mail } from "lucide-react"

interface SubscribeFormProps {
  title?: string
  description?: string
  successMessage?: string
  tags?: string[]
  source?: string
  className?: string
  variant?: "default" | "inline" | "minimal"
}

export function SubscribeForm({
  title = "Subscribe to our newsletter",
  description = "Get the latest updates and news delivered to your inbox",
  successMessage = "Thanks for subscribing! Check your email to confirm.",
  tags = [],
  source = "newsletter",
  className = "",
  variant = "default",
}: SubscribeFormProps) {
  const subscribers = useSubscribers()
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const subscriberData: any = {
        email,
        tags,
        source,
      }

      // Only include names if provided
      if (firstName) subscriberData.first_name = firstName
      if (lastName) subscriberData.last_name = lastName

      await subscribers.add(subscriberData)

      setIsSuccess(true)
      setEmail("")
      setFirstName("")
      setLastName("")

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err: any) {
      setError(err.message || "Failed to subscribe. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "minimal") {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting || isSuccess}
            className="flex-1"
          />
          <Button type="submit" disabled={isSubmitting || isSuccess}>
            {isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isSuccess ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        {isSuccess && (
          <Alert className="mt-2">
            <CheckCircle2 className="h-4 w-4" />
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        )}
        {error && (
          <Alert variant="destructive" className="mt-2">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </form>
    )
  }

  if (variant === "inline") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting || isSuccess}
                className="flex-1"
              />
              <Button type="submit" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Subscribed
                  </>
                ) : (
                  <>
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
            {isSuccess && (
              <Alert>
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>{successMessage}</AlertDescription>
              </Alert>
            )}
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>
        </form>
      </div>
    )
  }

  // Default card variant
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={isSubmitting || isSuccess}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting || isSuccess}
            />
          </div>
          {isSuccess && (
            <Alert>
              <CheckCircle2 className="h-4 w-4" />
              <AlertDescription>{successMessage}</AlertDescription>
            </Alert>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Subscribed!
              </>
            ) : (
              <>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </>
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
