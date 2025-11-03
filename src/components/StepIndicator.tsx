interface StepIndicatorProps {
  currentStepIndex: number;
  totalSteps: number;
  onStepClick: (index: number) => void;
}

export default function StepIndicator({ currentStepIndex, totalSteps, onStepClick }: StepIndicatorProps) {
  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`progress-dot ${index === currentStepIndex ? 'active' : ''}`}
          onClick={() => onStepClick(index)}
          style={{ cursor: 'pointer' }}
        >
          {index === currentStepIndex ? (
            <div className="progress-line"></div>
          ) : (
            <div className="progress-dot-inactive"></div>
          )}
        </div>
      ))}
    </div>
  )
}


