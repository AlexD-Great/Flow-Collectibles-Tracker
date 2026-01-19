"use client"

import { Button } from "@/components/ui/button"
import { useFlowUser } from "@/hooks/useFlowUser"
import { authenticate, unauthenticate } from "@/lib/flow/auth"
import { Wallet, LogOut } from "lucide-react"
import { useState } from "react"

export function ConnectWalletButton() {
  const user = useFlowUser()
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    setIsLoading(true)
    try {
      await authenticate()
    } catch (error) {
      console.error("Failed to authenticate:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDisconnect = async () => {
    setIsLoading(true)
    try {
      await unauthenticate()
    } catch (error) {
      console.error("Failed to disconnect:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (user.loggedIn && user.addr) {
    return (
      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-md">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-green-700">
            {user.addr.slice(0, 6)}...{user.addr.slice(-4)}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisconnect}
          disabled={isLoading}
          className="gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Disconnect</span>
        </Button>
      </div>
    )
  }

  return (
    <Button
      onClick={handleConnect}
      disabled={isLoading}
      className="gap-2"
    >
      <Wallet className="w-4 h-4" />
      {isLoading ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}
