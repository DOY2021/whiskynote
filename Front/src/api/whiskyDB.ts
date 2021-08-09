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

export const mockDB : WhiskyDetailsProps = {
  id: 1,
  whisky_image: [{id:1, image:'https://source.unsplash.com/random'}],
  name: 'Glen',
  contributor: 'Soo',
  category: 'Single',
  distillery: 'Home',
  bottler: 'Me',
  bottle_type: '?',
  vintage: 1994,
  bottled: 1994,
  age: 10,
  cask: '?',
  casknumber:10,
  alcohol: 10,
  whisky_detail: 'Nice to meet',
  whisky_ratings: 5,
  rating_counts: 5,
  created_at: '5',
  updated_at: '5',
  confirmed: true



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