import { useLoading } from "../../../contexts/loadingContext";
import { useQuestionContext } from "../../../contexts/questionContext";
import { Question } from "../../../interfaces/question";
import { approveAnswer, createChatGptAnswer } from "../../../services/answer-service";


interface QuestionComponentProps {
  question: Question;
  handleOpenModal: () => void;
}

const getDateString = (date: Date) => `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`

export const QuestionComponent = ({ question, handleOpenModal }: QuestionComponentProps) => {
  const { questions, setQuestions } = useQuestionContext();
  const { setIsLoading } = useLoading();
  const { setQuestion } = useQuestionContext();
  const date = getDateString(new Date(question.date_created));

  const handleCreateChatGptAnswer = async (questionId: number) => {
    setIsLoading(true);
    const newAnswer = await createChatGptAnswer(questionId);
    const currentQuestions = questions.map(x => {
      if (x.id === question.id)
        x.answer = newAnswer;
      return x;
    });
    setQuestions(currentQuestions);
    setIsLoading(false);
  }

  const handleApproveMessage = async (questionId: number) => {
    setIsLoading(true);
    const newAnswer = await approveAnswer(questionId);
    const currentQuestions = questions.map(x => {
      if (x.id === question.id)
        x.answer = newAnswer;
      return x;
    });
    setQuestions(currentQuestions);
    setIsLoading(false);
  }

  const handleOnDislikeButtonClick = () => {
    setQuestion(question)
    handleOpenModal();
  }

  const questionApproved = question.answer.approved;
  return (
    <div className="p-4 border border-slate-700 rounded-lg">
      <div className="flex flex-col border border-slate-700 rounded">
        <div className="grid grid-cols-4">
          <div className="border border-slate-700 ">
            <div className="p-2">
              <h6>Produto</h6>
            </div>
            <hr />
            <div className="p-2">
              <h5>{question.productResponse.title}</h5>
            </div>
          </div>
          <div className="col-span-2 border border-slate-700 ">
            <div className="p-2">
              <h6>Pergunta</h6>
            </div>
            <hr />
            <div className="p-2">
              <h5>{question.text}</h5>
            </div>
          </div>
          <div className="border border-slate-700 ">
            <div className="p-2">
              <h6>Data</h6>
            </div>
            <hr />
            <div className="p-2">
              <h5>{date}</h5>
            </div>
          </div>
        </div>
        <div className="border border-slate-700">
          <div className="px-2 py-4">
            <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleCreateChatGptAnswer(question.id)}>Gerar resposta</button>
          </div>
          <hr />
          <div className="p-2 h-32">
            <p>{question.answer.text}</p>
            <div className="flex gap-2 justify-end">
              <button hidden={questionApproved}
                type="button"
                className="bg-red-600 h-16 w-16 rounded-full float-right align-bottom mt-8"
                onClick={handleOnDislikeButtonClick}>
                👎
              </button>
              <button hidden={questionApproved}
                type="button"
                className="bg-green-600 h-16 w-16 rounded-full float-right align-bottom mt-8"
                onClick={() => handleApproveMessage(question.id)}>
                👍
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}