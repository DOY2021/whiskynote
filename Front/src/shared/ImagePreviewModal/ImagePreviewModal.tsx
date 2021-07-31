import ReactDOM from "react-dom";
import React from "react";
import S from './ImagePreviewModal.styled';

function Backdrop(props: { onClose: () => void}) {
  return(
    <S.BackDrop className="backdrop" onClick={props.onClose}></S.BackDrop>
  )
}

function ModalOverlay(props: {children:React.ReactNode}) {

  return(
    <S.Modal>
      <div>{props.children}</div>
    </S.Modal>
  )
}

function ImagePreviewModal(props: {children:React.ReactNode, onClose: () => void, index: number}) {
 
  return(
    <>
    {
      ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}></Backdrop>,
        document.getElementById('overlays')!
      )
    }
    {
      ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')!
      )
    }
    </>
  )
}

export default ImagePreviewModal;