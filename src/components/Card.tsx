import Indicator from './Indicator'
interface CardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  onNext: () => void;
  onPrev: () => void;
  currentStepIndex: number;
  totalSteps: number;
  onStepClick: (index: number) => void;
}

export default function Card({ title, description, image, bgColor, onNext, onPrev, currentStepIndex, totalSteps, onStepClick }: CardProps) {
  const isFirstStep = currentStepIndex === 0; 
  const isLastStep = currentStepIndex === totalSteps - 1;
  return (
    <div className="card-container">
      <Indicator
        currentStepIndex={currentStepIndex}
        totalSteps={totalSteps}
        onStepClick={onStepClick}
      />
      <div className="selected-phrase" aria-live="polite">{title}</div>
      
      <div className="card-image" style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          {!isFirstStep && <button className="circle-btn" onClick={onPrev}>←</button>}
          {!isLastStep && <button className="circle-btn" onClick={onNext}>→</button>}
        </div>
      </div>
    </div>
  )
}
