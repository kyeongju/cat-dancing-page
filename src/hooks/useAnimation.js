import { useState, useCallback } from 'react'

export function useAnimation(initialState = false) {
  const [isAnimating, setIsAnimating] = useState(initialState)

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const startAnimation = useCallback(() => {
    setIsAnimating(true)
  }, [])

  const stopAnimation = useCallback(() => {
    setIsAnimating(false)
  }, [])

  return {
    isAnimating,
    toggleAnimation,
    startAnimation,
    stopAnimation
  }
}