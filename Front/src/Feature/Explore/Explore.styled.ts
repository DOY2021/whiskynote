import styled from "styled-components";

const ExploreWrapper = styled.div`
  display: flex;

  width: 1200px;
  height: 100%;

  padding: 50px 100px;
`;

const ExploreSideBarWrapper = styled.aside`
    width: 200px;
    max-width: 200px;
    min-height: 100vh;
`;

const ExploreMainWrapper = styled.main`
  width: 850px;
  max-width: 1000px;
`;

const ExploreMainTitleWithOrdering = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  margin-top: 24px;
  margin-bottom: 30px;
`;

const ExploreMainCardList = styled.ul`
  margin-top: 20px;

  & li {
    margin-bottm: 10px;
  }
`;

export default {
  ExploreWrapper,
  ExploreSideBarWrapper,
  ExploreMainWrapper,
  ExploreMainTitleWithOrdering,
  ExploreMainCardList
}