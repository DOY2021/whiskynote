import React from 'react'
import Styled from './SearchCountry.styled'

function SearchCountry() {
    return (
        <>
        <S.SearchWrapper>
          <S.SearchIcon></S.SearchIcon>
          <S.SearchInput  placeholder="위스키명으로 검색하기" onChange={handleSearchChange}></S.SearchInput> 
          {data && <DropDown>
            {data}
          </DropDown>}
        </S.SearchWrapper>
      </>
    )
}

export default SearchCountry
