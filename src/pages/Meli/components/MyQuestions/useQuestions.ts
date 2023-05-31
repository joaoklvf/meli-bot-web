import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { requestQuestions } from "../../../../services/mercado-livre-service";

const getQuestions = async (setQuestions: Dispatch<SetStateAction<string[]>>) => {
  const questions = await requestQuestions();
  setQuestions(questions);
}

export const useQuestions = () => {
  const [questions, setQuestions] = useState<any[]>([]);

  const handleGetOptions = () => {
    getQuestions(setQuestions);
  }

  useEffect(() => handleGetOptions, []);

  return { questions, handleGetOptions };
}