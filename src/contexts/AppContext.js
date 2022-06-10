import { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [categories, setCategories] = useState(null);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [questionData, setQuestionData] = useState("");
  const [appState, setAppState] = useState("home");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);
  const [className, setClassName] = useState("option");

  const values = {
    index,
    setIndex,
    categories,
    clickedCategory,
    setClickedCategory,
    questionData,
    setQuestionData,
    appState,
    setAppState,
    selectedAnswer,
    setSelectedAnswer,
    correctAnswer,
    setCorrectAnswer,
    wrongAnswer,
    setWrongAnswer,
    score,
    timer,
    setTimer,
    setScore,
    className,
    setClassName,
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = collection(db, "categories");
      const querySnapShot = await getDocs(q);

      const queryCategories = querySnapShot.docs.map((detail) => ({
        categoryId: detail.id,
        categoryName: detail.data().categoryName,
      }));
      setCategories([...queryCategories]);
      //   console.log("queryData: ", queryCategories);

      const subcollectionSnapshot = await getDocs(
        collection(db, "categories", clickedCategory, "questions")
      );

      const queryQuestionData = subcollectionSnapshot?.docs.map((q) => ({
        id: q.id,
        question: q.data().question,
        answer: q.data().answer,
        option1: q.data().option1,
        option2: q.data().option2,
        option3: q.data().option3,
        option4: q.data().option4,
      }));
      setQuestionData([...queryQuestionData]);
    };
    fetchData();
  }, [clickedCategory]);

  //   console.log("AppContext Clicked Category Test: ", clickedCategory);

  return (
    <div className="main">
      <AppContext.Provider value={values}>{children}</AppContext.Provider>
    </div>
  );
};
export default AppContext;
