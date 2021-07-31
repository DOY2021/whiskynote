import S from './ReviewImageViewer.styled';
import React from 'react';
function ReviewImageViewer(props: { files: any[] }) {
  const overlayDisplay = props.files.length > 3 ? true : false;
  const overlayText = `+${props.files.length - 3}`;


  

  return (
    <S.ImagePreviewWrapper>
      {Object.keys(props.files).map((fileName, index) => {
        const file = props.files[fileName];
        const isImageFile = file.type.split('/')[0] === 'image';
        return (
          <>
            {isImageFile && index < 3 && overlayDisplay && (
              <S.ImagePreview
                src={URL.createObjectURL(file)}
                alt={`file preview ${index}`} 
              ></S.ImagePreview>
            )}
            {isImageFile && index == 2 && !overlayDisplay && (
              <>
                <S.OverlayText>{overlayText}</S.OverlayText>
                <S.ImagePreview
                  src={URL.createObjectURL(file)}
                  alt={`file preview ${index}`}
                ></S.ImagePreview>
              </>
            )}
          </>
        );
      })}
    </S.ImagePreviewWrapper>
  );
}

export default ReviewImageViewer;
