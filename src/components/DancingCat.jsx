import '../styles/DancingCat.css'
import catSvg from '../assets/images/cat.svg'
import { useAnimation } from '../hooks/useAnimation'

const DancingCat = () => {
  const { isAnimating, animationCount, speed, toggleAnimation, changeSpeed } = useAnimation(true)

  const speedOptions = [
    { value: 'slow', label: '🐌 느리게', emoji: '🐌' },
    { value: 'normal', label: '🐱 보통', emoji: '🐱' },
    { value: 'fast', label: '⚡ 빠르게', emoji: '⚡' }
  ]

  return (
    <div className="dancing-cat-container">
      <div className={`dancing-cat ${isAnimating ? 'dancing' : 'paused'} speed-${speed}`}>
        <img src={catSvg} alt="Dancing Cat" className="cat-image" />
      </div>
      
      <div className="controls">
        <button 
          className={`control-button ${isAnimating ? 'pause' : 'play'}`}
          onClick={toggleAnimation}
        >
          {isAnimating ? '⏸️ Pause Dance' : '▶️ Start Dance'}
        </button>
      </div>

      <div className="speed-controls">
        <h3>댄스 속도 선택:</h3>
        <div className="speed-buttons">
          {speedOptions.map((option) => (
            <button
              key={option.value}
              className={`speed-button ${speed === option.value ? 'active' : ''}`}
              onClick={() => changeSpeed(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="dance-status">
        <p>{isAnimating ? '🎵 Cat is dancing! 🎵' : '😴 Cat is resting 😴'}</p>
        <p className="dance-counter">Dance sessions: {animationCount}</p>
        <p className="keyboard-hint">💡 Press SPACE to toggle dance!</p>
      </div>
    </div>
  )
}

export default DancingCat