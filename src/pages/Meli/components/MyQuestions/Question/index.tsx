import { useState } from "react";
import { Question } from "../../../../../interfaces/question";
import { createChatGptAnswer, approveAnswer, createUserAnswer } from "../../../../../services/answer-service";

interface QuestionComponentProps {
  question: Question
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  questions: Question[];
}

const getDateString = (date: Date) => `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`

export const QuestionComponent = ({ question, setQuestions, questions }: QuestionComponentProps) => {
  const date = getDateString(new Date(question.date_created));

  const [userAnswer, setuserAnswer] = useState('');

  const handleCreateChatGptAnswer = async (questionId: number) => {
    const newAnswer = await createChatGptAnswer(questionId);
    const currentQuestions = questions.map(x => {
      if (x.id === question.id)
        x.answer = newAnswer;
      return x;
    });
    setQuestions(currentQuestions);
  }

  const handleCreateManualAnswer = async (questionId: number, answer: string) => {
    const newAnswer = await createUserAnswer(questionId, answer);
    const currentQuestions = questions.map(x => {
      if (x.id === question.id)
        x.answer = newAnswer;
      return x;
    });
    setQuestions(currentQuestions);
  }

  const handleApproveMessage = async (questionId: number) => {
    const newAnswer = await approveAnswer(questionId);
    const currentQuestions = questions.map(x => {
      if (x.id === question.id)
        x.answer = newAnswer;
      return x;
    });
    setQuestions(currentQuestions);
  }

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
        <div className="border border-slate-700 py-2">
          <div className="p-2">
            Resposta chat-gpt:
          </div>
          <hr />
          <div className="p-2 h-32">
            {question.answer && question.answer.chatGptAnswer ?
              <div>
                {!question.answer.approved &&
                  <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleCreateChatGptAnswer(question.id)}>Gerar resposta</button>}
                <div className="mt-2">
                  <p>{question.answer.answer}</p>
                  {!question.answer.approved &&
                    <button type="button" className="bg-green-600 h-16 w-16 rounded-full float-right align-bottom mt-8" onClick={() => handleApproveMessage(question.id)}>👍</button>}
                </div>
              </div> :
              <div>
                <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleCreateChatGptAnswer(question.id)}>Gerar resposta</button>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="border border-slate-700 py-2">
          <div className="p-2">
            Responder manualmente:
          </div>
          <hr />
          <div className="p-2 h-32">
            {question.answer && !question.answer.chatGptAnswer ?
              <div>
                <div className="mt-2">
                  <p>{question.answer.answer}</p>
                </div>
              </div> :
              <div>
                <input type="text" className='bg-transparent border border-blue-500' value={userAnswer} onChange={e => setuserAnswer(e.target.value)}/>
                <br/>
                <button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => handleCreateManualAnswer(question.id, userAnswer)}>Enviar resposta</button>
              </div>
            }
          </div>
        </div>
    </div >
  );
}