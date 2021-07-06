import styled from 'styled-components';

const ImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const UploadWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: #e7e5de;
  border-radius: 2px;
  display: flex;
  align-items: center;
`;

const FormField = styled.input`
  display: block;
  border: none;
  position: absolute;
  opacity: 0;

  &focus {
    outline: none;
  }
`;

const UploadFileBtn = styled.div`
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

const ImageText = styled.div`
  font-size: 18px;
  color: #837f7c;
`;

const IconsWrapper = styled.div`
  align-items: column;
`;

const CameraIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 23px;
`;

const PreviewContainer = styled.section`
  border-radius: 2px;
  width: 200px;
  height: 200px;

  // &:hover {
  //     background-color: #000000;
  //     opacity: 0.5;
  //     z-index:1;
  //     position:absolute;
  // }

`;

const PreviewWrapper = styled.div`
  flex-direction:row;
  display:flex;
  margin-left:12px;
`

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
`;

export default {
  ImageUploadWrapper,
  UploadWrapper,
  ImagePreview,
  CameraIcon,
  IconsWrapper,
  FormField,
  ImageText,
  UploadFileBtn,
  PreviewContainer,
  PreviewWrapper
};
