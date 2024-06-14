import { Outlet, Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Survey() {
  const { questionNumberLink } = useParams()
  
  // Convertir questionNumberLink en nombre et gérer le cas où il n'est pas un nombre valide
  const initialQuestionNumber = parseInt(questionNumberLink, 10)
  const [questionNumber, setQuestionNumber] = useState(
    isNaN(initialQuestionNumber) ? 1 : Math.min(Math.max(initialQuestionNumber, 1), 10)
  )

  useEffect(() => {
    const newQuestionNumber = parseInt(questionNumberLink, 10)
    if (!isNaN(newQuestionNumber)) {
      setQuestionNumber(Math.min(Math.max(newQuestionNumber, 1), 10))
    }
  }, [questionNumberLink])

  // Tableau des questions
  const questions = [
    "Quelle est votre couleur préférée ?",
    "Quel est votre plat préféré ?",
    "Quelle est votre destination de vacances préférée ?",
    "Quel est votre hobby préféré ?",
    "Quel est votre film préféré ?",
    "Quel est votre livre préféré ?",
    "Quel est votre sport préféré ?",
    "Quel est votre animal préféré ?",
    "Quelle est votre chanson préférée ?",
    "Quel est votre souvenir d'enfance préféré ?"
  ]

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <p>{questions[questionNumber - 1]}</p>
      <button 
        onClick={() => setQuestionNumber(prev => Math.min(prev + 1, 10))} 
        disabled={questionNumber >= 10}
      >
        +
      </button>
      <button 
        onClick={() => setQuestionNumber(prev => Math.max(prev - 1, 1))} 
        disabled={questionNumber <= 1}
      >
        -
      </button>
      {/* <Link to="client">Questionnaire Client</Link>
      <Link to="freelance">Questionnaire Freelance</Link>
      <Outlet /> */}
    </div>
  )
}

export default Survey
