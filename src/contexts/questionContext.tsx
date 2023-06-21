import { createContext, useState, Dispatch, SetStateAction, ReactNode, useContext } from 'react';
import { Question } from '../interfaces/question';

type QuestionValue = Question | null;

interface QuestionContextProps {
  question: QuestionValue,
  setQuestion: Dispatch<SetStateAction<QuestionValue>>,
  questions: Question[]
  setQuestions: Dispatch<SetStateAction<Question[]>>
}

interface QuestionProviderProps {
  children: ReactNode
}

const QuestionContext = createContext<QuestionContextProps>({} as QuestionContextProps);


export function QuestionProvider({ children }: QuestionProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [question, setQuestion] = useState<QuestionValue>(null);

  const questionContextValue = {
    question,
    setQuestion,
    questions,
    setQuestions
  }
  return (
    <QuestionContext.Provider value={questionContextValue}>
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestionContext() {
  return useContext(QuestionContext);
}

