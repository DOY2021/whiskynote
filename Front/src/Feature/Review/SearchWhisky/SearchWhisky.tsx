import S from  './SearchWhisky.styled';
import React, { useEffect, useState } from 'react';
import useDebounce from '../../../hook/useDebounce';
import useSWR from 'swr'
import DropDown from '../../../shared/DropDown/DropDown';

function SearchWhisky(){
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchQuery = useDebounce(searchQuery,500);
  const mockList = (key,some) => {
    console.log(key,some)
    return some ? new Promise<Array<string>>(res => res(['1','2'])) : []
  }

  const { data } = useSWR(['/api/whiskylist', debouncedSearchQuery], mockList)

  // useEffect(() => {
  //   if(debouncedSearchQuery) {
  //     console.log(data);

  //     //real api call
  //     // whiskyAPI.getWhisky(debouncedSearchQuery).then((res) => {
  //     //   setIsSearching(false);
  //     //   setResults(res);
  //     // })

  //   }else {
  //     setResults([]);
  //   }
    

  // }, [debouncedSearchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  //TODO:add dropdown with 'results'
  return(
    <>
      <S.SearchWrapper>
        <S.SearchIcon></S.SearchIcon>
        <S.SearchInput  placeholder="위스키명으로 검색하기" onChange={handleSearchChange}></S.SearchInput> 
        {searchQuery && <DropDown>
          {data}
        </DropDown>}
      </S.SearchWrapper>
    </>
  )

}

export default SearchWhisky;