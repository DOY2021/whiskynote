import React from 'react'
import DBInfo from './DBInfo/DBInfo'
import Descript from './Descript/Descript'
import WhiskyNote from './WhiskyNote/WhiskyNote'
import S from './DB.styled'
import { mockDB } from '../../api/whiskyDB'

function DB() {
  const result = mockDB;
  return (
    <S.DBWrapper>
      <DBInfo/>
      <WhiskyNote/>
      <Descript/>
    </S.DBWrapper>
  )
}

export default DB
