import React from 'react';
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
import HeadLine from './HeadLine';
import ImageUpload from '../../../shared/ImageUpload/ImageUpload';
import TextField from './TextField';
import ProgressBar from '../Slider/Slider';
import { useState } from 'react';
import WhiskyNote from '../WhiskyNote/WhiskyNote/WhiskyNote';
import Palette from '../../../lib/css/Pallete';
import HashTag from '../WhiskyNote/HashTag/HashTag';

const handleColors = text => {
  switch (text) {
    case '곡물':
      return Palette.곡물;
    case '나무':
      return Palette.나무;
    case '꽃':
      return Palette.꽃;
    case '과일':
      return Palette.과일;
    case '와인':
      return Palette.와인;
    case '유황':
      return Palette.유황;
    case '피트':
      return Palette.피트;
    case '후류':
      return Palette.후류;
    default:
      return '#e7e5de';
  }
};
function NewWhiskyReview() {
  const [currentClicked, setCurrentClicked] = useState('');
  const [selectedTags, setSelectedTags] = useState({
    nose: [],
    taste: [],
    finish: []
  })

  const [scores, setScores] = useState({
    nose: 0,
    taste: 0,
    finish: 0,
  });
  const updateFiles = () => {};

  const handleSubmitReview = () => {};

  const handleScoreChange = e => {
    setScores(prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
    e.target.style.backgroundSize =
      ((e.target.value - 0) * 100) / 100 + '% 100%';
    console.log(scores);
  };

  const changeColors = e => {
    if (!e.target.style.backgroundColor) {
      e.target.style.backgroundColor = handleColors(e.target.value);
      e.target.style.color = '#edece6';
    } 
    setCurrentClicked(e.target.value);
  }

  const handleTagSelection = e => {
    e.preventDefault();
    
    changeColors(e);
    console.log(e)
  };


  const handleLowerTagSelection = e => {
    e.preventDefault();
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

          <HeadLine
            inputText={'위스키는 만족스러우셨나요?'}
            isMandatory={false}
          ></HeadLine>
          <ProgressBar
            name="nose"
            label="Nose"
            score={scores.nose}
            handleChange={handleScoreChange}
          ></ProgressBar>
          <ProgressBar
            name="taste"
            label="Taste"
            score={scores.taste}
            handleChange={handleScoreChange}
          ></ProgressBar>
          <ProgressBar
            name="finish"
            label="Finish"
            score={scores.finish}
            handleChange={handleScoreChange}
          ></ProgressBar>

          <HeadLine
            inputText={'어떤 맛과 향을 느끼셨나요?'}
            isMandatory={false}
          ></HeadLine>
          <HashTag name="바닐라"></HashTag>
          <WhiskyNote
            label="Nose"
            handleTagSelection={handleTagSelection}
            handleLowerTagSelection={handleLowerTagSelection}
            currentClicked={currentClicked}
          ></WhiskyNote>
          <WhiskyNote
            label="Taste"
            handleTagSelection={handleTagSelection}
            handleLowerTagSelection={handleLowerTagSelection}
            currentClicked={currentClicked}
          ></WhiskyNote>
          <WhiskyNote
            label="Finish"
            handleTagSelection={handleTagSelection}
            handleLowerTagSelection={handleLowerTagSelection}
            currentClicked={currentClicked}
          ></WhiskyNote>

          <HeadLine
            inputText={'위스키에 대해 설명해주세요.'}
            isMandatory={false}
          ></HeadLine>

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
