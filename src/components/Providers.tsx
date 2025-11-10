"use client"

import { SDKProvider } from "@/lib/sdk"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SDKProvider config={{
      apiUrl: "http://localhost:8080",
      organizationId: "690fa6b7173674214101016b",
      apiKey: 'gol_15f04352ccc6e6de5ff8a8bc7fa33d6ed40946e36b921edecfd722f91fe7c99d',
    }}>
      {children}
    </SDKProvider>
  )
}
