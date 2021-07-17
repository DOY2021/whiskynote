import S from  './SearchWhisky.styled';
import React, { useState } from 'react';

function SearchWhisky(props){

  


  return(
    <S.SearchWrapper>
      <S.SearchIcon></S.SearchIcon>
      <S.SearchInput  placeholder="위스키명으로 검색하기"></S.SearchInput> 
    </S.SearchWrapper>
  )

}

export default SearchWhisky;