import styled from 'styled-components';

const ImagePreviewWrapper = styled.div`
  display:flex;
  flex-direction: row;
`
const ImagePreview = styled.img`
width: 224px;
height: 224px;
border-radius: 2px;
`;

const Overlay = styled.div`
 width:224px;
 height:224px;
 background-color:#000000;
 opacity:0.5;
 position:absolute;
 z-index:1;
 top:0px;
 align-items:center;
 display:flex;
 
`
const OverlayText = styled.p`
  font-size:48px;
  color: white;
  z-index: 20;
`

export default {
  ImagePreviewWrapper,
  ImagePreview,
  Overlay,
  OverlayText
}