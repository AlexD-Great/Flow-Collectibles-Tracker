"use client"

import { useState, useEffect } from "react"
import { subscribeToUser, type FlowUser } from "@/lib/flow/auth"

export function useFlowUser() {
  const [user, setUser] = useState<FlowUser>({ addr: null, loggedIn: false })

  useEffect(() => {
    const unsubscribe = subscribeToUser(setUser)
    return () => unsubscribe()
  }, [])

  return user
}
