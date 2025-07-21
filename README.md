# Quiz99 - Interactive Learning Platform

A modern, interactive quiz application built with React, TypeScript, and Tailwind CSS. Test your knowledge across multiple categories with beautiful animations and detailed feedback.

## 🚀 Features

- **Multiple Categories**: Science, Technology, History, and General Knowledge
- **Difficulty Levels**: Easy and Medium questions to match your skill level
- **Interactive UI**: Smooth animations and responsive design
- **Real-time Feedback**: Instant results with explanations
- **Progress Tracking**: Monitor your performance and learning progress
- **Timer**: 30-second timer per question to add challenge
- **Detailed Results**: Comprehensive breakdown of your quiz performance

## 🛠️ Technologies Used

- **React 18** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/jyo-lo/quiz99.git
cd quiz99
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Start**: Click "Start Quiz" on the home page
2. **Choose**: Select a category and difficulty level
3. **Answer**: Read questions carefully and select your answers
4. **Learn**: Review explanations for each question
5. **Improve**: Check your results and try again to improve

## 📱 Features Overview

### Categories Available
- 🧠 **General Knowledge** - Test your overall knowledge
- 🔬 **Science** - Biology, Chemistry, Physics questions
- 💻 **Technology** - Computing and digital innovation
- 📚 **History** - World events and historical figures

### Quiz Experience
- Clean, modern interface
- Responsive design for all devices
- 30-second timer per question
- Instant feedback with explanations
- Progress tracking throughout the quiz
- Detailed results with performance analytics

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Navigation component
├── data/               # Static data and utilities
│   └── questions.ts    # Question database
├── pages/              # Main application pages
│   ├── Home.tsx       # Landing page
│   ├── Categories.tsx # Category selection
│   ├── Quiz.tsx       # Quiz interface
│   └── Results.tsx    # Results display
├── store/              # State management
│   └── quizStore.ts   # Zustand store
├── App.tsx            # Main app component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

The application is highly customizable:

- **Add Questions**: Extend the question database in `src/data/questions.ts`
- **New Categories**: Add categories and update the data structure
- **Styling**: Modify Tailwind classes or extend the theme
- **Features**: Add new quiz modes, difficulty levels, or game mechanics

## 📊 Question Format

Questions follow this structure:

```typescript
{
  id: 'unique-id',
  question: 'Your question text',
  options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  correctAnswer: 0, // Index of correct option
  category: 'category-id',
  difficulty: 'easy' | 'medium',
  explanation: 'Optional explanation text'
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Future Enhancements

- [ ] User authentication and profiles
- [ ] Leaderboards and competition mode
- [ ] More difficulty levels (Hard, Expert)
- [ ] Timed quiz modes
- [ ] Custom quiz creation
- [ ] Social sharing features
- [ ] Mobile app version
- [ ] Offline mode support

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

Made with ❤️ by the Quiz99 Team