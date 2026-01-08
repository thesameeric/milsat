"use client"

import { SDKProvider } from "@letterhead/core/react"
import { SubscribeForm } from "@/components/subscribe-form"

export default function SubscribePage() {
  // Configure the SDK
  const sdkConfig = {
    apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080",
    organizationId: process.env.NEXT_PUBLIC_ORG_ID ?? "",
    apiKey: process.env.NEXT_PUBLIC_LETTERHEAD_API,
  }

  return (
    <SDKProvider config={sdkConfig}>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Subscribe Examples</h1>
            <p className="text-lg text-muted-foreground">
              Different ways to integrate newsletter subscription forms
            </p>
          </div>

          {/* Default Card Variant */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Card Variant (Default)</h2>
              <p className="text-muted-foreground">
                Full-featured form with name fields in a card layout
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <SubscribeForm
                title="Join Our Newsletter"
                description="Get weekly updates on our latest features and news"
                tags={["newsletter", "weekly"]}
                source="website-subscribe-page"
              />
            </div>
          </section>

          {/* Inline Variant */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Inline Variant</h2>
              <p className="text-muted-foreground">
                Compact inline form with email only
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-muted/50 p-6 rounded-lg">
              <SubscribeForm
                variant="inline"
                title="Stay Updated"
                description="Get notified about new features and updates"
                tags={["updates"]}
                source="inline-form"
              />
            </div>
          </section>

          {/* Minimal Variant */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Minimal Variant</h2>
              <p className="text-muted-foreground">
                Ultra-compact form for footer or sidebar
              </p>
            </div>
            <div className="max-w-md mx-auto">
              <SubscribeForm
                variant="minimal"
                tags={["minimal-footer"]}
                source="footer-subscribe"
              />
            </div>
          </section>

          {/* Custom Styling Example */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Custom Styled</h2>
              <p className="text-muted-foreground">
                With custom styling and messaging
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl">
              <SubscribeForm
                variant="inline"
                title="🚀 Launch Week Newsletter"
                description="Be the first to know about our launch week deals and announcements"
                successMessage="You're on the list! Get ready for launch week 🎉"
                tags={["launch-week", "special-offer"]}
                source="launch-week-banner"
                className="text-white [&_input]:text-foreground [&_button]:bg-white [&_button]:text-primary"
              />
            </div>
          </section>

          {/* Code Example */}
          <section className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Usage Example</h2>
              <p className="text-muted-foreground">
                How to integrate in your code
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { SDKProvider } from "@letterhead/core/react"
import { SubscribeForm } from "@/components/subscribe-form"

export default function Page() {
  return (
    <SDKProvider config={{
      apiUrl: "https://api.doormart.co",
      organizationId: "your-org-id",
      apiKey: "your-api-key" // Optional
    }}>
      <SubscribeForm
        title="Join our newsletter"
        tags={["newsletter"]}
        source="homepage"
      />
    </SDKProvider>
  )
}`}</code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </SDKProvider>
  )
}
