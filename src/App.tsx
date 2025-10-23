import { useState } from 'react'
import './App.css'
import Card from './components/Card'

interface TutorialStep {
  title: string;
  description: string;
}

function App() {
  const tutorialData: TutorialStep[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Un minim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li mès hores. Al principi sembla impossible, però notaràs una millora ràpidament.'
    },
    {
      title: 'Programa projectes propis',
      description: 'Mès val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.'
    },
    {
      title: 'Procura descansar',
      description: 'Descansa bé i desconectar són vitals. D aquesta manera reduiràs l estress i l ansietat. Milloraràs la teva concentraciò i consolidaràs el teu aprenentatge.'
    }
  ];

  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0)

  const nextStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex < tutorialData.length ? nextIndex : prevIndex
    })
  }

  const currentStep = tutorialData[currentStepIndex]

  return (
    <div className="card">
      <Card title={currentStep.title} description={currentStep.description} onNext={nextStep} />
    </div>
  )
}

export default App
