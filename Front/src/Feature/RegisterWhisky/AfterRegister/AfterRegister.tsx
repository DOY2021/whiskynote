import React from 'react'
import { useLocation, useParams } from 'react-router'
import Palette from '../../../lib/css/Pallete';
import { TypoGraphyCategory } from '../../../lib/css/TempTypo';
import Button from '../../../shared/Button/Button';
import P from '../../../shared/P/P'
import S from './AfterRegister.styled'

interface ParamProps {
  name: string;
}

function AfterRegister() {
  const param = useParams<ParamProps>();
  
  const whiskyName = param.name

  return (
    <S.AfterRegisterLayout>
      <S.AfterRegisterWrapper>
        <P fontSize={TypoGraphyCategory.title}>{whiskyName}을(를) 첫번째로 등록하셨어요!</P>
        <P pre='pre' fontSize={TypoGraphyCategory.subtitle}>{`등록하신 위스키는 영업일 기준 최대 3일 이내에 검수 후\n위스키노트에 반영돼요.`}</P>
        <S.AfterRegisterBtnWrapper>
          <Button size='large' border={Palette.Black} variant='grayscale' color={Palette.Black}>메인 화면으로 이동</Button>
          <Button size='large' variant='black'>새로운 위스키 등록</Button>
        </S.AfterRegisterBtnWrapper>
      </S.AfterRegisterWrapper>
    </S.AfterRegisterLayout>
  )
}

export default AfterRegister
