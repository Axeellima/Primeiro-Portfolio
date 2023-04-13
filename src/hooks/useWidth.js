import { useEffect, useState } from 'react'

const useWidthPosition = () => {
  const [widthPosition, setWidthPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setWidthPosition(window.innerWidth)
    }
    window.addEventListener('resize', updatePosition)
    updatePosition()
    return () => window.removeEventListener('resize', updatePosition)
  }, [])

  return widthPosition
}

export default useWidthPosition
