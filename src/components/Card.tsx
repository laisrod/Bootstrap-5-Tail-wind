interface CardProps {
  title: string;
  description: string;
  image: string;
  onNext: () => void;
  onPrev: () => void;
}

export default function Card({ title, description, image, onNext, onPrev }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button-container">
          <button onClick={onPrev}>Anterior</button>
          <button onClick={onNext}>Próximo</button>
        </div>
      </div>
    </div>
  )
}
