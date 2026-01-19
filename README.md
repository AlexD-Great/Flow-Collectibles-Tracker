# Flow Collectibles Tracker

A performance-first portfolio tracker for Flow NFT collectibles that provides unified holdings view, real-time P/L tracking, actionable alerts, and cross-market insights.

> **📊 [View the Full Pitch Deck](./Pitch%20deck%20for%20sustainable%20project.pptx)** | **[Pitch Overview](./docs/PITCH_DECK.md)**

## 🎯 Project Overview

Flow Collectibles Tracker solves the fragmentation problem faced by Flow NFT collectors who currently juggle 4-6 different tools to track their portfolio performance. This application provides a single dashboard to:

- **Track Portfolio Performance**: Real-time portfolio value with cost basis P/L tracking
- **Unified Holdings View**: One wallet → complete view of all Flow collectibles (NBA Top Shot, NFL All Day, UFC Strike, and Flow NFT Catalog assets)
- **Actionable Alerts**: Get notified about undercuts, floor breaks, big sales, and liquidity warnings
- **Cross-Market Comps**: Compare pricing across marketplaces and identify optimal listing opportunities
- **Shareable Portfolio**: Generate shareable portfolio cards for community engagement

## 🚀 Value Proposition

### For Collectors
- **Clarity**: See total value and P/L in seconds (vs jumping between 4+ sites)
- **Confidence**: Make informed decisions with alerts and liquidity insights
- **Convenience**: One home for performance tracking across the entire Flow ecosystem
- **Community**: Share portfolio achievements with shareable cards

### For Flow Ecosystem
- **Retention**: Daily/weekly habit loop through performance tracking and alerts
- **Liquidity**: Better market intelligence drives healthier trading activity
- **Ecosystem Growth**: Supports the open, interoperable Flow NFT Catalog
- **Complements On-Ramps**: Works alongside Flowramp to keep users engaged after onboarding

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS + shadcn/ui components
- **Icons**: Lucide React
- **Flow Integration**: Flow Client Library (FCL) for wallet connections and blockchain interactions
- **State Management**: React Context + Zustand
- **Charts**: Recharts for portfolio visualizations
- **Type Safety**: TypeScript

