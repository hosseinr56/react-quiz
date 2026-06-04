import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Startscreen from "./startscreen";
import Question from "./Question";
import { point } from "leaflet";
const initialState = {
  questions: [],
  status: "loading",
  index : 0,
  answer: null,
  points:0,
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
export default function App() {
  const [{questions, status , index, answer} , dispatch] = useReducer(reducer, initialState);
  const num = questions.length;
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
        {status === 'active' && <Question questions={questions[index]} dispatch={dispatch} answer={answer} />}
      </Main>
    </div>
  );
}