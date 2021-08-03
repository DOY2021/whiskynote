import React from 'react'
import { useState } from 'react'
import S from './Explore.styled'
import Category from './SideMenu/Category/Category'

function Explore() {

  const [test, setTest] = useState('false');

  const handleClick = (param:string) => {
    setTest(param);
  }

  return (
    <>
      <S.ExploreSideBarWrapper>
        <Category handleClick={handleClick}/>
      </S.ExploreSideBarWrapper>
      <S.ExploreMainWrapper>
      Hi
      </S.ExploreMainWrapper>
    </>
  )
}

export default Explore
