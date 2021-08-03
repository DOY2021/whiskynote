import React from 'react'
import { useState } from 'react'
import SearchWhisky from '../Review/SearchWhisky/SearchWhisky';
import S from './Explore.styled'
import Category from './SideMenu/Category/Category'

function Explore() {

  const [test, setTest] = useState('false');

  const handleClick = (param:string) => {
    setTest(param);
  }

  return (
    <S.ExploreWrapper>
      <S.ExploreSideBarWrapper>
        <Category handleClick={handleClick}/>
      </S.ExploreSideBarWrapper>
      <S.ExploreMainWrapper>
        <SearchWhisky/>
      </S.ExploreMainWrapper>
    </S.ExploreWrapper>
  )
}

export default Explore
