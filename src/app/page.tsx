'use client'

import { useRouter } from "next/navigation"

export default function Home() {
  const navigate = useRouter()
  return (
    <>
      <h1 onClick={()=> navigate.push('/search')} >hello world</h1>
    </>
  )
}
