import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { whiskyAPI, WhiskyCreateParamProps } from '../../api/whisky'
import Palette from '../../lib/css/Pallete'
import { TypoGraphyCategory } from '../../lib/css/TempTypo'
import Check from '../../shared/Check/Check'
import ImageUpload from '../../shared/ImageUpload/ImageUpload'


import P from '../../shared/P/P'
import WhiteSpace from '../../shared/WhiteSpace/WhiteSpace'
import HeadLine from '../Review/NewWhiskyReview/HeadLine'
import TextField from '../Review/NewWhiskyReview/TextField'
import ReviewField from './ReviewInput/ReviewField'
import ReviewInput, { ReviewType } from './ReviewInput/ReviewInput'
import S from './RegisterWhisky.styled'
import ReviewStyled from './ReviewInput/ReviewInput.styled'
import { useCallback } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RegisterInput from './Components/RegisterInput/RegisterInput'
import styled from 'styled-components'
import RegisterDropDown from './Components/RegisterDropDown/RegisterDropDown'
import { WhiskyCategory } from './constants'

function RegisterWhisky() {
  const history = useHistory();

  const [koreanName, setKorean] = useState('');
  const [englishName, setEng] = useState('');
  const [category, setCategory] = useState('싱글 몰트 위스키');
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

  const [isDistillery, setDistilleryCheck] = useState(false);

  const [singcaskCheck, setSingleCaskCheck] = useState(false);
  const [nonchillFilter, setChillFilter] = useState(false);
  const [naturalColor, setNaturalColor] = useState(false);
  const [independant, setIndependant] = useState(false);

  const [images, setImages] = useState<any>();

  const handleImages = (images) => {
    setImages(images);
  }

  const handleSingleCaskCheck = useCallback(() => {
    setSingleCaskCheck(check => !check);
  },[])
  const handleNonChillFilter = useCallback(() => {
    setChillFilter(check => !check);
  },[])
  const handleNaturalColor = useCallback(() => {
    setNaturalColor(check => !check);
  },[])
  const handleIndependant = useCallback(() => {
    setIndependant(check => !check);
  },[])
  const handleDistilleryCheck = useCallback(() => {
    if(isDistillery){
      setDistillery('')
    }
    else{
      setDistillery('증류소 병입')
    }
    setDistilleryCheck(check => !check);
  },[isDistillery])

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
    <Container>
      <Row>
        <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1} />
        <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10} >
      <S.RegisterWhiskyInnerWrapper>
        <P fontSize={TypoGraphyCategory.title} color={Palette.SemiBlack}>새로운 위스키 등록</P>
        <WhiteSpace height="16" />
        <P size={TypoGraphyCategory.body2}>
          위스키 노트에 등록되지 않은 위스키를 추가하려면, 아래 양식에 맞게 작성해주세요.
        </P>
        <P size={TypoGraphyCategory.body2}>
          양식에 맞게 작성된 내용은 작성자의 아이디와 함께 위스키 노트 DB에 반영되며, 등록이 완료되면 알림을 보내드립니다.
        </P>
        <WhiteSpace height='64'/>

        <S.RegisterWhiskyRegisterForm onSubmit={handleRegisterWhisky}>
          <S.RegisterTitleWrapper>
          
            <P size={TypoGraphyCategory.subtitle2} color={Palette.SemiBlack} isInline>위스키명을 입력해주세요</P>
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
            <P  size = {TypoGraphyCategory.subtitle2} isInline color={Palette.SemiBlack} >위스키 대표 사진을 등록해주세요.</P>
            <P size={TypoGraphyCategory.body} isInline={true} color={Palette.Orange600}>*</P>
            <WhiteSpace height='10'/>

            <P color={Palette.Orange800} fontSize = {TypoGraphyCategory.body2}>* 상품 이미지 사이즈 이렇게 해주세요.</P>
            <P color={Palette.Orange800} fontSize = {TypoGraphyCategory.body2}>* 위스키 대표 사진을 등록해주세요.</P>
            <ImageUpload
              maxFileNum={5}
              updateFilesCb={handleImages}
              label='Whisky'
            />
            <WhiteSpace height='16'/>
          </S.RegisterPhotoWrapper>
          <WhiteSpace height='48'/>
          <P size={TypoGraphyCategory.subtitle2} isInline color={Palette.SemiBlack}>위스키명을 입력해주세요</P>
          <P size={TypoGraphyCategory.body} isInline={true} color={Palette.Orange600}>*</P>
          <S.RegisterDescriptWrapper>
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 카테고리</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Category</P>
            </S.RegisterInputLabel>
             <RegisterDropDown
                        selectedValue={category}
                          onClick={(v: string) =>setCategory(v)}
                          valueList={WhiskyCategory}
            />

            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 생산국가, 지역</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> {'Country&Region'}</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setBottler}
               value={bottler}
               placeholder='생산 국가, 지역명을 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 증류소</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Distillery</P>
              <P size ={TypoGraphyCategory.body2}> 증류소 병입</P>
              <div style={{width: '5px'}}/>
              <Check
                    id='DistilleryBottling'
                    checked={isDistillery}
                    onChange={handleDistilleryCheck}
              />
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setDistillery}
               value={distillery}
               placeholder='증류소를 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 병입 회사</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Bottler</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setBottler}
               value={bottler}
               placeholder='병입 회사를 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 바틀 시리즈</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Bottling Series</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setSeries}
               value={series}
               placeholder={'Fine & Rare, Speacial Releases 2010, Bond House No.1 COllection'}
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 숙성 연수</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Age</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setAge}
               value={age}
               unit='years old'
               placeholder='숙성 연수를 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 캐스크 타입</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Cask Type</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setCask}
               value={cask}
               placeholder='캐스크에 대한 정보를 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 알코올 함량</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> ABV</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setStrength}
               value={strength}
               placeholder='알코올 함량을 입력해주세요.'
            />
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 용량</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Size</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setSize}
               value={size}
               placeholder='용량을 입력해주세요.'
            />

            <WhiteSpace height='12'/>
            
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 싱글 캐스크</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Single Cash</P>
              <div style={{width: '5px'}}/>
            <Check
                id='SingleCask'
                checked={singcaskCheck}
                onChange={handleSingleCaskCheck}
              />
            </S.RegisterInputLabel>
            
            {singcaskCheck &&  
          <>
            <WhiteSpace height='15'/> 
            <S.RegisterInputLabel>
              <P size={TypoGraphyCategory.body2}> 캐스크 넘버</P>
              <P size={TypoGraphyCategory.body3} color={Palette.WhiskyGray}> Cask Number</P>
            </S.RegisterInputLabel>
            <RegisterInput 
               onChange={setCaskNum}
               value={caskNumbers}
               placeholder='캐스크 넘버를 입력해주세요.'
            />
            <WhiteSpace height='15'/>
          </>
            }
            <ReviewStyled.ReviewInputWrapper>
              <ReviewStyled.ReviewCheckWrapper>

                <ReviewStyled.ReviewTitleWrapper hasSubtitle={true}>
                  <ReviewStyled.ReviewInputTitle>
                논-칠필터
                  </ReviewStyled.ReviewInputTitle>
                  <ReviewStyled.ReviewInputSubTitle>
                Non-chillfilter
                  </ReviewStyled.ReviewInputSubTitle>
                </ReviewStyled.ReviewTitleWrapper>
                <ReviewStyled.ReviewCheckItemWrapper>
                  <Check
                    id='Non-chillfilter'
                    checked={nonchillFilter}
                    onChange={handleNonChillFilter}
                  />
                </ReviewStyled.ReviewCheckItemWrapper>
            
                <ReviewStyled.ReviewTitleWrapper hasSubtitle={true}>
                  <ReviewStyled.ReviewInputTitle>
                내츄럴컬러
                  </ReviewStyled.ReviewInputTitle>
                  <ReviewStyled.ReviewInputSubTitle>
                Natural-color
                  </ReviewStyled.ReviewInputSubTitle>
                </ReviewStyled.ReviewTitleWrapper>
                <ReviewStyled.ReviewCheckItemWrapper>
                  <Check
                    id='NaturalColor'
                    checked={naturalColor}
                    onChange={handleNaturalColor}
                  />
                </ReviewStyled.ReviewCheckItemWrapper>
                <ReviewStyled.ReviewTitleWrapper hasSubtitle={true}>
                  <ReviewStyled.ReviewInputTitle>
                독립병입자
                  </ReviewStyled.ReviewInputTitle>
                  <ReviewStyled.ReviewInputSubTitle>
                Independant Whisky
                  </ReviewStyled.ReviewInputSubTitle>
                </ReviewStyled.ReviewTitleWrapper>
                <ReviewStyled.ReviewCheckItemWrapper>
                  <Check
                    id='independant'
                    checked={independant}
                    onChange={handleIndependant}
                  />
                </ReviewStyled.ReviewCheckItemWrapper>
              </ReviewStyled.ReviewCheckWrapper>
            </ReviewStyled.ReviewInputWrapper>
          </S.RegisterDescriptWrapper>
          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키에 대해 설명해주세요.'}
              isMandatory={true}
            ></HeadLine>
          </S.MarginWrapper>
          <TextField text={describe} handleTextAreaInput={(e) =>setDescribe(e.target.value)}/>

          <S.ButtonsWrapper>
            <S.TempSaveBtn>임시 저장</S.TempSaveBtn>
            <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
          </S.ButtonsWrapper>
        </S.RegisterWhiskyRegisterForm>
      </S.RegisterWhiskyInnerWrapper>
        </Col>
        </Row>
    </Container>

  );
}

export default RegisterWhisky;