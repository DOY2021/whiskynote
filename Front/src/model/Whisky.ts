import { WhiskyNoteProp } from "./WhiskyNote"

export type WhiskyImageProps = {
  id: number;
  image: string;
} 

export type WhiskyDetailsProps  ={
  id : number;
  whisky_image : Array<WhiskyImageProps>;
  name_eng: string;
  name_kor:string;
  contributor: string;
  category: string;
  distillery: string;
  bottler: string;
  bottled: number;
  vintage: number;
  strength: string;
  bottle_type: string;
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
  tags: WhiskyNoteProp

}

export interface WhiskyInfoProp extends WhiskyDetailsProps{
  rating: number;
  ratingCount: number;
  photo: string[]
}

export interface WhiskyMainProp {
  count: number;
  next: string;
  previous: string
  results: Array<WhiskyInfoProp>
}

// export type WhiskyDescriptionProp = Omit<WhiskyBaseProp, 'englishName' | 'koreanName'>
