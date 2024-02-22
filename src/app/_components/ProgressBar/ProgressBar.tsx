"use client"
import React, { useState, useEffect } from "react"

const ProgressBar = () => {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.body.scrollHeight
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollPercent(scrollPercent)
    }

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-green-500"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  )
}

export default ProgressBar
