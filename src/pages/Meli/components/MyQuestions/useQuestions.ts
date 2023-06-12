import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { requestQuestions } from "../../../../services/mercado-livre-service";
import { getLocalStorageToken } from "../../../../util/token";
import { Question } from "../../../../interfaces/question";

const getQuestions = async (setQuestions: Dispatch<SetStateAction<Question[]>>) => {
  const localToken = getLocalStorageToken();
  const userId = localToken ?
    JSON.parse(localToken).user_id : '';
  const questions = await requestQuestions(userId);
  setQuestions(questions);
}

export const useQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleGetOptions = () => {
    getQuestions(setQuestions);
  }

  useEffect(() => handleGetOptions, []);

  return { questions, setQuestions, handleGetOptions };
}