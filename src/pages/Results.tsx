import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Trophy, Target, Clock, CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react'
import { useQuizStore } from '../store/quizStore'
import { questionDatabase } from '../data/questions'

const Results = () => {
  const navigate = useNavigate()
  
  const {
    results,
    questions,
    category,
    difficulty,
    resetQuiz
  } = useQuizStore()

  const correctAnswers = results.filter(r => r.isCorrect).length
  const totalQuestions = results.length
  const scorePercentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0
  const averageTime = results.length > 0 
    ? Math.round(results.reduce((sum, r) => sum + r.timeTaken, 0) / results.length / 1000)
    : 0

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (percentage: number) => {
    if (percentage >= 90) return 'Excellent! Outstanding performance!'
    if (percentage >= 80) return 'Great job! You know your stuff!'
    if (percentage >= 70) return 'Good work! Room for improvement.'
    if (percentage >= 60) return 'Not bad! Keep practicing.'
    return 'Keep learning and try again!'
  }

  const handleRetakeQuiz = () => {
    resetQuiz()
    navigate(`/quiz/${category}`)
  }

  const handleNewCategory = () => {
    resetQuiz()
    navigate('/categories')
  }

  if (results.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="quiz-card"
        >
          <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Results Yet</h2>
          <p className="text-gray-600 mb-6">
            You haven't completed any quizzes yet. Start a quiz to see your results here!
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="btn-primary"
          >
            Start Your First Quiz
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Results</h1>
        <p className="text-lg text-gray-600">
          Category: {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} 
          • Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </p>
      </motion.div>

      {/* Score Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="quiz-card mb-8 text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`p-4 rounded-full ${scorePercentage >= 70 ? 'bg-green-100' : 'bg-red-100'}`}
          >
            <Trophy className={`w-12 h-12 ${scorePercentage >= 70 ? 'text-green-600' : 'text-red-600'}`} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className={`text-6xl font-bold mb-2 ${getScoreColor(scorePercentage)}`}>
            {scorePercentage}%
          </div>
          <div className="text-xl text-gray-600 mb-4">
            {correctAnswers} out of {totalQuestions} correct
          </div>
          <div className="text-lg font-medium text-gray-800">
            {getScoreMessage(scorePercentage)}
          </div>
        </motion.div>
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid md:grid-cols-3 gap-6 mb-8"
      >
        <div className="quiz-card text-center">
          <Target className="w-8 h-8 text-primary-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {scorePercentage}%
          </div>
          <div className="text-gray-600">Accuracy</div>
        </div>

        <div className="quiz-card text-center">
          <Clock className="w-8 h-8 text-primary-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {averageTime}s
          </div>
          <div className="text-gray-600">Avg. Time</div>
        </div>

        <div className="quiz-card text-center">
          <Trophy className="w-8 h-8 text-primary-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {totalQuestions}
          </div>
          <div className="text-gray-600">Questions</div>
        </div>
      </motion.div>

      {/* Question Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="quiz-card mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Question Breakdown</h2>
        <div className="space-y-4">
          {results.map((result, index) => {
            const question = questionDatabase.find(q => q.id === result.questionId)
            if (!question) return null

            return (
              <motion.div
                key={result.questionId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`p-4 rounded-lg border-2 ${
                  result.isCorrect 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-red-200 bg-red-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {result.isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    )}
                    <span className="font-medium text-gray-900">
                      Question {index + 1}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {Math.round(result.timeTaken / 1000)}s
                  </span>
                </div>
                
                <p className="text-gray-800 mb-2">{question.question}</p>
                
                <div className="text-sm">
                  <div className={result.isCorrect ? 'text-green-700' : 'text-red-700'}>
                    Your answer: {question.options[result.selectedAnswer]}
                  </div>
                  {!result.isCorrect && (
                    <div className="text-green-700 mt-1">
                      Correct answer: {question.options[question.correctAnswer]}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={handleRetakeQuiz}
          className="btn-primary flex items-center justify-center space-x-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Quiz</span>
        </button>
        
        <button
          onClick={handleNewCategory}
          className="btn-secondary flex items-center justify-center space-x-2"
        >
          <Target className="w-4 h-4" />
          <span>Try Different Category</span>
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="btn-secondary flex items-center justify-center space-x-2"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </motion.div>
    </div>
  )
}

export default Results