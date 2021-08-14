export interface WhiskyBaseProp {
  koreanName : string;
  englishName : string;
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
  id: number;
}

export type WhiskyDescriptionProp = Omit<WhiskyBaseProp, 'englishName' | 'koreanName'>

export interface WhiskyDetailProp extends WhiskyBaseProp{
  rating: number;
  ratingCount: number;
  photo: string[]
}