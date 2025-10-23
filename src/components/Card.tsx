interface CardProps {
  title: string;
  description: string;
  onNext: () => void;
}

export default function Card({ title, description, onNext }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onNext}>Próximo</button>
    </div>
  )
}
