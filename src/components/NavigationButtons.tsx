interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function NavigationButtons({ onPrev, onNext, isFirst, isLast }: NavigationButtonsProps) {
  return (
    <div className="button-container">
      {!isFirst && (
        <button className="circle-btn" onClick={onPrev} aria-label="Anterior">←</button>
      )}
      {!isLast && (
        <button className="circle-btn" onClick={onNext} aria-label="Próximo">→</button>
      )}
    </div>
  )
}


