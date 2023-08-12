import { Grade } from "./Grade";

export interface Category {
  id: number;
  name: string;
  grades?: Grade[];
  tiebreaking: boolean;
}
