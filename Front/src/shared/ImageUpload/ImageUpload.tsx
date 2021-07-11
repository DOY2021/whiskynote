import React, { useRef, useState } from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';
import ImagePreview from './ImagePreview';
const MAX_FILE_SIZE = 1000000; //bytes
import S from './ImageUpload.styled';

const convertNestedObjectToArray = nestedObj => {
  Object.keys(nestedObj).map(key => nestedObj[key]);
};

const ImageUpload = ({
  label,
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
    const fileAsArray = convertNestedObjectToArray(files);
    updateFilesCb(fileAsArray);
  };

  const handleNewFileUpload = e => {
    const { files: newFiles } = e.target;

    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const addNewFiles = newFiles => {
    for (let file of newFiles) {
      console.log(file);
      if (file.size < maxFileSize) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
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
      <S.UploadWrapper>
        <S.UploadFileBtn onClick={handleUploadBtnClick}>
          <S.IconsWrapper>
            <S.CameraIcon src="../../../assets/CustomIcons/camera.svg"></S.CameraIcon>
            <S.ImageText>이미지 등록</S.ImageText>
            <S.FormField
              type="file"
              ref={fileInputField}
              onChange={handleNewFileUpload}
              title=""
              value=""
              {...otherProps}
            ></S.FormField>
          </S.IconsWrapper>
        </S.UploadFileBtn>
      </S.UploadWrapper>
      <S.PreviewWrapper>
        {Object.keys(files).map((fileName, index) => {
          let file = files[fileName];
          let isImageFile = file.type.split('/')[0] === 'image';
          return (
            <S.PreviewContainer key={fileName}>
              <div>
                <S.DeleteBtn onClick={() => removeFile(fileName)}>

                  <S.DeleteBtnIcon src="../../../assets/CustomIcons/remove.svg"></S.DeleteBtnIcon>
                  {/* </S.DeleteBtnCircle> */}
                </S.DeleteBtn>
                {isImageFile && (
                  <ImagePreview file={file} index={index}></ImagePreview>
                )}
              </div>
            </S.PreviewContainer>
          );
        })}
      </S.PreviewWrapper>
    </S.ImageUploadWrapper>
  );
};
export default ImageUpload;
