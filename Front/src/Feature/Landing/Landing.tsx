
import React from 'react';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';

function Landing(){

  return(<div>
    <ReviewInput title='category'  type={ReviewType.dropdown}/>
    this is landing page
  </div>)
}

export default Landing;