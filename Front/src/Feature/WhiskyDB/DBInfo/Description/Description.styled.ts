import styled from "styled-components";

const DescriptionWrapper = styled.div`
  margin-left: 30px;
`;

const DescriptionItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
`;
const DescriptionLinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

const DescriptionItemTitle = styled.div`
    display:flex;

    width: 200px;
`;

export default {
  DescriptionWrapper,
  DescriptionItemWrapper,
  DescriptionItemTitle,
  DescriptionLinkWrapper
}