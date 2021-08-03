import {TagProp} from './Tag'

export type WhiskyNoteProp = 'Nose' | 'Taste' | 'Finish'

export type NoteItemProp = {
  [A : string]: string
} 

export const MockNoteModel : {[K in WhiskyNoteProp] : NoteItemProp} = {
  'Nose' : {
    '자연목' : '65%',
    '젖은흙' : '24%',
    '건초' : '24%',
  },
  'Taste': {
    '초콜릿': '25%',
    '해산물': '24%',
    '플라스틱': '24%',
  },
  'Finish': {
    '익힌곡물': '35%',
    '향수': '24%',
    '말린과일': '24%',
  }
}