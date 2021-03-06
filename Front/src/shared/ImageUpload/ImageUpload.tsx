import React, { useRef, useState } from 'react';
import ImagePreviewModal from '../ImagePreviewModal/ImagePreviewModal';
import ImagePreview from './ImagePreview';
const MAX_FILE_SIZE = 4000000; //bytes
import S from './ImageUpload.styled';
import Camera from '../../../assets/CustomIcons/camera.svg';



const convertNestedObjectToArray = (nestedObj) => 
  Object.keys(nestedObj).map(key => nestedObj[key]);

const ImageUpload = ({
  maxFileNum,
  updateFilesCb,
  maxFileSize = MAX_FILE_SIZE,
  ...otherProps
}) => {
  const fileInputField = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    if (!fileInputField.current) return;
    fileInputField.current.click();
  };

  const callUpdateFilesCb = files => {
    console.log(files);
    const fileAsArray = convertNestedObjectToArray(files);
    updateFilesCb(fileAsArray);
    console.log(fileAsArray);
  };

  const handleNewFileUpload = e => {
    const { files: newFiles } = e.target;

    if (newFiles.length < maxFileNum) {
      const updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const addNewFiles = newFiles => {
    for (const file of newFiles) {
      // console.log(file);
      if (file.size <= maxFileSize) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
      else {
        alert('업로드 가능한 파일 사이즈를 초과하였습니다.');
      }
    }
   
    return { ...files };
  };

  const removeFile = fileName => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };


  return (
    <S.ImageUploadWrapper>
      {Object.keys(files).length < maxFileNum && (
        <S.UploadWrapper>
          <S.UploadFileBtn onClick={handleUploadBtnClick}>
            <S.IconsWrapper>
              <Camera style={{marginLeft:'23px'}}/>
              <S.ImageText>이미지 등록</S.ImageText>
              <S.FormField
                type="file"
                ref={fileInputField}
                accept="image/png, image/gif, image/jpeg"
                onChange={handleNewFileUpload}
                {...otherProps}
              ></S.FormField>
            </S.IconsWrapper>
          </S.UploadFileBtn>
        </S.UploadWrapper>
      )}

      <S.PreviewWrapper>
        {Object.keys(files).map((fileName, index) => {
          const file = files[fileName];
          const isImageFile = file.type.split('/')[0] === 'image';
          return (
            <S.PreviewContainer key={fileName}>
              <S.DeleteBtn onClick={() => removeFile(fileName)}>
                <S.DeleteBtnIcon src="../../../assets/CustomIcons/remove.svg"></S.DeleteBtnIcon>
              </S.DeleteBtn>
              {isImageFile && (
                <ImagePreview key={fileName} file={file} index={index} files={files} ></ImagePreview>
              )}
              
            </S.PreviewContainer>
           
          );
        })}
      </S.PreviewWrapper>
      
    </S.ImageUploadWrapper>
  );
};
export default ImageUpload;
