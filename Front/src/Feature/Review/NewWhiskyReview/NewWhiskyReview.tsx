import React, { useEffect } from 'react';
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

const tagList = ['곡물', '나무', '꽃', '과일', '와인', '유황', '피트', '후류'];

function NewWhiskyReview() {
  const [currentNoseClicked, setCurrentNoseClicked] = useState('');
  const [currentTasteClicked, setCurrentTasteClicked] = useState('');
  const [currentFinishClicked, setCurrentFinishClicked] = useState('');
  const [selectedTags, setSelectedTags] = useState<any>({
    nose: '',
    taste: '',
    finish: '',
  });

  const [scores, setScores] = useState({
    nose: 0,
    taste: 0,
    finish: 0,
  });
  const updateFiles = () => {};

  const handleSubmitReview = () => {};

  const handleScoreChange = e => {
    //TODO: important
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
  };


  const handleNoseSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      setCurrentNoseClicked(e.target.value);
    } else {
      //lower tag
     
      if(selectedTags.nose.indexOf(e.target.value) < 0){
        console.log([...selectedTags.nose, e.target.value])
      setSelectedTags(prevValues =>  {
        return {...prevValues, nose: [...selectedTags.nose, e.target.value]}
      })
      }
    }
  };

  const handleTasteSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      setCurrentTasteClicked(e.target.value);
    } else {
      

    }
  };

  const handleFinishSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      setCurrentFinishClicked(e.target.value);
    } else {

    }
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
         
          <WhiskyNote
            label="Nose"
            handleTagSelection={handleNoseSelection}
            currentClicked={currentNoseClicked}
            hashTagList={selectedTags.nose}
          ></WhiskyNote>
          {/* <WhiskyNote
            label="Taste"
            handleTagSelection={handleTasteSelection}  
            currentClicked={currentTasteClicked}
          ></WhiskyNote>
          <WhiskyNote
            label="Finish"
            handleTagSelection={handleFinishSelection}
            currentClicked={currentFinishClicked}
          ></WhiskyNote> */}

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
