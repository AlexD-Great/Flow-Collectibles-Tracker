# Git Workflow Guide

This document outlines the git workflow for the Flow Collectibles Tracker project.

## Initial Setup

The repository has been initialized with a clean structure. The `.gitignore` file is configured to exclude:
- Helper files and temporary development files
- IDE-specific files
- Environment variables
- Build artifacts
- Node modules
- The `scaffold eth` file (Ethereum-specific, not needed for Flow)

## Files Included in Repository

### Essential Project Files
- ✅ Source code (`src/` directory)
- ✅ Configuration files (`package.json`, `tsconfig.json`, `tailwind.config.ts`, etc.)
- ✅ Documentation (`README.md`, `CONTRIBUTING.md`, `LICENSE`)
- ✅ Pitch deck (`Pitch deck for sustainable project.pptx`)
- ✅ Environment template (`.env.example`)
- ✅ Git configuration (`.gitignore`)

### Files Excluded (via .gitignore)
- ❌ `node_modules/`
- ❌ `.env` and `.env.local` (secrets)
- ❌ `scaffold eth` (Ethereum documentation, not relevant)
- ❌ Build artifacts (`.next/`, `dist/`, `build/`)
- ❌ IDE files (`.vscode/`, `.idea/`)
- ❌ Helper files (`notes/`, `todo.txt`, `_archive/`, etc.)
- ❌ Lock files (`package-lock.json`, `yarn.lock`)

## Committing Your Work

### Initial Commit
```bash
# Check what will be committed
git status

# Stage all files (respects .gitignore)
git add .

# Create initial commit
git commit -m "Initial project setup: Flow Collectibles Tracker

- Next.js 14 app with TypeScript
- Flow Client Library (FCL) integration
- TailwindCSS + shadcn/ui components
- Project documentation and pitch deck
- Basic authentication and portfolio structure"

# Push to GitHub
git push origin main
```

### Weekly Updates
```bash
# Create a feature branch for weekly work
git checkout -b week-1-wallet-integration

# Make your changes, then stage them
git add .

# Commit with descriptive message
git commit -m "Week 1: Implement wallet connection

- Add FCL wallet authentication
- Create wallet connection UI
- Add user state management
- Update documentation"

# Push to GitHub
git push origin week-1-wallet-integration

# Create a Pull Request on GitHub for review
```

### Commit Message Format
```
<Type>: <Short description>

<Detailed description of changes>
- Bullet point 1
- Bullet point 2
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `week-X-feature-name`: Weekly feature branches

## Best Practices

1. **Commit Often**: Small, focused commits are better than large ones
2. **Descriptive Messages**: Explain what and why, not just what
3. **Review Before Push**: Always run `git status` and `git diff` before committing
4. **Keep It Clean**: The `.gitignore` handles most exclusions, but double-check
5. **Weekly Updates**: Push progress weekly for public building transparency

## Checking What Will Be Committed

```bash
# See what files are staged
git status

# See what files would be added (dry run)
git add --dry-run .

# See differences in staged files
git diff --staged
```

## Removing Files from Git (if accidentally committed)

```bash
# Remove file from git but keep locally
git rm --cached filename

# Remove directory from git but keep locally
git rm -r --cached directory/

# Commit the removal
git commit -m "Remove accidentally committed files"
```
