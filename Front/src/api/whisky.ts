import { client } from "./client"
import { WhiskyDetailsProps } from "./whiskyDB"

type WhiskyCreateParamProps = {
  name: string;
  whisky_image: Array<string>;
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
}

type WhiskyMainParamProps = {
  search?: string;
  ordering: string;
  page: number;
}

export type WhiskyMainProps = {
  count: number;
  next: string;
  previous: string;
  results: Array<WhiskyDetailsProps>
}

const createWhisky = async(param: WhiskyCreateParamProps) => {
  try{
    const result = await client.post('/api/whisky/create/', param);
    return result.data;
  }
  catch(e){
    console.log(e);
  }
}

const getWhiskyMain = async(param: WhiskyMainParamProps) => {
  try{
    const result = await client.get('/api/whisky/main',{
      params: param
    })
    return result.data as WhiskyMainProps
  }catch(e){
    console.log(e);
  }
}



export const whiskyAPI = {
  createWhisky,
  getWhiskyMain
}