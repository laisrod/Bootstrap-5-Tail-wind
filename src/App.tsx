import { useState } from 'react'
import './App.css'
import Card from './components/Card'

interface TutorialStep {
  title: string;
  description: string;
  image: string;
  bgColor: string;
}
function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  const tutorialData: TutorialStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li mès hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      image: '/src/img/time_managment.svg',
      bgColor: '#4fa3a4'
    },
    {
      title: 'Programa projectes propis',
      description: 'Mès val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      image: '/src/img/programming.svg',
      bgColor: '#cdccd2'
    },
    {
      title: 'Procura descansar',
      description: 'Descansa bé i desconectar són vitals. D aquesta manera reduiràs l estress i l ansietat. Milloraràs la teva concentraciò i consolidaràs el teu aprenentatge.',
      image: '/src/img/meditation.svg',
      bgColor: '#f2c255'
    }
  ];

  const currentStep = tutorialData[currentStepIndex]

  const nextStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex < tutorialData.length ? nextIndex : prevIndex
    })
  }
  const prevStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      const prevIndexValue = prevIndex - 1
      return prevIndexValue >= 0 ? prevIndexValue : prevIndex
    })
  }
  const handleStepClick = (index: number): void => {
    setCurrentStepIndex(index)
  }

  return (
    <div className="card">
      <Card 
        title={currentStep.title} 
        description={currentStep.description} 
        image={currentStep.image}
        bgColor={currentStep.bgColor}
        onNext={nextStep}
        onPrev={prevStep}
        currentStepIndex={currentStepIndex}
        totalSteps={tutorialData.length}
        onStepClick={handleStepClick}
      />
    </div>
  )
}

export default App