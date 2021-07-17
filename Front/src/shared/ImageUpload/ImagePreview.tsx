import S from './ImagePreview.styled';
import React, { useState } from 'react';

function ImagePreview(props) {
  const [isHover, setIsHover] = useState<boolean>();
  const handleMouseHover = () => {
    setIsHover(!isHover);
  };

  return (
    <S.ImagePreviewWrapper>
      <S.ImagePreview
        src={URL.createObjectURL(props.file)}
        alt={`file preview ${props.index}`}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
      ></S.ImagePreview>
    </S.ImagePreviewWrapper>
  );
}

export default ImagePreview;
