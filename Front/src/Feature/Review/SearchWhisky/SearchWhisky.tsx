import S from  './SearchWhisky.styled';
import React, { useState } from 'react';

function SearchWhisky(){
  return(
    <S.SearchWrapper>
      <S.SearchIcon></S.SearchIcon>
      <S.SearchText placeholder="위스키명으로 검색하기"></S.SearchText>
      
    </S.SearchWrapper>
  )

}

export default SearchWhisky;