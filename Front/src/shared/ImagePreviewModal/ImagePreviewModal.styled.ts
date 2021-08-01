import styled from "styled-components";

const BackDrop = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index:10;
  background-color: rgba(0,0,0,0.75);
`

const Modal = styled.div`
  position:absolute;
  z-index:20;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center; /* vertical */
`

export default {
  BackDrop,
  Modal
}