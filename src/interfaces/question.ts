import { Answer } from "./answer";

export interface Question {
  status: string;
  answer: Answer;
  date_created: string;
  deleted_from_listing: boolean;
  from: {
    id: number;
  };
  hold: boolean;
  id: number;
  item_id: string;
  productResponse: {
    id: string;
    site_id: string;
    title: string;
    subtitle: string | null;
  };
  question: {
    id: number;
  };
  seller_id: number;
  tags: string[];
  text: string;
}