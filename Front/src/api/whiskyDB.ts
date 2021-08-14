// import { WhiskyDetailsProps } from "../model/Whisky";
// import { client } from "./client"

// export const mockDB : WhiskyDetailsProps = {
//   id: 1,
//   whisky_image: [{id:1, image:'https://source.unsplash.com/random'}],
//   name_eng: 'Glen',
//   name_kor: '글렌',
//   contributor: 'Soo',
//   category: 'Single',
//   distillery: 'Home',
//   bottler: 'Me',
//   bottle_type: '?',
//   vintage: 1994,
//   bottled: 1994,
//   age: 10,
//   cask: '?',
//   casknumber:10,
//   alcohol: 10,
//   whisky_detail: 'Nice to meet',
//   whisky_ratings: 5,
//   rating_counts: 5,
//   created_at: '5',
//   updated_at: '5',
//   confirmed: true



// }



// const getWhiskyDetail = async(param: number) => {
//   try{
//     const detail = await client.get(`/api/whisky/${param}`);
//     return detail.data as WhiskyDetailsProps;
//   }catch(e){
//     console.log(e);
//   }
// }

// export const whiskyDBAPI = {
//   getWhiskyDetail
// }