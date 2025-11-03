interface StepContentProps {
  title: string;
  description: string;
}

export default function StepContent({ title, description }: StepContentProps) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  )
}


