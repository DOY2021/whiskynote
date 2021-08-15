import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { whiskyAPI, WhiskyCreateParamProps } from '../../api/whisky'
import Palette from '../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../lib/css/TempTypo'
import ImageUpload from '../../shared/ImageUpload/ImageUpload'

import P from '../../shared/P/P';
import WhiteSpace from '../../shared/WhiteSpace/WhiteSpace';
import HeadLine from '../Review/NewWhiskyReview/HeadLine';
import TextField from '../Review/NewWhiskyReview/TextField';
import ReviewInput, { ReviewType } from '../Review/ReviewInput/ReviewInput';
import S from './RegisterWhisky.styled';

function RegisterWhisky() {
  const history = useHistory();

  const [koreanName, setKorean] = useState('');
  const [englishName, setEng] = useState('');
  const [category, setCategory] = useState('');
  const [distillery, setDistillery] = useState('');
  const [bottler, setBottler] = useState('');
  const [series, setSeries] = useState('');
  const [vintage, setVintage] = useState('');
  const [bottled, setBottled] = useState('');
  const [age, setAge] = useState('');
  const [cask, setCask] = useState('');
  const [size, setSize] = useState('');
  const [strength, setStrength] = useState('');
  const [caskNumbers, setCaskNum] = useState('');
  const [bottleNumber, setBottleNum] = useState('');
  const [describe, setDescribe] = useState('');

  const [images, setImages] = useState<any>();

  const handleImages = (images) => {
    setImages(images);
  }

  const handleRegisterWhisky = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let files;
    if(images){
      files = images.map( (image,idx) => ({
        id: idx,
        image,
      }))
    }

    const createForm : WhiskyCreateParamProps = {
      name_eng: englishName,
      name_kor: koreanName,
      whisky_image: files,
      category: category,
      distillery: distillery,
      bottler: bottler,
      vintage: parseInt(vintage),
      bottled: parseInt(bottled),
      bottle_type: bottleNumber,
      age: parseInt(age),
      cask: cask,
      casknumber: parseInt(caskNumbers),
      alcohol: parseInt(strength),
      whisky_detail: describe
    }
    try{
      const result = whiskyAPI.createWhisky(createForm);
      history.push('/afterRegister')
    }catch(e){
      console.log(e);
    }
  }

  return (
    <S.RegisterWhiskyWrapper>
      <S.RegisterWhiskyInnerWrapper>
        <P fontSize={TypoGraphyCategory.title}>새로운 위스키 등록</P>
        <WhiteSpace height="10" />
        <P fontSize={TypoGraphyCategory.body2} color={Palette.Gray700}>
          위스키 노트에 등록되지 않은 위스키를 추가하려면, 아래 양식에 맞게
          작성해주세요.
        </P>
        <P fontSize={TypoGraphyCategory.body2} color={Palette.Gray700}>
          양식에 맞게 작성된 내용은 아이디와 함께 위스키 노트 DB에 반영되며,
          등록이 완료되면 알림을 보내드립니다.
        </P>

        <WhiteSpace height='40'/>
        <S.RegisterWhiskyRegisterForm onSubmit={handleRegisterWhisky}>
          <S.RegisterTitleWrapper>
          
            <P size={TypoGraphyCategory.subtitle} isInline>위스키명을 입력해주세요</P>
            <P fontSize={TypoGraphyCategory.body} isInline={true} color={Palette.Orange600}>*</P>
            <WhiteSpace height='10'/>
            <ReviewInput
              title='국문'
              subtitle='Korean name' 
              type={ReviewType.text}
              onChange={setKorean}
              value={koreanName}
              placeholder='등록하는 위스키의 정확한 국문 명칭을 입력해주세요.'
            />
            <ReviewInput
              title='영문'
              subtitle='English Name'
              type={ReviewType.text}
              onChange={setEng}
              value={englishName}
              placeholder="등록하는 위스키의 정확한 영문 명칭을 입력해주세요."
            />
          </S.RegisterTitleWrapper>
          <WhiteSpace height='40'/>
          <S.RegisterPhotoWrapper>
            <P  fontSize = {TypoGraphyCategory.subtitle}>위스키 대표 사진을 등록해주세요.</P>
            <WhiteSpace height='10'/>

            <P color={Palette.Orange800} fontSize={TypoGraphyCategory.body2}>
              * 상품 이미지 사이즈 이렇게 해주세요.
            </P>
            <P color={Palette.Orange800} fontSize={TypoGraphyCategory.body2}>
              * 위스키 대표 사진을 등록해주세요.
            </P>
            <ImageUpload
              maxFileNum={5}
              updateFilesCb={() => {}}
              label="Whisky"
            />
          </S.RegisterPhotoWrapper>
          <WhiteSpace height="30" />
          <S.RegisterDescriptWrapper>
            <ReviewInput
              title="카테고리"
              subtitle="Category"
              type={ReviewType.dropdown}
              onClick={setCategory}
              value={category}
              categoryList={['싱글몰트 위스키', '블렌디드 위스키']}
            />
            <ReviewInput
              title="증류소"
              subtitle="Distillery"
              type={ReviewType.text}
              onChange={setDistillery}
              value={distillery}
              placeholder="증류소를 입력해주세요."
            />
            <ReviewInput
              title="병입 회사"
              subtitle="Bottler"
              type={ReviewType.text}
              onChange={setBottler}
              value={bottler}
              placeholder="병입 회사를 입력해주세요."
            />
            <ReviewInput
              title="바틀 시리즈"
              subtitle="Bottling Series"
              type={ReviewType.text}
              onChange={setSeries}
              value={series}
              placeholder="예시) Fine/Rare, Special Releases 2010, Bond House No.1 Collection"
            />
            <ReviewInput
              title="빈티지"
              subtitle="Vintage"
              type={ReviewType.text}
              onChange={setVintage}
              value={vintage}
            />
            <ReviewInput
              title="병입 날짜"
              subtitle="Bottled"
              type={ReviewType.text}
              onChange={setBottled}
              value={bottled}
              placeholder="test"
            />
            <ReviewInput
              title="숙성 연수"
              subtitle="Stated Age/Age"
              type={ReviewType.text}
              onChange={setAge}
              value={age}
              placeholder="숙성 연수를 입력해주세요."
            />
            <ReviewInput
              title="캐스크타입"
              subtitle="Cask Type"
              type={ReviewType.text}
              onChange={setCask}
              value={cask}
              placeholder="캐스크에 대한 정보를 작성해주세요."
            />
            <ReviewInput
              title="알코올 함량"
              subtitle="ABV"
              type={ReviewType.text}
              onChange={setStrength}
              value={strength}
              placeholder="도수를 입력해주세요."
            />
            <ReviewInput
              title="용량"
              subtitle="Size"
              type={ReviewType.text}
              onChange={setSize}
              value={size}
              placeholder="용량을 입력해주세요."
            />
            <ReviewInput
              title="캐스크 넘버"
              subtitle="Cask Numbers"
              type={ReviewType.text}
              onChange={setCaskNum}
              value={caskNumbers}
              placeholder="캐스크 넘버를 작성해주세요."
            />
            <ReviewInput
              title="바틀 넘버"
              subtitle="Number of Bottles"
              type={ReviewType.text}
              onChange={setBottleNum}
              value={bottleNumber}
              placeholder="바틀 넘버를 작성해주세요."
            />
          </S.RegisterDescriptWrapper>
          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키에 대해 설명해주세요.'}
              isMandatory={true}
            ></HeadLine>
          </S.MarginWrapper>
          <TextField
            text={describe}
            handleTextAreaInput={e => setDescribe(e.target.value)}
          />

          <S.ButtonsWrapper>
            <S.TempSaveBtn>임시 저장</S.TempSaveBtn>
            <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
          </S.ButtonsWrapper>
        </S.RegisterWhiskyRegisterForm>
      </S.RegisterWhiskyInnerWrapper>
    </S.RegisterWhiskyWrapper>
  );
}

export default RegisterWhisky;
