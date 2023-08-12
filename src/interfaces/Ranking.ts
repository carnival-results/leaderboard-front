import { Category } from "./Category";

export interface Ranking {
  position: number;
  schoolName: string;
  score: number;
  categories: Category[];
}
