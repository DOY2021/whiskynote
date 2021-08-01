import S from './ImagePreview.styled';
import React, { useState } from 'react';
import ImagePreviewModal from '../ImagePreviewModal/ImagePreviewModal';

function ImagePreview(props) {
  const [isHover, setIsHover] = useState<boolean>();
  const handleMouseHover = () => {
    setIsHover(!isHover);
  };

  const [open, setOpen] = useState(false);

	const handleModalClose = () => {
			setOpen(false);
  }

  const handleModalOpen = () => {
    setOpen(true);
  }

  return (
    <>
    <S.ImagePreviewWrapper>
      <S.ImagePreview
        src={URL.createObjectURL(props.file)}
        alt={`file preview ${props.index}`}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
        onClick={handleModalOpen}
      ></S.ImagePreview>
    </S.ImagePreviewWrapper>
    {open && <ImagePreviewModal index={props.index} onClose={handleModalClose}>
      <img src={URL.createObjectURL(props.file)}>
      </img>
      </ImagePreviewModal>}
    </>

  );
}

export default ImagePreview;
