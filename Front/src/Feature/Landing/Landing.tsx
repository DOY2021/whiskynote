
import React from 'react';
import ImageUpload from '../../shared/ImageUpload/ImageUpload';

function Landing(){

  const updateFiles = () => {}
  return(<div>
    <div> this is landing page</div>
    {/* TODO: remove this */}
    <ImageUpload  accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateFiles}></ImageUpload>
   
  </div>)
}

export default Landing;