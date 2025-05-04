'use client'

import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function AnimBtweenPages({ children }) {
  const pathname = usePathname()
  const [displayedChildren, setDisplayedChildren] = useState(children)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Only update children after exit animation finishes
    setIsExiting(true)
    const timeout = setTimeout(() => {
      setDisplayedChildren(children)
      setIsExiting(false)
    }, 400) // match transition duration

    return () => clearTimeout(timeout)
  }, [children])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(-50px) scale(0.99)' }}
        animate={{ opacity: 1, filter: 'blur(0)', transform: 'translateY(0) scale(1)' }}
        exit={{ opacity: 0, filter: 'blur(10px)', transform: 'translateY(-50px) scale(0.99)' }}
        transition={{ duration: 0.2 }}
      >
        {displayedChildren}
      </motion.div>
    </AnimatePresence>
  )
}
