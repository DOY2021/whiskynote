
import React from 'react';
import Explore from '../Explore/Explore';
import NewWhiskyReview from '../Review/NewWhiskyReview/NewWhiskyReview';
<<<<<<< HEAD
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';
import Review from '../Review/ReviewListing/Review/Review';
import WhiskyNoteReview from '../Review/ReviewListing/Review/WhiskyNoteReview';
import ReviewList from '../Review/ReviewListing/ReviewList/ReviewList';
import DB from '../WhiskyDB/DB';

function Landing(){
  return(<div>
    {/* <NewWhiskyReview></NewWhiskyReview> */}
=======

function Landing(){
  return(<div>
    <NewWhiskyReview></NewWhiskyReview>
>>>>>>> 5c6ddcd (Header&landing)
    {/* <DB></DB> */}

  </div>)
}
export default Landing;