import React from 'react';
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
import HeadLine from './HeadLine';
import ImageUpload from '../../../shared/ImageUpload/ImageUpload';
import TextField from './TextField';
import ProgressBar from '../Slider/Slider';
import { useState } from 'react';
function NewWhiskyReview() {
  const [scores, setScores] = useState({
    nose:0,
    taste:0,
    finish:0
  });
  const updateFiles = () => {};

  const handleSubmitReview = () => {};


  const handleScoreChange = (e) => {
    setScores(prevValues  => {
     return {...prevValues, [e.target.name]: e.target.value}
    })
    e.target.style.backgroundSize = (e.target.value - 0) * 100 / 100 + '% 100%';
  };

  return (
    <S.NewWhiskyReviewWrapper>
      <S.NewWhiskyReviewInnerWrapper>
        <form onSubmit={handleSubmitReview}>
          <S.Title>리뷰 작성</S.Title>

          <S.ElementWrapper>
            <HeadLine
              inputText={'사진을 등록해주세요.'}
              isMandatory={false}
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
              inputText={'위스키는 만족스러우셨나요?'}
              isMandatory={false}
            ></HeadLine>
          </S.MarginWrapper>

          <ProgressBar name="nose" label="Nose" score={scores.nose} handleChange={handleScoreChange}></ProgressBar>
          <ProgressBar name="taste" label="Taste" score={scores.taste} handleChange={handleScoreChange}></ProgressBar>
          <ProgressBar name="finish" label="Finish" score={scores.finish} handleChange={handleScoreChange}></ProgressBar>

          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키 노트를 작성해주세요.'}
              isMandatory={false}
            ></HeadLine>
          </S.MarginWrapper>

          <S.MarginWrapper>
            <HeadLine
              inputText={'위스키에 대해 설명해주세요.'}
              isMandatory={false}
            ></HeadLine>
          </S.MarginWrapper>
          <TextField></TextField>

          <S.ButtonsWrapper>
            <S.TempSaveBtn>임시 저장</S.TempSaveBtn>
            <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
          </S.ButtonsWrapper>
        </form>
      </S.NewWhiskyReviewInnerWrapper>
    </S.NewWhiskyReviewWrapper>
  );
}

export default NewWhiskyReview;
