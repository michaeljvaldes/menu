import { Coffee } from "./coffee";
import { Rating } from "./rating";

export class Review {

  id: number;
  dateTime: Date;
  rating: Rating;
  brewMethod: number;
  temperature: number;
  notes: string;
  coffee: Coffee;

}
