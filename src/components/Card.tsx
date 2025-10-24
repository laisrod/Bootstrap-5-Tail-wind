interface CardProps {
  title: string;
  description: string;
  image: string;
  onNext: () => void;
}

export default function Card({ title, description, image, onNext }: CardProps) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onNext}>Próximo</button>
      </div>
    </div>
  )
}
