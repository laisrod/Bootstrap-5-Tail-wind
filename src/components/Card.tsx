interface CardProps {
  title: string;
  description: string;
  image: string;
  onNext: () => void;
  onPrev: () => void;
  currentStepIndex: number;
  totalSteps: number;
}

export default function Card({ title, description, image, onNext, onPrev, currentStepIndex, totalSteps }: CardProps) {
  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;

  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          {!isFirstStep && <button onClick={onPrev}>Anterior</button>}
          {!isLastStep && <button onClick={onNext}>Próximo</button>}
        </div>
      </div>
    </div>
  )
}
