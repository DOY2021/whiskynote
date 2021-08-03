import styled from "styled-components";

const ExploreWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

const ExploreSideBarWrapper = styled.aside`
    flex: 1;
    max-width: 200px;
    min-height: 100vh;
`;

const ExploreMainWrapper = styled.main`
  flex: 5;
  max-width: 1000px;
`;

export default {
  ExploreWrapper,
  ExploreSideBarWrapper,
  ExploreMainWrapper
}