
import S from './ImagePreview.styled';
import React, {useState} from 'react';

function ImagePreview(props) {
  const [isHover, setIsHover] = useState<Boolean>();
  const handleMouseHover = () => {
    setIsHover(!isHover);
  };

  return(
    <div>
    <S.ImagePreview
    src={URL.createObjectURL(props.file)}
    alt={`file preview ${props.index}`}
    onMouseEnter={handleMouseHover}
    onMouseLeave={handleMouseHover}
  ></S.ImagePreview>
  {isHover && (
     <div></div>
  )} 
  </div> 
  )

}

export default ImagePreview;