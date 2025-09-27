import { useEffect } from 'react'
import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'
import './DancingCat.css'

function DancingCat() {
  const { isAnimating, toggleAnimation } = useAnimation(false)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space') {
        event.preventDefault()
        toggleAnimation()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation])

  return (
    <div className="dancing-cat-container">
      <div className={`cat-wrapper ${isAnimating ? 'dancing' : ''}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>

      <div className="controls">
        <button
          className={`dance-button ${isAnimating ? 'stop' : 'start'}`}
          onClick={toggleAnimation}
          aria-label={isAnimating ? '춤 멈추기' : '춤 시작하기'}
        >
          {isAnimating ? '🛑 멈추기' : '💃 춤추기'}
        </button>
        <p className="keyboard-hint">스페이스바를 눌러도 조작할 수 있어요!</p>
      </div>

      <div className="stage">
        <div className="stage-light"></div>
        <div className="stage-light stage-light-2"></div>
        <div className="stage-light stage-light-3"></div>
      </div>
    </div>
  )
}

export default DancingCat