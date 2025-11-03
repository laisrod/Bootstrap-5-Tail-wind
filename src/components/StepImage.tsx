interface StepImageProps {
  image: string;
  title: string;
  bgColor: string;
  direction: 'forward' | 'backward';
}

export default function StepImage({ image, title, bgColor, direction }: StepImageProps) {
  const directionClass = direction === 'forward' ? 'enter-right' : 'enter-left';
  return (
    <div className={`card-image ${directionClass}`} style={{ backgroundColor: bgColor }}>
      <img src={image} alt={title} />
    </div>
  )
}


