import { useState, useEffect } from 'react';
import AnswerList from './AnswerList';
import GameOver from './GameOver';
import './App.css';
import { db } from "../api/firebase";
import { collection, getDocs } from "firebase/firestore";
import { auth } from "../api/firebase"
import { onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import Logout from './Logout';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctNumber, setCorrectNumber] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const questionData = [];

      querySnapshot.forEach((doc) => {
        questionData.push(doc.data());
      });

      setQuestions(questionData);
      setIsLoading(false);
    } catch (error) {
      console.error("データの取得中にエラーが発生しました: ", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleJudgeQuiz = (e) => {
    if (questions[questionNumber].correct === e.target.textContent) {
      alert('正解');
      setCorrectNumber(correctNumber + 1);
    } else {
      alert('不正解');
    }

    setQuestionNumber(questionNumber + 1);
  };

  return (
    <div className="quiz-container">
      {user ? <Logout /> : <Login />}
      {user && <p>{user.displayName}</p>}
      <h1>クイズ</h1>
      {isLoading ? (
        <div>ローディング中</div>
      ) : (
        questionNumber >= questions.length ? (
          <GameOver correctNumber={correctNumber} />
        ) : (
          <AnswerList
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            handleJudgeQuiz={handleJudgeQuiz}
          />
        )
      )}
    </div>
  );
};

export default App;
