import { useEffect } from "react";
import { ResponsiveTable } from "../../../../components/ResponsiveTable"
import { useQuestions } from "./useQuestions";

export const MyQuestions = () => {
  const { questions, handleGetOptions } = useQuestions();

  useEffect(handleGetOptions, []);

  return (
    <div className="text-white flex flex-col gap-4">
      <div>
        <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={handleGetOptions}>Recarregar busca</button>
      </div>
      <ResponsiveTable data={questions} />
    </div>
  );
}