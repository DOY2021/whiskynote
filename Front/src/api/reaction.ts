import axios from "axios";

type Review = {
  id: number,
  review_title?: string,
  review_body:string,
  nose_rating: number,
  taste_rating: number,
  finish_rating: number,
  nose_tag: number[],
  taste_tag: number[],
  finish_tag: number[]
}

async function createReview(whisky_pk:number, review: any) {
  try{
    const response = await axios.post(`/reaction_list_create/${whisky_pk}`,
    review);
    return response.data;
  }
  catch(e){
    console.error(e);
  }
}

export const ReactionApi = { 
  createReview

}