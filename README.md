## Onboarding App — Apresentação (Slides)

Este documento apresenta, em formato de slides, as funcionalidades e os fluxos do projeto.

### Slide 1 — Estado e Dados (App controla o fluxo)

- Estado da etapa atual (índice):

```30:31:src/App.tsx
const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)
```

- Lista de etapas (título, descrição, imagem):

```12:28:src/App.tsx
const tutorialData: TutorialStep[] = [
  { title: 'Dedica moltes hores', description: '...', image: '/src/img/time_managment.svg' },
  { title: 'Programa projectes propis', description: '...', image: '/src/img/programming.svg' },
  { title: 'Procura descansar', description: '...', image: '/src/img/meditation.svg' }
];
```

- Seleção da etapa atual a partir do índice:

```50:50:src/App.tsx
const currentStep = tutorialData[currentStepIndex]
```

---

### Slide 2 — Ações de Navegação

- Avançar (não ultrapassa o fim):

```32:37:src/App.tsx
const nextStep = (): void => {
  setCurrentStepIndex(prevIndex => {
    const nextIndex = prevIndex + 1
    return nextIndex < tutorialData.length ? nextIndex : prevIndex
  })
}
```

- Voltar (não fica negativo):

```39:44:src/App.tsx
const prevStep = (): void => {
  setCurrentStepIndex(prevIndex => {
    const prevIndexValue = prevIndex - 1
    return prevIndexValue >= 0 ? prevIndexValue : prevIndex
  })
}
```

- Pular direto ao clicar no indicador:

```46:48:src/App.tsx
const handleStepClick = (index: number): void => {
  setCurrentStepIndex(index)
}
```

---

### Slide 3 — Passando Dados e Ações para o Card

```54:63:src/App.tsx
<Card 
  title={currentStep.title} 
  description={currentStep.description} 
  image={currentStep.image}
  onNext={nextStep}
  onPrev={prevStep}
  currentStepIndex={currentStepIndex}
  totalSteps={tutorialData.length}
  onStepClick={handleStepClick}
/>
```

---

### Slide 4 — Card: Tipagem e Lógica de Botões

- Tipagem das props:

```3:12:src/components/Card.tsx
interface CardProps {
  title: string;
  description: string;
  image: string;
  onNext: () => void;
  onPrev: () => void;
  currentStepIndex: number;
  totalSteps: number;
  onStepClick: (index: number) => void;
}
```

- Cálculo de primeira/última etapa:

```15:16:src/components/Card.tsx
const isFirstStep = currentStepIndex === 0;
const isLastStep = currentStepIndex === totalSteps - 1;
```

- Renderização de conteúdo e botões condicionais:

```19:37:src/components/Card.tsx
<div className="card-container">
  <Indicator 
    currentStepIndex={currentStepIndex}
    totalSteps={totalSteps}
    onStepClick={onStepClick}
  />
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
```

---

### Slide 5 — Indicator: Geração Dinâmica e Clique

- Geração dos pontos + clique para navegar:

```7:16:src/components/Indicator.tsx
export default function Indicator({ currentStepIndex, totalSteps, onStepClick }: IndicatorProps) {
  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`progress-dot ${index === currentStepIndex ? 'active' : ''}`}
          onClick={() => onStepClick(index)}
          style={{ cursor: 'pointer' }}
        >
```

- Destaque do ativo vs. inativo:

```17:24:src/components/Indicator.tsx
          {index === currentStepIndex ? (
            <div className="progress-line"></div>
          ) : (
            <div className="progress-dot-inactive"></div>
          )}
```

---

### Slide 6 — Animação (fade-in simples)

```57:73:src/App.css
@keyframes aparecer {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.card-image,
.card-content {
  animation: aparecer 0.5s ease-out;
}
```

---

### Slide 7 — Fluxo em 10 segundos

1) App guarda o índice e a lista de etapas.
2) App seleciona a etapa atual e passa para o Card.
3) Card mostra conteúdo e Indicator mostra progresso.
4) Botões/Indicator chamam funções do App para mudar etapa.
5) Estado muda → re-renderiza → CSS aplica fade-in.

