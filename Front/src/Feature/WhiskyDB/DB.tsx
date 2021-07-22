import React from 'react'
import DBInfo from './DBInfo/DBInfo'
import Descript from './Descript/Descript'
import WhiskyNote from './WhiskyNote/WhiskyNote'
import S from './DB.styled'

function DB() {
  return (
    <S.DBWrapper>
      <DBInfo/>
      <WhiskyNote/>
      <Descript/>
    </S.DBWrapper>
  )
}

export default DB
