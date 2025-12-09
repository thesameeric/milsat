"use client"

import { SDKProvider } from "@/lib/sdk"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SDKProvider config={{
      apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080',
      organizationId: process.env.NEXT_PUBLIC_ORG_ID ?? '',
      apiKey: process.env.NEXT_PUBLIC_LETTERHEAD_API ?? '',
    }}>
      {children}
    </SDKProvider>
  )
}
