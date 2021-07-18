export interface WhiskyBaseProp {
  koreanName : string;
  englishNmae : string;
  category: string;
  distillery: string;
  bottler: string;
  bottlingSeries: string;
  vintage: string;
  bottled: string;
  statedAge: string;
  caskType : string;
  caskNum: string;
  strength: string;
  description: string;
}

export interface WhiskyDetailProp extends WhiskyBaseProp{
  rating: number;
  ratingCount: number;
  photo: string[]
}