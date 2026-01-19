"use client"

import { useFlowUser } from "@/hooks/useFlowUser"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, TrendingUp, Bell, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const user = useFlowUser()

  if (!user.loggedIn) {
    return (
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Wallet className="w-16 h-16 mx-auto mb-4 text-slate-400" />
          <h1 className="text-3xl font-bold mb-4">Connect Your Wallet</h1>
          <p className="text-slate-600 mb-8">
            Connect your Flow wallet to view your NFT portfolio, track performance, and set up alerts.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
            <h3 className="font-semibold text-blue-900 mb-2">Supported Wallets:</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Blocto</li>
              <li>• Lilico</li>
              <li>• Flow Wallet</li>
              <li>• Dapper Wallet</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-slate-600">
          Welcome back! Your wallet is connected: <span className="font-mono text-sm">{user.addr}</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Portfolio Value</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-400">$--</div>
            <p className="text-sm text-slate-500 mt-2">Connect to see your portfolio value</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total NFTs</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-400">--</div>
            <p className="text-sm text-slate-500 mt-2">NFT count will appear here</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">P/L</CardTitle>
            <CardDescription>Coming soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-400">--</div>
            <p className="text-sm text-slate-500 mt-2">Profit/Loss tracking coming soon</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
            <CardTitle>Your Collections</CardTitle>
            <CardDescription>View and manage your NFT collections</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">
              Once we fetch your NFTs, you'll see all your Flow collectibles here.
            </p>
            <Button variant="outline" disabled>
              <BarChart3 className="w-4 h-4 mr-2" />
              View Portfolio (Coming Soon)
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Bell className="w-8 h-8 text-purple-600 mb-2" />
            <CardTitle>Alerts</CardTitle>
            <CardDescription>Set up price and activity alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">
              Get notified about floor price changes, undercuts, and big sales.
            </p>
            <Button variant="outline" disabled>
              <Bell className="w-4 h-4 mr-2" />
              Manage Alerts (Coming Soon)
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-lg mb-2">🚧 Development in Progress</h3>
        <p className="text-sm text-slate-700 mb-4">
          This project is being built in public! Follow along as we add features weekly:
        </p>
        <ul className="text-sm text-slate-600 space-y-1 mb-4">
          <li>✅ Wallet connection</li>
          <li>🔄 NFT fetching (next)</li>
          <li>🔄 Floor price tracking</li>
          <li>🔄 P/L calculations</li>
        </ul>
        <Link href="https://github.com/AlexD-Great/Flow-Collectibles-Tracker" target="_blank">
          <Button variant="outline" size="sm">
            View on GitHub →
          </Button>
        </Link>
      </div>
    </main>
  )
}
