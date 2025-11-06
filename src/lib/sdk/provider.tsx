"use client"

import React, { createContext, useContext, useMemo } from "react"
import { DataCollectionSDK, DataCollectionConfig } from "./collections"

interface SDKProviderProps {
  children: React.ReactNode
  config: DataCollectionConfig
}

const SDKContext = createContext<DataCollectionSDK | null>(null)

/**
 * Provider component for the Data Collection SDK
 * Wrap your app or component tree with this provider to access the SDK
 */
export function SDKProvider({ children, config }: SDKProviderProps) {
  const sdk = useMemo(() => new DataCollectionSDK(config), [
    config.apiUrl,
    config.organizationId,
    config.apiKey,
  ])

  return <SDKContext.Provider value={sdk}>{children}</SDKContext.Provider>
}

/**
 * Hook to access the Data Collection SDK
 * Must be used within an SDKProvider
 */
export function useSDK() {
  const context = useContext(SDKContext)
  if (!context) {
    throw new Error("useSDK must be used within an SDKProvider")
  }
  return context
}

/**
 * Hook to access the Subscribers API
 * Must be used within an SDKProvider
 */
export function useSubscribers() {
  const sdk = useSDK()
  return sdk.subscribers
}

/**
 * Hook to access the Posts/Blog API
 * Must be used within an SDKProvider
 */
export function usePosts() {
  const sdk = useSDK()
  return sdk.posts
}

/**
 * Hook to access a specific collection
 * Must be used within an SDKProvider
 */
export function useCollection(collectionName: string) {
  const sdk = useSDK()
  return useMemo(() => sdk.collection(collectionName), [sdk, collectionName])
}
