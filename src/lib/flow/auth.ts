import * as fcl from "@onflow/fcl"

export interface FlowUser {
  addr: string | null
  loggedIn: boolean
}

export async function authenticate(): Promise<FlowUser> {
  const user = await fcl.authenticate()
  return user
}

export async function unauthenticate(): Promise<void> {
  await fcl.unauthenticate()
}

export function subscribeToUser(callback: (user: FlowUser) => void): () => void {
  return fcl.currentUser.subscribe(callback)
}

export async function getCurrentUser(): Promise<FlowUser> {
  return await fcl.currentUser.snapshot()
}
