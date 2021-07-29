import styled from "styled-components";

const Title = styled.p`
font-weight: 600;
font-size: 32px;
`
const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%; 
`
const ReviewText = styled.p`
  color:#5C5854;
  font-size: 18px;
  line-height: 140%;
  margin-bottom:16px;
`
export default {
  Title,
  ReviewWrapper,
  ReviewText,
}