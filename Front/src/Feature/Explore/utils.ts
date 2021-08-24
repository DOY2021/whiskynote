import { Ordering } from "../../hook/swr/useWhiskyMain";
import { OrderByProp } from "./constants";

export const getProperOrdering = (param: OrderByProp) => {
  if(param === 'popular') return Ordering.RATING_COUNTS
  else return Ordering.UPDATED_AT
}