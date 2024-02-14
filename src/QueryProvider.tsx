"use client"

import React from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

type Props = {
  children: React.ReactNode
}

export default function QueryProvider({ children }: Props) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000 * 60,
        },
      },
    }),
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}