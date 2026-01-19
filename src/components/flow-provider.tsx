"use client"

import { useEffect } from "react"
import * as fcl from "@onflow/fcl"

export function FlowProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    fcl.config({
      "accessNode.api": process.env.NEXT_PUBLIC_ACCESS_NODE_API || "https://rest-mainnet.onflow.org",
      "discovery.wallet": process.env.NEXT_PUBLIC_DISCOVERY_WALLET || "https://fcl-discovery.onflow.org/authn",
      "app.detail.title": "Flow Collectibles Tracker",
      "app.detail.icon": "https://placekitten.com/g/200/200",
    })
  }, [])

  return <>{children}</>
}
