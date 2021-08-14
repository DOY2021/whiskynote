import React, { useEffect, useReducer } from 'react';
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
import HeadLine from './HeadLine';
import ImageUpload from '../../../shared/ImageUpload/ImageUpload';
import TextField from './TextField';
import ProgressBar from '../Slider/Slider';
import { useState } from 'react';
import WhiskyNote from '../WhiskyNote/WhiskyNote/WhiskyNote';
import Palette from '../../../lib/css/Pallete';
import { ReactionApi } from '../../../api/reaction';
import { TagIndex } from '../../../constants/TagIndex';
import handleColors from './HandleColors';

const tagList = ['곡물', '나무', '꽃', '과일', '와인', '유황', '피트', '후류'];

const changeColors = e => {
  if (!e.target.style.backgroundColor) {
    e.target.style.backgroundColor = handleColors(e.target.value);
    e.target.style.color = '#edece6';
  }
};

const selectedTagsToIndex = selectedTags => {
  const res = {
    nose: Array<number>(),
    taste: Array<number>(),
    finish: Array<number>(),
  };
  selectedTags.nose.length > 0 &&
    selectedTags.nose.forEach(data => res.nose.push(TagIndex[data]));
  selectedTags.taste.length > 0 &&
    selectedTags.taste.forEach(data => res.taste.push(TagIndex[data]));
  selectedTags.finish.length > 0 &&
    selectedTags.finish.forEach(data => res.finish.push(TagIndex[data]));
  return res;
};

const currentClickedReducer = (state, action) => {
  console.log(action.type);
  if (action.type == 'NOSE') {
    return { ...state, currentNoseClicked: action.value };
  }
  if (action.type == 'TASTE') {
    return { ...state, currentTasteClicked: action.value };
  }
  if (action.type == 'FINISH') {
    return { ...state, currentFinishClicked: action.value };
  }
  return {
    currentNoseClicked: '',
    currentTasteClicked: '',
    currentFinishClicked: '',
  };
};

const initialClickedState = {
  currentNoseClicked: '',
  currentTasteClicked: '',
  currentFinishClicked: '',
};

function NewWhiskyReview() {
  //TODO: refactoring
  const [clickedState, dispatch] = useReducer(
    currentClickedReducer,
    initialClickedState,
  );
  const [text, setTextState] = useState('');
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

  const [newFiles, setNewFiles] = useState<File[]>([]);

  const updateFiles = files => {
    // console.log(files);
    // console.log(files.length);
    setNewFiles(prevFiles => [...prevFiles, files]);
    console.log(newFiles);
  };

  const handleSubmitReview = e => {
    e.preventDefault();
    const tags = selectedTagsToIndex(selectedTags);
    const review = {
      id: '',
      user: '',
      userName: '',
      whisky_name: '',
      review_body: text,
      nose_rating: scores.nose,
      taste_rating: scores.taste,
      finish_rating: scores.finish,
      nose_tag: tags.nose,
      taste_tag: tags.taste,
      finish_tag: tags.finish,
    };
    console.log(review);
    ReactionApi.createReview(0, review).then(() => {});
  };

  const handleScoreChange = e => {
    setScores(prevValues => {
      return { ...prevValues, [e.target.name]: parseInt(e.target.value) };
    });
    e.target.style.backgroundSize =
      ((e.target.value - 0) * 100) / 100 + '% 100%';
  };

  const handleNoseSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      console.log(e.target.value);
      dispatch({ type: 'NOSE', value: e.target.value });
    } else {
      if (selectedTags.nose.indexOf(e.target.value) < 0) {
        setSelectedTags(prevValues => {
          return {
            ...prevValues,
            nose: [...selectedTags.nose, e.target.value],
          };
        });
      }
    }
  };

  const handleTasteSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      console.log(e.target.value);
      dispatch({ type: 'TASTE', value: e.target.value });
    } else {
      if (selectedTags.taste.indexOf(e.target.value) < 0) {
        setSelectedTags(prevValues => {
          return {
            ...prevValues,
            taste: [...selectedTags.taste, e.target.value],
          };
        });
      }
    }
  };

  const handleFinishSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      changeColors(e);
      console.log(e.target.value);
      dispatch({ type: 'FINISH', value: e.target.value });
    } else {
      if (selectedTags.finish.indexOf(e.target.value) < 0) {
        setSelectedTags(prevValues => {
          return {
            ...prevValues,
            finish: [...selectedTags.finish, e.target.value],
          };
        });
      }
    }
  };

  const handleNoseDeletion = (name: any) => {
    setSelectedTags(prevValues => {
      return {
        ...prevValues,
        nose: selectedTags.nose.filter(tag => tag !== name),
      };
    });
  };

  const handleTasteDeletion = (name: any) => {
    setSelectedTags(prevValues => {
      return {
        ...prevValues,
        taste: selectedTags.taste.filter(tag => tag !== name),
      };
    });
  };

  const handleFinishDeletion = (name: any) => {
    setSelectedTags(prevValues => {
      return {
        ...prevValues,
        finish: selectedTags.finish.filter(tag => tag !== name),
      };
    });
  };

  const handleTextAreaInput = e => {
    setTextState(e.target.value);
  };
  return (
    <S.NewWhiskyReviewWrapper>
      <S.NewWhiskyReviewInnerWrapper>
        <form onSubmit={handleSubmitReview}>
          <S.Title>리뷰 작성</S.Title>
          <S.ElementWrapper>
            <S.TitleWrapper>
              <HeadLine
                inputText={'사진을 등록해주세요.'}
                isMandatory={false}
              ></HeadLine>
              <S.FileNum>{newFiles.length}/5</S.FileNum>
            </S.TitleWrapper>

            <S.MarginWrapper>
              <S.ImageUploadGuideline>
                * 사진은 5개까지 등록할 수 있습니다.
              </S.ImageUploadGuideline>
              <S.ImageUploadGuideline>
                * 사진 크기는 200 x 200에 최적화되어 있습니다.
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
            currentClicked={clickedState.currentNoseClicked}
            hashTagList={selectedTags.nose}
            handleTagDelete={handleNoseDeletion}
          ></WhiskyNote>
          <WhiskyNote
            label="Taste"
            handleTagSelection={handleTasteSelection}
            currentClicked={clickedState.currentTasteClicked}
            hashTagList={selectedTags.taste}
            handleTagDelete={handleTasteDeletion}
          ></WhiskyNote>
          <WhiskyNote
            label="Finish"
            handleTagSelection={handleFinishSelection}
            currentClicked={clickedState.currentFinishClicked}
            hashTagList={selectedTags.finish}
            handleTagDelete={handleFinishDeletion}
          ></WhiskyNote>

          <HeadLine
            inputText={'위스키에 대해 설명해주세요.'}
            isMandatory={false}
          ></HeadLine>
          <S.ImageUploadGuideline>
            100자 이상 작성시 150포인트 지급
          </S.ImageUploadGuideline>
          <TextField
            text={text}
            handleTextAreaInput={handleTextAreaInput}
          ></TextField>

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
