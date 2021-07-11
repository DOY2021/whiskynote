
import React from 'react';
import NewWhiskyReview from '../Review/NewWhiskyReview/NewWhiskyReview';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';

function Landing(){
  return(<div>
    {/* <ReviewInput title='category'  subtitle='test' type={ReviewType.dropdown}/>
    this is landing page */}
    <NewWhiskyReview></NewWhiskyReview>
  </div>)
}

export default Landing;