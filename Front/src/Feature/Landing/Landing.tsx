
import React from 'react';
import Explore from '../Explore/Explore';
import NewWhiskyReview from '../Review/NewWhiskyReview/NewWhiskyReview';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';
import Review from '../Review/ReviewListing/Review/Review';
import WhiskyNoteReview from '../Review/ReviewListing/Review/WhiskyNoteReview';

function Landing(){
  return(<div>this is landing page 
    {/* <NewWhiskyReview></NewWhiskyReview> */}
    {/* <Review></Review> */}
    <Explore/>
  </div>)
}
export default Landing;