import styled from "styled-components";

const DBWrapper = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0 auto;
`;

const Line = styled.div`
  border: 1px solid #A8A388;
  width: 100%;
  margin-top:70px;
  margin-bottom:70px;
`

export default {
  DBWrapper,
  Line
}