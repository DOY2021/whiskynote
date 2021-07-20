import styled from "styled-components";


const BackDrop = styled.div`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index:20;
  background-color: rgba(0,0,0,0.75);
`

const Modal = styled.div`
  position:fixed;
  background-color: #EDECE6;
  width: 80%;
  border-radius: 15px;
  z-index:30;
  padding:40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);

`

export default {
  BackDrop,
  Modal
}