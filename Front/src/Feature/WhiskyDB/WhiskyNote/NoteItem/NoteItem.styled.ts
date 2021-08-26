import styled, { css } from "styled-components";
import { TagVariant } from "../../../../model/WhiskyNote";
import TagService from "../../../../Services/TagService";

interface NoteItemContentWrapperProp {
  isFirst: boolean;
  category: TagVariant;
}

const NoteItemWrapper = styled.ul`
`;

const NoteItemContentWrapper = styled.li<NoteItemContentWrapperProp>`
    display: flex;
    align-items: center;

    
    padding: 17px;
    margin-bottom: 10px;

  

    background-color: #E5E5DF;
    ${({isFirst,category}) => isFirst && css`
        background-color: ${TagService.getTagColor(category)};
        padding: 26px 19px;
    `}

    border-radius: 4px;

    box-sizing: border-box;
`;

const NoteItemContentIcon = styled.img`
    width: 32px;
    height: 24px;

    margin-right: 10px;
`;

interface NoteItemContentTextProp {
  isFirst : boolean;
}

const NoteItemContentText = styled.div<NoteItemContentTextProp>`
    flex: 1;
    margin-left: 13px;
    
    display:flex;
    align-items: center;
    justify-content: space-between;

    ${({isFirst}) => isFirst && css`
    color: white;
`}
`;

export default {
  NoteItemWrapper,
  NoteItemContentWrapper,
  NoteItemContentIcon,
  NoteItemContentText,
}