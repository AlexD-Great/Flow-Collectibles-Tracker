"use client"

import Link from "next/link"
import { ConnectWalletButton } from "@/components/wallet/connect-wallet-button"
import { BarChart3 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          <span className="hidden sm:inline-block">Flow Collectibles Tracker</span>
          <span className="sm:hidden">FCT</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block"
          >
            Dashboard
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block"
          >
            Portfolio
          </Link>
          <ConnectWalletButton />
        </nav>
      </div>
    </header>
  )
}
