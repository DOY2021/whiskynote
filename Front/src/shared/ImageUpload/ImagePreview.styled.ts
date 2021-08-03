import styled from 'styled-components';

const ImagePreviewWrapper = styled.div`
position:relative;
`
const ImagePreview = styled.img`
width: 100%;
height: 100%;
border-radius: 2px;
`;

const Overlay = styled.div`
 width:200px;
 height:200px;
 background-color:#000000;
 opacity:0.5;
 position:absolute;
 z-index:1;
 top:0px;
`

export default {
  ImagePreviewWrapper,
  ImagePreview, 
  Overlay,
}
