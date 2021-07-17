import React from 'react';
import Palette from '../../../lib/css/Pallete';
import P from '../../../shared/P/P';
import ReviewInput, { ReviewType } from '../ReviewInput/ReviewInput';
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
import Typography from '../../../lib/css/Typography';
import { TypoGraphyCategory } from '../../../lib/css/TempTypo';
import HeadLine from './HeadLine';
import ImageUpload from '../../../shared/ImageUpload/ImageUpload';
import TextField from './TextField';
function NewWhiskyReview() {
  const updateFiles = () => {};

  const handleSubmitReview = () => {};

  return (
    <S.NewWhiskyReviewWrapper>
      <S.NewWhiskyReviewInnerWrapper>
        <form onSubmit={handleSubmitReview}>
          <S.Title>리뷰 작성</S.Title>
          <S.ElementWrapper>
            <HeadLine
              inputText={'어떤 위스키를 마셨나요?'}
              isMandatory={true}
            ></HeadLine>
            <SearchWhisky searchText={''}></SearchWhisky>
          </S.ElementWrapper>

          <S.ElementWrapper>
            <HeadLine
              inputText={'사진을 등록해주세요.'}
              isMandatory={true}
            ></HeadLine>

            <S.MarginWrapper>
              <S.ImageUploadGuideline>
                * 사진은 5개까지 등록할 수 있습니다.
              </S.ImageUploadGuideline>
              <S.ImageUploadGuideline>
                * 사진 크기는 어쩌구저쩌구
              </S.ImageUploadGuideline>
            </S.MarginWrapper>
            <ImageUpload
              maxFileNum="5"
              updateFilesCb={updateFiles}
              multiple
            ></ImageUpload>
          </S.ElementWrapper>

          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키 노트를 작성해주세요.'}
              isMandatory={true}
            ></HeadLine>
          </S.MarginWrapper>

          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키에 대해 설명해주세요.'}
              isMandatory={true}
            ></HeadLine>
          </S.MarginWrapper>
          <TextField></TextField>

          <S.ButtonsWrapper>
            <S.TempSaveBtn>임시 저장</S.TempSaveBtn>
            <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
          </S.ButtonsWrapper>
        </form>
        {/* <ReviewInput title='a' subtitle='위스키명으로 검색하기'  type={ReviewType.text}/> */}
      </S.NewWhiskyReviewInnerWrapper>
    </S.NewWhiskyReviewWrapper>
  );
}

export default NewWhiskyReview;
