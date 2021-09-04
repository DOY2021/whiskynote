import styled from "styled-components";

const DescriptionWrapper = styled.div`
  margin-left: 30px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  
  & p {
    margin-right: 4px;
  }
`;

const DescriptionItemWrapper = styled.div`
    display: flex;
    width: 100%;
`;
const DescriptionLinkWrapper = styled.div`
    display: flex;
`;

const DescriptionItemTitle = styled.div`
    display:flex;
    align-items: center;
    width: 180px;

    p + p {
      margin-left: 7px;
    }
`;

export default {
  DescriptionWrapper,
  DescriptionItemWrapper,
  RatingWrapper,
  DescriptionItemTitle,
  DescriptionLinkWrapper
}