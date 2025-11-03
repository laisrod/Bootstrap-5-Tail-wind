import StepIndicator from './StepIndicator'
import StepImage from './StepImage'
import StepContent from './StepContent'
import NavigationButtons from './NavigationButtons'

interface CardProps {
  title: string;
  description: string;
  image: string;
  bgColor: string;
  direction: 'forward' | 'backward';
  onNext: () => void;
  onPrev: () => void;
  currentStepIndex: number;
  totalSteps: number;
  onStepClick: (index: number) => void;
}

export default function Card({ title, description, image, bgColor, direction, onNext, onPrev, currentStepIndex, totalSteps, onStepClick }: CardProps) {
  const isFirstStep = currentStepIndex === 0; 
  const isLastStep = currentStepIndex === totalSteps - 1;
  return (
    <div className="card-container">
      <StepIndicator
        currentStepIndex={currentStepIndex}
        totalSteps={totalSteps}
        onStepClick={onStepClick}
      />
      <div className="selected-phrase" aria-live="polite">{title}</div>
      
      <StepImage image={image} title={title} bgColor={bgColor} direction={direction} />
      <div className="card-content">
        <StepContent title={title} description={description} />
        <NavigationButtons onPrev={onPrev} onNext={onNext} isFirst={isFirstStep} isLast={isLastStep} />
      </div>
    </div>
  )
}
