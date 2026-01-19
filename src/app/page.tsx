import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Bell, TrendingUp, Wallet } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flow Collectibles Tracker
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Performance-first portfolio tracking for Flow NFT collectibles. Track your P/L, get alerts, and make smarter decisions.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="gap-2">
                <Wallet className="w-5 h-5" />
                Connect Wallet
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardHeader>
              <BarChart3 className="w-10 h-10 text-blue-600 mb-2" />
              <CardTitle>Unified Portfolio</CardTitle>
              <CardDescription>
                View all your Flow NFTs in one place - Top Shot, All Day, UFC Strike, and more
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-green-600 mb-2" />
              <CardTitle>Real-time P/L</CardTitle>
              <CardDescription>
                Track your profit and loss with cost basis calculations and performance charts
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="w-10 h-10 text-purple-600 mb-2" />
              <CardTitle>Smart Alerts</CardTitle>
              <CardDescription>
                Get notified about undercuts, floor breaks, and liquidity changes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <BarChart3 className="w-10 h-10 text-orange-600 mb-2" />
              <CardTitle>Cross-Market</CardTitle>
              <CardDescription>
                Compare prices across marketplaces and find the best listing opportunities
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Why Flow Collectibles Tracker?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Stop Jumping Between Tools</h3>
                <p className="text-slate-600">
                  No more using 4-6 different sites. Get everything in one clean dashboard.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Know Your Performance</h3>
                <p className="text-slate-600">
                  See if you're up or down instantly with real-time P/L tracking.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Never Miss an Opportunity</h3>
                <p className="text-slate-600">
                  Custom alerts keep you informed about market movements that matter to you.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