### Backend / Data Layer
- **API**: Next.js API Routes (serverless functions)
- **Database**: PostgreSQL (for user data, watchlists, alerts)
- **Caching**: Redis (for real-time floor prices and market data)
- **Flow Blockchain**:
  - **Smart Contracts**: Cadence (Flow's resource-oriented language)
  - **Flow SDK**: @onflow/fcl for blockchain queries
  - **Access Nodes**: Flow Mainnet/Testnet API endpoints
- **NFT Data Sources**:
  - Flow NFT Catalog API
  - Flowty API (marketplace data)
  - NBA Top Shot API
  - NFL All Day API
  - UFC Strike API

### Infrastructure
- **Hosting**: Vercel (frontend + API routes)
- **Database**: Supabase or Railway (PostgreSQL)
- **Cache**: Upstash Redis
- **Monitoring**: Sentry (error tracking)

## 📁 Project Structure

```
flow-collectibles-tracker/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── (auth)/              # Authentication routes
│   │   ├── dashboard/           # Main dashboard
│   │   ├── portfolio/           # Portfolio views
│   │   ├── alerts/              # Alert management
│   │   ├── api/                 # API routes
│   │   └── layout.tsx
│   ├── components/              # React components
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── portfolio/           # Portfolio-specific components
│   │   ├── alerts/              # Alert components
│   │   └── shared/              # Shared components
│   ├── lib/                     # Utility functions
│   │   ├── flow/                # Flow blockchain utilities
│   │   ├── db/                  # Database utilities
│   │   └── api/                 # API client functions
│   ├── hooks/                   # Custom React hooks
│   ├── types/                   # TypeScript type definitions
│   └── config/                  # Configuration files
├── cadence/                     # Cadence smart contracts (if needed)
│   ├── contracts/
│   ├── scripts/                 # Read-only queries
│   └── transactions/            # State-changing operations
├── public/                      # Static assets
├── prisma/                      # Database schema
└── package.json
```

## 🔧 Core Features & Implementation

### Phase 1: MVP (Month 1)
- [ ] Wallet connection via FCL (support for Blocto, Lilico, Flow Wallet)
- [ ] Basic holdings view (fetch NFTs from connected wallet)
- [ ] Real-time floor pricing from Flow marketplaces
- [ ] Simple price alerts (email notifications)
- [ ] Basic portfolio dashboard

### Phase 2: P/L Tracking (Month 2)
- [ ] Cost basis tracking (manual entry + transaction history)
- [ ] Portfolio P/L calculations (total value vs cost basis)
- [ ] Historical performance charts
- [ ] Cross-marketplace price comparisons
- [ ] Advanced filtering and sorting

### Phase 3: Pro Features & Launch (Month 3)
- [ ] Shareable portfolio pages/cards
- [ ] Pro tier subscription (Stripe integration)
- [ ] Advanced alerts (liquidity warnings, whale movements)
- [ ] Export functionality (CSV for tax reporting)
- [ ] Mobile-responsive design polish
- [ ] Community distribution & marketing

## 🎨 Design Principles

1. **Performance-First UI**: P/L and total value front and center
2. **Action-Oriented**: Every insight should suggest a next step
3. **Clean & Modern**: Inspired by Robinhood, Coinbase, and modern fintech apps
4. **Mobile-First**: Responsive design for on-the-go portfolio checks
5. **Fast Loading**: Optimistic UI updates, skeleton loaders, cached data

## 🔐 Flow Blockchain Integration

### Cadence Smart Contracts
While the tracker primarily reads on-chain data, we may deploy lightweight Cadence contracts for:
- User preferences storage (on-chain settings)
- Shareable portfolio metadata (NFT-based portfolio cards)

### Flow Client Library (FCL) Usage
```typescript
// Example: Connecting wallet
import * as fcl from "@onflow/fcl"

fcl.config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/authn"
})

// Authenticate user
const user = await fcl.authenticate()

// Query user's NFTs
const nfts = await fcl.query({
  cadence: `/* Cadence script to fetch NFTs */`,
  args: (arg, t) => [arg(user.addr, t.Address)]
})
```

### NFT Data Fetching
- Use Flow NFT Catalog to discover NFT collections
- Query individual collection contracts for user holdings
- Aggregate marketplace data for floor prices and sales history

## 💰 Business Model

### Freemium Subscription
- **Free Tier**: Basic portfolio view, delayed prices (15-min), 5 watchlist items
- **Pro Tier** ($7-15/mo): Real-time floors, unlimited alerts, P/L tracking, export/tax tools

### Revenue Target
- **90-Day Goal**: 500 free users → 50 Pro subscribers (~$500/month)

### Moat (Defensibility)
1. **Data Moat**: Normalized pricing dataset across all Flow marketplaces
2. **Workflow Moat**: Saved alerts and watchlists create switching costs
3. **Brand Moat**: Become "the Flow collectibles performance app" in communities

## 📊 Distribution Strategy

1. **Community-First**: Top Shot, All Day, UFC Strike Discord servers
2. **Viral Loop**: Shareable portfolio cards with built-in CTAs
3. **Partnerships**: Wallet integrations (Blocto, Lilico), marketplace widgets
4. **Content**: Twitter threads, YouTube tutorials, Flow ecosystem blog posts

## 🚦 Getting Started

### Prerequisites
- Node.js >= 18.x
- npm or yarn
- Flow CLI (for Cadence development)
- PostgreSQL database
- Redis instance (optional for caching)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/flow-collectibles-tracker.git
cd flow-collectibles-tracker

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### Environment Variables

```env
# Flow Configuration
NEXT_PUBLIC_FLOW_NETWORK=mainnet
NEXT_PUBLIC_ACCESS_NODE_API=https://rest-mainnet.onflow.org
NEXT_PUBLIC_DISCOVERY_WALLET=https://fcl-discovery.onflow.org/authn

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/flow_tracker

# Redis (optional)
REDIS_URL=redis://localhost:6379

# API Keys
FLOWTY_API_KEY=your_flowty_api_key
NBA_TOPSHOT_API_KEY=your_topshot_api_key

# Authentication (NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key

# Stripe (for Pro subscriptions)
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e
```

## 📈 Roadmap

### Q1 2026
- ✅ Project setup and architecture
- 🔄 MVP development (wallet connection, basic holdings)
- 🔄 Floor pricing integration

### Q2 2026
- P/L tracking implementation
- Cross-marketplace comparisons
- Advanced alert system

### Q3 2026
- Pro tier launch
- Shareable portfolio cards
- Mobile app (React Native)

### Q4 2026
- Tax reporting features
- API for third-party integrations
- Advanced analytics dashboard

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Flow Foundation for the amazing blockchain infrastructure
- Dapper Labs for pioneering Flow NFT collectibles
- The Flow developer community for tools and support
- Flowramp team for complementary on-ramp solutions

## 📞 Contact & Support

- **Twitter**: [@FlowTracker](https://twitter.com/flowtracker)
- **Discord**: [Join our community](https://discord.gg/flowtracker)
- **Email**: support@flowcollectiblestracker.com

## 🔄 Development Updates

This project is being **built in public** with weekly updates. Follow along as we progress through the 3-month development timeline.

### Weekly Progress
Check the [GitHub commits](../../commits/main) and [project board](../../projects) for real-time development progress.

---

**Built with ❤️ for the Flow NFT community**
