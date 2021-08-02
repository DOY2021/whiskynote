import { client } from "./client"

export type WhiskyImageProps = {
  id: number;
  image: string;
} 

export type WhiskyDetailsProps  ={
  id : number;
  whisky_image : Array<WhiskyImageProps>;
  name: string;
  contributor: string;
  category: string;
  distillery: string;
  bottler: string;
  bottle_type: string;
  vintage: number;
  bottled: number;
  age: number;
  cask: string;
  casknumber: number;
  alcohol: number;
  whisky_detail: string;
  whisky_ratings: number;
  rating_counts: number;
  created_at: string;
  updated_at: string;
  confirmed: boolean;
}

const getWhiskyDetail = async(param: number) => {
  try{
    const detail = await client.get(`/api/whisky/${param}`);
    return detail.data as WhiskyDetailsProps;
  }catch(e){
    console.log(e);
  }
}

export const whiskyDBAPI = {
  getWhiskyDetail
}