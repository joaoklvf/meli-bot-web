export interface Answer {
  text: string;
  approved: boolean;
  chatGptAnswer: boolean;
  id: string;
  questionId: number;
}