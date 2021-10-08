import axios from "axios";

type Review = {
  id: number,
  reaction_image?: any[],
  review_title: string,
  review_body:string,
  nose_rating?: number,
  taste_rating?: number,
  finish_rating?: number,
  flavor_tag: number[]
}

async function createReview(whisky_pk:number, review: any) {
  try{
    const response = await axios.post(`/api/reaction/${whisky_pk}/create`,
    review);
    return response.data;
  }
  catch(e){
    console.error(e);
  }
}

async function getReviews(whisky_pk: number) {
  try{
    const response = await axios.post(`/api/reaction/${whisky_pk}`)
    return response.data
  }
  catch(e) {
    console.error(e)
  }
}

export const ReactionApi = { 
  createReview,
  getReviews

}