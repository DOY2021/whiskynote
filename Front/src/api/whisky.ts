import { WhiskyInfoProp } from "../model/Whisky"
import { client } from "./client"


export type WhiskyCreateParamProps = {
  name_eng: string;
  name_kor: string;
  whisky_image: Array<string>;
  category: number;
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
}

export type WhiskyMainParamProps = {
  search?: string;
  ordering: string;
  page: number;
}

export type WhiskyMainProps = {
  count: number;
  next: string;
  previous: string;
  results: Array<WhiskyInfoProp>
}

const createWhisky = async(param: FormData) => {
  try{
    const result = await client.post('/api/whisky/create/', param, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return result.data;
  }
  catch(e){
    console.log(e);
  }
}

const getWhiskyMain = async(param: WhiskyMainParamProps) => {
  try{
    const result: WhiskyMainProps = await client.get('/api/whisky/main/',{
      params: param
    })
    return result 
  }catch(e){
    console.log(e);
  }
}



export const whiskyAPI = {
  createWhisky,
  getWhiskyMain
}