import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Startscreen from "./startscreen";
import Question from "./Question";
import Nexbtn from "./Nextbtn";
import Prog from "./prog";
import Finish from "./Finish";
const initialState = {
  questions: [],
  status: "loading",
  index : 0,
  answer: null,
  points:0,
  highscore: 0
};
function reducer(state, action) {
  switch (action.type) {
    case "questionsReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case "datafieldsError":
      return {
        ...state,
        questions: [],
        status: "error"
      };
    case "start":
      return {
        ...state,
        status: "active"
      };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points
      };
    case "next":
      return {
        ...state,
        index: state.index + 1,
        answer: null
      };    
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore: state.points > state.highscore ? state.points : state.highscore
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
export default function App() {
  const [{questions, status , index, answer , points , highscore} , dispatch] = useReducer(reducer, initialState);
  const num = questions.length;

  const maxpossiblepoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "questionsReceived", payload: data }))
      .catch((err) => dispatch({ type: "datafieldsError" }));
  }, []);
  return(
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "ready" && <Startscreen num={num} dispatch={dispatch} />}
        {status === "error" && <Error />}
        {status === 'active' &&
        <>
        <Prog index={index} numQuestions={num} points={points} maxpossiblepoints={maxpossiblepoints} answer={answer}></Prog>
        <Question questions={questions[index]} dispatch={dispatch} answer={answer} />
        <Nexbtn dispatch={dispatch} answer={answer} index={index} numQuestions={num} />
        </>
        }
        {status === "finished" && <Finish points={points} maxpossiblepoints={maxpossiblepoints} highscore={highscore}/>}
      </Main>
    </div>
  );
} 