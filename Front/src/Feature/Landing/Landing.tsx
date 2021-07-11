
import React from 'react';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';

function Landing(){

  return(<div>
    <ReviewInput title='category'  subtitle='test' type={ReviewType.dropdown}/>
    this is landing page
  </div>)
}

export default Landing;