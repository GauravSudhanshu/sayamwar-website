'use client'
import { useEffect, useRef, useState } from 'react'

interface Props { target: number; suffix?: string; duration?: number }

export default function Counter({ target, suffix = '', duration = 2000 }: Props) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const inc = target / steps
        let cur = 0
        const timer = setInterval(() => {
          cur += inc
          if (cur >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(cur))
        }, duration / steps)
        observer.disconnect()
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
