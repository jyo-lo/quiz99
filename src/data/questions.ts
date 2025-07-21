import { Question } from '../store/quizStore'

export const questionDatabase: Question[] = [
  // General Knowledge - Easy
  {
    id: 'gk-easy-1',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 2,
    category: 'general-knowledge',
    difficulty: 'easy',
    explanation: 'Paris is the capital and most populous city of France.'
  },
  {
    id: 'gk-easy-2',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 1,
    category: 'general-knowledge',
    difficulty: 'easy',
    explanation: 'Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
  },
  {
    id: 'gk-easy-3',
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    correctAnswer: 2,
    category: 'general-knowledge',
    difficulty: 'easy',
    explanation: 'There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.'
  },

  // General Knowledge - Medium
  {
    id: 'gk-medium-1',
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
    correctAnswer: 2,
    category: 'general-knowledge',
    difficulty: 'medium',
    explanation: 'Vatican City is the smallest sovereign state in the world, with an area of approximately 0.17 square miles.'
  },
  {
    id: 'gk-medium-2',
    question: 'Which element has the chemical symbol "Au"?',
    options: ['Silver', 'Gold', 'Aluminum', 'Argon'],
    correctAnswer: 1,
    category: 'general-knowledge',
    difficulty: 'medium',
    explanation: 'Gold has the chemical symbol "Au" from its Latin name "aurum".'
  },

  // Science - Easy
  {
    id: 'science-easy-1',
    question: 'What gas do plants absorb from the atmosphere during photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    category: 'science',
    difficulty: 'easy',
    explanation: 'Plants absorb carbon dioxide from the atmosphere and convert it into glucose during photosynthesis.'
  },
  {
    id: 'science-easy-2',
    question: 'How many bones are in the adult human body?',
    options: ['196', '206', '216', '226'],
    correctAnswer: 1,
    category: 'science',
    difficulty: 'easy',
    explanation: 'An adult human body has 206 bones, while babies are born with about 270 bones.'
  },

  // Science - Medium
  {
    id: 'science-medium-1',
    question: 'What is the hardest natural substance on Earth?',
    options: ['Graphite', 'Diamond', 'Quartz', 'Titanium'],
    correctAnswer: 1,
    category: 'science',
    difficulty: 'medium',
    explanation: 'Diamond is the hardest natural substance on Earth, rating 10 on the Mohs scale of hardness.'
  },
  {
    id: 'science-medium-2',
    question: 'What type of animal is a Komodo dragon?',
    options: ['Snake', 'Lizard', 'Crocodile', 'Salamander'],
    correctAnswer: 1,
    category: 'science',
    difficulty: 'medium',
    explanation: 'The Komodo dragon is the largest living species of lizard, found in Indonesia.'
  },

  // Technology - Easy
  {
    id: 'tech-easy-1',
    question: 'What does "WWW" stand for?',
    options: ['World Wide Web', 'World Wide Wire', 'World Web Wide', 'Wide World Web'],
    correctAnswer: 0,
    category: 'technology',
    difficulty: 'easy',
    explanation: 'WWW stands for World Wide Web, the information system on the Internet.'
  },
  {
    id: 'tech-easy-2',
    question: 'Which company developed the iPhone?',
    options: ['Samsung', 'Google', 'Apple', 'Microsoft'],
    correctAnswer: 2,
    category: 'technology',
    difficulty: 'easy',
    explanation: 'Apple Inc. developed and manufactures the iPhone smartphone.'
  },

  // Technology - Medium
  {
    id: 'tech-medium-1',
    question: 'What does "CPU" stand for in computer terminology?',
    options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Program Unit', 'Computer Program Unit'],
    correctAnswer: 0,
    category: 'technology',
    difficulty: 'medium',
    explanation: 'CPU stands for Central Processing Unit, often called the "brain" of the computer.'
  },
  {
    id: 'tech-medium-2',
    question: 'Which programming language is known as the "language of the web"?',
    options: ['Python', 'Java', 'JavaScript', 'C++'],
    correctAnswer: 2,
    category: 'technology',
    difficulty: 'medium',
    explanation: 'JavaScript is often called the "language of the web" as it runs in web browsers and enables interactive web pages.'
  },

  // History - Easy
  {
    id: 'history-easy-1',
    question: 'In which year did World War II end?',
    options: ['1944', '1945', '1946', '1947'],
    correctAnswer: 1,
    category: 'history',
    difficulty: 'easy',
    explanation: 'World War II ended in 1945 with the surrender of Japan in September.'
  },
  {
    id: 'history-easy-2',
    question: 'Who was the first person to walk on the moon?',
    options: ['Buzz Aldrin', 'Neil Armstrong', 'John Glenn', 'Alan Shepard'],
    correctAnswer: 1,
    category: 'history',
    difficulty: 'easy',
    explanation: 'Neil Armstrong was the first person to walk on the moon on July 20, 1969.'
  },

  // History - Medium
  {
    id: 'history-medium-1',
    question: 'Which ancient wonder of the world was located in Alexandria?',
    options: ['Hanging Gardens', 'Lighthouse', 'Colossus', 'Mausoleum'],
    correctAnswer: 1,
    category: 'history',
    difficulty: 'medium',
    explanation: 'The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World.'
  },
  {
    id: 'history-medium-2',
    question: 'The Berlin Wall fell in which year?',
    options: ['1987', '1988', '1989', '1990'],
    correctAnswer: 2,
    category: 'history',
    difficulty: 'medium',
    explanation: 'The Berlin Wall fell on November 9, 1989, marking a key moment in the end of the Cold War.'
  }
]

export const categories = [
  {
    id: 'general-knowledge',
    name: 'General Knowledge',
    description: 'Test your general knowledge across various topics',
    icon: '🧠',
    color: 'bg-blue-500'
  },
  {
    id: 'science',
    name: 'Science',
    description: 'Biology, Chemistry, Physics, and Earth Sciences',
    icon: '🔬',
    color: 'bg-green-500'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Computing, Programming, and Digital Innovation',
    icon: '💻',
    color: 'bg-purple-500'
  },
  {
    id: 'history',
    name: 'History',
    description: 'World History, Events, and Historical Figures',
    icon: '📚',
    color: 'bg-amber-500'
  }
]

export const getQuestionsByCategory = (category: string, difficulty?: string, limit?: number): Question[] => {
  let filtered = questionDatabase.filter(q => q.category === category)
  
  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty)
  }
  
  if (limit) {
    // Shuffle and take only the specified number
    const shuffled = filtered.sort(() => 0.5 - Math.random())
    return shuffled.slice(0, limit)
  }
  
  return filtered.sort(() => 0.5 - Math.random())
}