import { useState } from "react";
import { useQuestionContext } from "../../../contexts/questionContext"
import { QuestionComponent } from "../Question";
import { ConfirmModal } from "../../../components/ConfirmModal";

export const QuestionsComponent = () => {
  const { questions } = useQuestionContext();
  const [open, setOpen] = useState(false);
  const handleModalClose = () => setOpen(false);
  const handleModalOpen = () => setOpen(true);
  return (
    <div>
      {questions?.map(question => (
        <QuestionComponent
          question={question}
          key={question.id}
          handleOpenModal={handleModalOpen}
        />
      ))}
      <ConfirmModal
        open={open}
        handleClose={handleModalClose}
      />
    </div>
  )
}