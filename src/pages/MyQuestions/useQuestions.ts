import { Dispatch, SetStateAction, useEffect } from "react"
import { Question } from "../../interfaces/question";
import { getLocalStorageToken } from "../../util/token";
import { requestQuestions } from "../../services/mercado-livre-service";
import { useLoading } from "../../contexts/loadingContext";


interface UseQuestionsProps {
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}

const getQuestions = async (setQuestions: Dispatch<SetStateAction<Question[]>>) => {
  const localToken = getLocalStorageToken();
  const userId = localToken ?
    JSON.parse(localToken).user_id : '';
  const questions = await requestQuestions(userId);
  setQuestions(questions);
}

export const useQuestions = ({ setQuestions }: UseQuestionsProps) => {
  const { setIsLoading } = useLoading();

  const handleGetOptions = async () => {
    setIsLoading(true);
    try {
      await getQuestions(setQuestions);
    } catch (error) {
      console.log('error', error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleGetOptions();
  }, []);

  return { handleGetOptions };
}