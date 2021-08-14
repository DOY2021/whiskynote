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
<<<<<<< HEAD
  bottlingSeries: string;
  vintage: string;
  bottled: string;
  statedAge: string;
  caskType : string;
  caskNum: string;
  strength: string;
  description: string;
  id: number;
=======
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
>>>>>>> 03637fb (Main/Info swr 작성)
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
  results: Array<WhiskyDetailsProps>
}

// export type WhiskyDescriptionProp = Omit<WhiskyBaseProp, 'englishName' | 'koreanName'>
