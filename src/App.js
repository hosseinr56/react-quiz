import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Startscreen from "./startscreen";
const initialState = {
  questions: [],
  status: "loading"
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
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
export default function App() {
  const [{questions, status} , dispatch] = useReducer(reducer, initialState);
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
        {status === "ready" && <Startscreen num={num} />}
        {status === "error" && <Error />}
      </Main>
    </div>
  );
}