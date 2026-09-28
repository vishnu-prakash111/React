import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "None of these",
    ],
    answer: "JavaScript XML",
  },

  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useRef", "useContext"],
    answer: "useState",
  },

  {
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Meta", "Amazon"],
    answer: "Meta",
  },

  {
    question: "Which language is primarily used with React?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript",
  },

  {
    question: "Which hook is commonly used for side effects?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useEffect",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    if (option === question.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h1>Quiz Completed</h1>

          <h2>
            Your Score: {score}/{questions.length}
          </h2>

          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-box">

        <h1>React Quiz</h1>

        <p className="question-number">
          Question {currentQuestion + 1}/{questions.length}
        </p>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={
                selectedAnswer === option
                  ? "option selected"
                  : "option"
              }
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          className="next-button"
          onClick={handleNext}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>

      </div>
    </div>
  );
}

export default App;

