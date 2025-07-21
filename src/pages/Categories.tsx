import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Star } from 'lucide-react'
import { categories } from '../data/questions'
import { useQuizStore } from '../store/quizStore'

const Categories = () => {
  const navigate = useNavigate()
  const setQuizSettings = useQuizStore(state => state.setQuizSettings)
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium'>('medium')

  const difficulties = [
    { value: 'easy', label: 'Easy', description: 'Perfect for beginners', color: 'bg-green-100 text-green-800' },
    { value: 'medium', label: 'Medium', description: 'Challenge yourself', color: 'bg-yellow-100 text-yellow-800' }
  ]

  const handleStartQuiz = (categoryId: string) => {
    setQuizSettings(categoryId, selectedDifficulty)
    navigate(`/quiz/${categoryId}`)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Choose Your Quiz Category
        </h1>
        <p className="text-lg text-gray-600">
          Select a category and difficulty level to start your quiz journey
        </p>
      </motion.div>

      {/* Difficulty Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          Select Difficulty Level
        </h2>
        <div className="flex justify-center gap-4">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty.value}
              onClick={() => setSelectedDifficulty(difficulty.value as 'easy' | 'medium')}
              className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                selectedDifficulty === difficulty.value
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${difficulty.color}`}>
                  {difficulty.label}
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">{difficulty.description}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="quiz-card group cursor-pointer"
            onClick={() => handleStartQuiz(category.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg ${category.color} text-white text-2xl`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-gray-600">
                  Difficulty: {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Click to start
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 bg-blue-50 rounded-lg p-6"
      >
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          How it works
        </h3>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Choose your preferred difficulty level</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Select a category that interests you</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Answer questions and get instant feedback</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Review your results and learn from explanations</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Categories