export enum WhiskyNoteCategory {
  NOSE = 'Nose',
  TASTE = 'Taste',
  FINISH = 'Finish',
}

export enum Tags {
  홉 = '홉',
  맥아 = '맥아',
  익힌야채 = '익힌야채',
  익힌곡물 = '익힌곡물',
  효모 = '효모',
  자연목 = '자연목',
  가공목 = '가공목',
  바닐라 = '바닐라',
  토스트 = '토스트',
  향수 = '향수',
  화초 = '화초',
  풀잎 = '풀잎',
  건초 = '건초',
  시트러스 = '시트러스',
  생과일 = '생과일',
  익힌과일 = '익힌과일',
  말린과일 = '말린과일',
  아세톤 = '아세톤',
  셰리 = '셰리',
  견과류 = '견과류',
  초콜릿 = '초콜릿',
  오일 = '오일',
  석탄 = '석탄',
  젖은흙 = '젖은흙',
  모래 = '모래',
  고무 = '고무',
  소독약 = '소독약',
  이끼 = '이끼',
  해산물 = '해산물',
  훈연향 = '훈연향',
  허니 = '허니',
  플라스틱 = '플라스틱',
  체취 = '체취',
  가죽 = '가죽',
  담배 = '담배',
}

export enum TagVariant {
  곡물 = '곡물',
  나무 = '나무',
  꽃 = '꽃',
  과일 = '과일',
  와인 = '와인',
  유황 = '유황',
  피트 = '피트',
  후류 = '후류',
}


export const TagCategory : {[K in Tags] : TagVariant } = {
  [Tags.홉] : TagVariant.곡물,
  [Tags.맥아] : TagVariant.곡물,
  [Tags.익힌야채] : TagVariant.곡물,
  [Tags.익힌곡물] : TagVariant.곡물,
  [Tags.효모] : TagVariant.곡물,
  [Tags.자연목] : TagVariant.나무,
  [Tags.가공목] : TagVariant.나무,
  [Tags.바닐라] : TagVariant.나무,
  [Tags.토스트] : TagVariant.나무,
  [Tags.향수] : TagVariant.꽃,
  [Tags.화초]: TagVariant.꽃,
  [Tags.풀잎]: TagVariant.꽃,
  [Tags.건초]: TagVariant.꽃,
  [Tags.시트러스]: TagVariant.과일,
  [Tags.생과일]: TagVariant.과일,
  [Tags.익힌과일] : TagVariant.과일,
  [Tags.말린과일]: TagVariant.과일,
  [Tags.아세톤]: TagVariant.과일,
  [Tags.셰리]: TagVariant.와인,
  [Tags.견과류]: TagVariant.와인,
  [Tags.초콜릿]: TagVariant.와인,
  [Tags.오일] : TagVariant.와인,
  [Tags.석탄]: TagVariant.유황,
  [Tags.젖은흙]: TagVariant.유황,
  [Tags.모래]: TagVariant.유황,
  [Tags.고무]: TagVariant.유황,
  [Tags.소독약] : TagVariant.피트,
  [Tags.이끼]: TagVariant.피트,
  [Tags.해산물]: TagVariant.피트,
  [Tags.훈연향]: TagVariant.피트,
  [Tags.허니]: TagVariant.후류,
  [Tags.플라스틱]: TagVariant.후류,
  [Tags.체취]: TagVariant.후류,
  [Tags.가죽]: TagVariant.후류,
  [Tags.담배]: TagVariant.후류
}

export const TagIndex : {[K in Tags] :number } = {
  '홉' : 1,
  '맥아' : 2,
  '익힌야채' : 3,
  '익힌곡물' : 4,
  '효모' : 5,
  '자연목' : 6,
  '가공목' : 7,
  '바닐라' : 8,
  '토스트' : 9,
  '향수' : 10,
  '화초': 11,
  '풀잎': 12,
  '건초': 13,
  '시트러스': 14,
  '생과일': 15,
  '익힌과일': 16,
  '말린과일': 17,
  '아세톤': 18,
  '셰리': 19,
  '견과류': 20,
  '초콜릿': 21,
  '오일': 22,
  '석탄': 23,
  '젖은흙': 24,
  '모래': 25,
  '고무': 26,
  '소독약' : 27,
  '이끼': 28,
  '해산물': 29,
  '훈연향': 30,
  '허니': 31,
  '플라스틱': 32,
  '체취': 33,
  '가죽': 34,
  '담배': 35
}

export type NoteItemProp = {
  [A in Tags]?: string
} 

export type WhiskyNoteProp = {[K in WhiskyNoteCategory] : NoteItemProp}

export const MockNoteModel : WhiskyNoteProp = {
  [WhiskyNoteCategory.NOSE] : {
    [Tags.가죽] : '65%',
    [Tags.건초] : '24%',
    [Tags.담배] : '24%',
  },
  [WhiskyNoteCategory.TASTE]: {
    [Tags.건초] : '24%',
    [Tags.가죽] : '65%',
    [Tags.담배] : '24%',
  },
  [WhiskyNoteCategory.FINISH]: {
    [Tags.이끼] : '24%',
    [Tags.가죽] : '65%',
    [Tags.건초] : '24%',
  }
}