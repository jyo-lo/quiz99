import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Play, Target, Trophy, Users } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'Multiple Categories',
      description: 'Choose from Science, Technology, History, and General Knowledge'
    },
    {
      icon: Target,
      title: 'Difficulty Levels',
      description: 'Test yourself with Easy, Medium, and Hard questions'
    },
    {
      icon: Trophy,
      title: 'Track Progress',
      description: 'Monitor your performance and see detailed results'
    },
    {
      icon: Users,
      title: 'Learn & Improve',
      description: 'Get explanations for answers and expand your knowledge'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="p-4 bg-primary-600 rounded-full"
          >
            <Brain className="w-16 h-16 text-white" />
          </motion.div>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-primary-600">Quiz99</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Challenge yourself with our interactive quiz platform. Test your knowledge 
          across multiple categories and track your learning progress.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/categories"
            className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Start Quiz</span>
          </Link>
          
          <Link
            to="/results"
            className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center space-x-2"
          >
            <Trophy className="w-5 h-5" />
            <span>View Results</span>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="quiz-card text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Quiz Statistics
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">18+</div>
            <div className="text-gray-600">Total Questions</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-600 mb-2">4</div>
            <div className="text-gray-600">Categories</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-600">Difficulty Levels</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
            <div className="text-gray-600">Learning Opportunities</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home