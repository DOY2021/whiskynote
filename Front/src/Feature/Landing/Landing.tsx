
import React from 'react';
import Explore from '../Explore/Explore';
import NewWhiskyReview from '../Review/NewWhiskyReview/NewWhiskyReview';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';
import Review from '../Review/ReviewListing/Review/Review';
import WhiskyNoteReview from '../Review/ReviewListing/Review/WhiskyNoteReview';
import ReviewList from '../Review/ReviewListing/ReviewList/ReviewList';

function Landing(){
  return(<div>this is landing page 
    <NewWhiskyReview></NewWhiskyReview>
    {/* <ReviewList></ReviewList> */}
  </div>)
}
export default Landing;