import { useState, useEffect } from 'react'

export const useAnimation = (initialState = true) => {
  const [isAnimating, setIsAnimating] = useState(initialState)
  const [animationCount, setAnimationCount] = useState(0)
  const [speed, setSpeed] = useState('normal') // 'slow', 'normal', 'fast'

  const toggleAnimation = () => {
    setIsAnimating(prev => !prev)
    if (!isAnimating) {
      setAnimationCount(prev => prev + 1)
    }
  }

  const startAnimation = () => {
    setIsAnimating(true)
    setAnimationCount(prev => prev + 1)
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed)
  }

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isAnimating])

  return {
    isAnimating,
    animationCount,
    speed,
    toggleAnimation,
    startAnimation,
    stopAnimation,
    changeSpeed
  }
}