"use client"

import { useState } from "react"
import { useCollection } from "@/lib/sdk"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, Loader2 } from "lucide-react"

interface DownloadGateModalProps {
    isOpen: boolean
    onOpenChange: (open: boolean) => void
    onSuccess: () => void
    itemName: string
}

export function DownloadGateModal({
    isOpen,
    onOpenChange,
    onSuccess,
    itemName,
}: DownloadGateModalProps) {
    const collection = useCollection("case_study_interest")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        areaOfInterest: "",
    })
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)

        if (!formData.name || !formData.email || !formData.areaOfInterest) {
            setError("Please fill in all fields")
            setIsSubmitting(false)
            return
        }

        try {
            await collection.add({
                ...formData,
                downloadedItem: itemName,
                submittedAt: new Date().toISOString(),
            })
            onSuccess()
            onOpenChange(false)
        } catch (err) {
            console.error("Failed to submit download interest:", err)
            setError("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Download Publication</DialogTitle>
                    <DialogDescription>
                        Please provide your details to download "{itemName}". We'll keep you updated with similar research.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="areaOfInterest">Area of Interest</Label>
                        <Input
                            id="areaOfInterest"
                            placeholder="e.g. Public Health, Logistics..."
                            value={formData.areaOfInterest}
                            onChange={(e) =>
                                setFormData({ ...formData, areaOfInterest: e.target.value })
                            }
                        />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <Download className="mr-2 h-4 w-4" />
                                Download Now
                            </>
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
