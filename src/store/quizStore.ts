import { create } from 'zustand'

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  explanation?: string
}

export interface QuizResult {
  questionId: string
  selectedAnswer: number
  isCorrect: boolean
  timeTaken: number
}

interface QuizState {
  questions: Question[]
  currentQuestionIndex: number
  selectedAnswer: number | null
  results: QuizResult[]
  isQuizCompleted: boolean
  startTime: number
  category: string
  difficulty: string
  
  // Actions
  setQuestions: (questions: Question[]) => void
  setCurrentQuestionIndex: (index: number) => void
  setSelectedAnswer: (answer: number | null) => void
  submitAnswer: (questionId: string, selectedAnswer: number, timeTaken: number) => void
  nextQuestion: () => void
  resetQuiz: () => void
  setQuizSettings: (category: string, difficulty: string) => void
  completeQuiz: () => void
}

export const useQuizStore = create<QuizState>((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswer: null,
  results: [],
  isQuizCompleted: false,
  startTime: Date.now(),
  category: '',
  difficulty: 'medium',

  setQuestions: (questions) => set({ questions }),
  
  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  
  setSelectedAnswer: (answer) => set({ selectedAnswer: answer }),
  
  submitAnswer: (questionId, selectedAnswer, timeTaken) => {
    const state = get()
    const question = state.questions.find(q => q.id === questionId)
    const isCorrect = question ? selectedAnswer === question.correctAnswer : false
    
    const result: QuizResult = {
      questionId,
      selectedAnswer,
      isCorrect,
      timeTaken
    }
    
    set({
      results: [...state.results, result]
    })
  },
  
  nextQuestion: () => {
    const state = get()
    if (state.currentQuestionIndex < state.questions.length - 1) {
      set({
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswer: null
      })
    } else {
      set({ isQuizCompleted: true })
    }
  },
  
  resetQuiz: () => set({
    questions: [],
    currentQuestionIndex: 0,
    selectedAnswer: null,
    results: [],
    isQuizCompleted: false,
    startTime: Date.now(),
    category: '',
    difficulty: 'medium'
  }),
  
  setQuizSettings: (category, difficulty) => set({
    category,
    difficulty,
    startTime: Date.now()
  }),
  
  completeQuiz: () => set({ isQuizCompleted: true })
}))