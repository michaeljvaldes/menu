import { Coffee } from "./coffee";

export class Review {

  id: number;
  dateTime: Date;
  rating: number;
  brewMethod: number;
  temperature: number;
  notes: string;
  coffee: Coffee;
}
