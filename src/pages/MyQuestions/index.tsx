import { useQuestions } from "./useQuestions";
import { useQuestionContext } from "../../contexts/questionContext";
import { QuestionsComponent } from "./Questions";


export const MyQuestions = () => {
  const { setQuestions } = useQuestionContext();
  const { handleGetOptions } = useQuestions({ setQuestions });

  return (
    <div className="text-white flex flex-col gap-4">
      <div>
        <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleGetOptions}>Recarregar busca</button>
      </div>
      <QuestionsComponent />
    </div>
  );
}