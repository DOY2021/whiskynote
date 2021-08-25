import React, { useEffect, useMemo, useReducer } from 'react';
import SearchWhisky from '../SearchWhisky/SearchWhisky';
import S from './NewWhiskyReview.styled';
import HeadLine from './HeadLine';
import ImageUpload from '../../../shared/ImageUpload/ImageUpload';
import TextField from './TextField';
import Slider from '../Slider/Slider';
import { useState } from 'react';
import WhiskyNote from '../WhiskyNote/WhiskyNote/WhiskyNote';
import Palette from '../../../lib/css/Pallete';
import { ReactionApi } from '../../../api/reaction';
import { TagIndex } from '../../../constants/TagIndex';
import handleColors from './HandleColors';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import useWhiskyDB from '../../../hook/swr/useWhiskyDB';

const tagList = ['곡물', '나무', '꽃', '과일', '와인', '유황', '피트', '후류'];


const selectedTagsToIndex = selectedTags => {
  const res = {
    flavor: Array<number>(),
  };
  selectedTags.flavor.length > 0 &&
    selectedTags.flavor.forEach(data => res.flavor.push(TagIndex[data]));
  return res;
};

const currentClickedReducer = (state, action) => {
  console.log(action.type);
  if (action.type == 'NOSE') {
    return { ...state, currentNoseClicked: action.value };
  }

  return {
    currentNoseClicked: '',
  };
};

const initialClickedState = {
  currentNoseClicked: '',
};

function NewWhiskyReview() {
  //TODO: refactoring
  const { data } = useWhiskyDB();

  const [clickedState, dispatch] = useReducer(
    currentClickedReducer,
    initialClickedState,
  );
  const [text, setTextState] = useState('');
  const [selectedTags, setSelectedTags] = useState<any>({
    flavor: '',
  });

  const [scores, setScores] = useState({
    nose: 0,
    taste: 0,
    finish: 0,
  });

  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [fileLength, setFileLength] = useState(0);

  const history = useHistory();

  const updateFiles = files => {
    // console.log(files);
    setFileLength(files.length);
    setNewFiles([files]);
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
      flavor_tag: tags.flavor,
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

  const handleFlavorSelection = e => {
    e.preventDefault();
    if (tagList.indexOf(e.target.value) > -1) {
      console.log(e.target.value);
      dispatch({ type: 'NOSE', value: e.target.value });
    } else {
      if (selectedTags.flavor.indexOf(e.target.value) < 0) {
        setSelectedTags(prevValues => {
          return {
            ...prevValues,
            flavor: [...selectedTags.flavor, e.target.value],
          };
        });
      }
    }
  };

  const handleFlavorDeletion = (name: any) => {
    setSelectedTags(prevValues => {
      return {
        ...prevValues,
        flavor: selectedTags.flavor.filter(tag => tag !== name),
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
          {data && (
            <S.BreadCrumb data-cy="breadcrumb">{data.category} {'>'} {data.name_kor}</S.BreadCrumb>
          )}
          <S.BreadCrumb data-cy="breadcrumb">싱글몰트 위스키 {'>'} 글렌모렌지</S.BreadCrumb>
          <S.Title>리뷰 작성</S.Title>
          <S.ElementWrapper>
            <S.TitleWrapper>
              <HeadLine
                inputText={'사진을 등록해주세요.'}
                isMandatory={false}
                isFirst={true}
              ></HeadLine>
              <S.FileNum>{fileLength}/5</S.FileNum>
            </S.TitleWrapper>

            <S.MarginWrapper>
              <S.ImageUploadGuideline>
                * 사진은 5개까지 등록할 수 있습니다.
              </S.ImageUploadGuideline>
              <S.ImageUploadGuideline>
                * 사진 크기는 200 x 200에 최적화되어 있습니다.
              </S.ImageUploadGuideline>
              <S.ImageUploadGuideline>
                * 4MB 이하의 사진을 업로드 해 주세요.
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
          <Slider
           data_cy="slider-nose"
            name="nose"
            label="Nose"
            score={scores.nose}
            handleChange={handleScoreChange}
          ></Slider>
          <Slider
           data_cy="slider-taste"
            name="taste"
            label="Taste"
            score={scores.taste}
            handleChange={handleScoreChange}
          ></Slider>
          <Slider
            data_cy="slider-finish"
            name="finish"
            label="Finish"
            score={scores.finish}
            handleChange={handleScoreChange}
          ></Slider>

          <HeadLine
            inputText={'어떤 맛과 향을 느끼셨나요?'}
            isMandatory={false}
          ></HeadLine>

          <WhiskyNote
            data_cy="whiskynote-nose"
            label="Nose"
            handleTagSelection={handleFlavorSelection}
            currentClicked={clickedState.currentNoseClicked}
            hashTagList={selectedTags.flavor}
            handleTagDelete={handleFlavorDeletion}
           
          ></WhiskyNote>

          <HeadLine
            inputText={'위스키에 대해 설명해주세요.'}
            isMandatory={false}
          ></HeadLine>
          {/* <S.ImageUploadGuideline style={{ marginTop: '-12px' }}>
            100자 이상 작성시 150포인트 지급
          </S.ImageUploadGuideline> */}
          <TextField
            text={text}
            handleTextAreaInput={handleTextAreaInput}
          ></TextField>

          <S.ButtonsWrapper>
            <S.TempSaveBtn onClick={history.goBack} type="reset">
              뒤로가기
            </S.TempSaveBtn>
            <S.RegisterWhiskyBtn>위스키 등록하기</S.RegisterWhiskyBtn>
          </S.ButtonsWrapper>
        </form>
      </S.NewWhiskyReviewInnerWrapper>
    </S.NewWhiskyReviewWrapper>
  );
}

export default NewWhiskyReview;
