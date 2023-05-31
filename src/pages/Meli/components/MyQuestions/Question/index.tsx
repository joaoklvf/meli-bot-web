interface QuestionComponentProps {
  pergunta: any
}

const getDateString = (date: Date) => `${date.toLocaleDateString()} às ${date.toLocaleTimeString()}`

export const QuestionComponent = ({ pergunta }: QuestionComponentProps) => {
  const date = getDateString(new Date(pergunta.question.date_created));
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
              <h5>{pergunta.productResponse.title}</h5>
            </div>
          </div>
          <div className="col-span-2 border border-slate-700 ">
            <div className="p-2">
              <h6>Pergunta</h6>
            </div>
            <hr />
            <div className="p-2">
              <h5>{pergunta.text}</h5>
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
            <p>Mame minhas bolas amigo</p>
            <button type="button" className="bg-green-600 h-16 w-16 rounded-full float-right align-bottom mt-8">👍</button>
          </div>
        </div>
      </div>
    </div>
  );
}