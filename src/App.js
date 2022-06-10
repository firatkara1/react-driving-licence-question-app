import "./App.css";
import Home from "./pages/Home";

import AppContext from "./contexts/AppContext";
import { useContext } from "react";
import QuizPage from "./pages/QuizPage";
import Result from "./pages/Result";
function App() {
  const { appState } = useContext(AppContext);

  return (
    <div className="App">
      {appState === "home" && <Home />}
      {appState === "quiz" && <QuizPage />}
      {appState === "result" && <Result />}
    </div>
  );
}

export default App;
