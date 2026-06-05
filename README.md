# 🧠 React Quiz App (useReducer Project)

A simple and interactive quiz application built with React, using useReducer for state management.  
This project was created as part of a learning journey to understand advanced state handling in React.

---

## 🚀 Features

- 📦 State management with useReducer
- ⏱ Countdown timer for the quiz
- 🧠 Dynamic question rendering
- ✅ Correct / wrong answer validation
- 📊 Score tracking system
- 🏁 Final result screen
- 🥇 High score tracking
- 🔄 Restart quiz functionality
- ⚡ Loading and error handling states

---

## 🛠️ Tech Stack

- React (Functional Components)
- useReducer & useEffect
- JavaScript (ES6+)
- CSS

---

## ⚙️ How It Works

This project is powered by a state machine using useReducer.

### App States:
- loading → fetching questions
- ready → start screen
- active → quiz in progress
- finished → result screen

---

## 📡 API

The questions are fetched from a local JSON server:

http://localhost:9000/questions

Example question format:

{
  "question": "What is React?",
  "options": ["Library", "Framework", "Language", "Tool"],
  "correctOption": 0,
  "points": 10
}

---

## ⏱ Timer System

- Each question has 30 seconds
- Total time = questions.length × 30
- Timer decreases every second using setInterval
- When time reaches 0 → quiz ends automatically

---

## 🧠 Learning Goals

This project helped practice:

- useReducer pattern in React
- Complex state management
- Component architecture
- Side effects with useEffect
- UI state transitions

---

## ▶️ Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/react-quiz-app.git

### 2. Install dependencies

npm install

### 3. Start development server

npm start

---

## 🏁 Result Screen

At the end of the quiz, users will see:

- Total score
- Maximum possible score
- High score record

---

## 👨‍💻 Author

Built by Hossein Ranjbari  
React learning project (useReducer deep dive)

---

## ⭐ Support

If you like this project, please give it a ⭐ on GitHub.