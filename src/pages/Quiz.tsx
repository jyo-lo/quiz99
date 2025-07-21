import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, CheckCircle, XCircle, ArrowRight } from 'lucide-react'
import { useQuizStore } from '../store/quizStore'
import { getQuestionsByCategory } from '../data/questions'
import clsx from 'clsx'

const Quiz = () => {
  const { category } = useParams<{ category: string }>()
  const navigate = useNavigate()
  
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    results,
    isQuizCompleted,
    difficulty,
    setQuestions,
    setSelectedAnswer,
    submitAnswer,
    nextQuestion,
    resetQuiz
  } = useQuizStore()

  const [showAnswer, setShowAnswer] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  const currentQuestion = questions[currentQuestionIndex]

  useEffect(() => {
    if (category) {
      const categoryQuestions = getQuestionsByCategory(category, difficulty, 5)
      setQuestions(categoryQuestions)
      resetQuiz()
    }
  }, [category, difficulty, setQuestions, resetQuiz])

  useEffect(() => {
    if (isQuizCompleted) {
      navigate('/results')
    }
  }, [isQuizCompleted, navigate])

  useEffect(() => {
    setQuestionStartTime(Date.now())
    setTimeLeft(30)
    setShowAnswer(false)
  }, [currentQuestionIndex])

  useEffect(() => {
    if (timeLeft > 0 && !showAnswer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !showAnswer) {
      handleSubmitAnswer()
    }
  }, [timeLeft, showAnswer])

  const handleAnswerSelect = (answerIndex: number) => {
    if (!showAnswer) {
      setSelectedAnswer(answerIndex)
    }
  }

  const handleSubmitAnswer = () => {
    if (currentQuestion && selectedAnswer !== null) {
      const timeTaken = Date.now() - questionStartTime
      submitAnswer(currentQuestion.id, selectedAnswer, timeTaken)
      setShowAnswer(true)
    }
  }

  const handleNextQuestion = () => {
    nextQuestion()
    setSelectedAnswer(null)
  }

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading quiz...</p>
        </div>
      </div>
    )
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className={clsx(
              "text-sm font-medium",
              timeLeft <= 10 ? "text-red-600" : "text-gray-700"
            )}>
              {timeLeft}s
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="quiz-card mb-8"
        >
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={clsx(
                "px-3 py-1 rounded-full text-sm font-medium",
                currentQuestion.difficulty === 'easy' 
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              )}>
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </span>
              <span className="text-sm text-gray-500">
                {currentQuestion.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 leading-relaxed">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Answer Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === currentQuestion.correctAnswer
              const isIncorrect = showAnswer && isSelected && !isCorrect

              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: showAnswer ? 1 : 1.02 }}
                  whileTap={{ scale: showAnswer ? 1 : 0.98 }}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={clsx(
                    "answer-option w-full text-left relative",
                    isSelected && !showAnswer && "selected",
                    showAnswer && isCorrect && "correct",
                    showAnswer && isIncorrect && "incorrect"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">{option}</span>
                    {showAnswer && isCorrect && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-2" />
                    )}
                    {showAnswer && isIncorrect && (
                      <XCircle className="w-5 h-5 text-red-600 ml-2" />
                    )}
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          {showAnswer && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 rounded-lg p-4 mb-6"
            >
              <h4 className="font-medium text-blue-900 mb-2">Explanation:</h4>
              <p className="text-blue-800">{currentQuestion.explanation}</p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <div className="flex space-x-2">
              {selectedAnswer !== null && !showAnswer && (
                <button
                  onClick={handleSubmitAnswer}
                  className="btn-primary"
                >
                  Submit Answer
                </button>
              )}
            </div>
            
            {showAnswer && (
              <button
                onClick={handleNextQuestion}
                className="btn-primary flex items-center space-x-2"
              >
                <span>
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Current Score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 text-center"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Score</h3>
        <div className="text-3xl font-bold text-primary-600">
          {results.filter(r => r.isCorrect).length} / {results.length}
        </div>
        <p className="text-gray-600 mt-1">
          {results.length > 0 
            ? `${Math.round((results.filter(r => r.isCorrect).length / results.length) * 100)}% correct`
            : 'Answer questions to see your score'
          }
        </p>
      </motion.div>
    </div>
  )
}

export default Quiz