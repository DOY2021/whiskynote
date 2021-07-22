import styled, { css } from "styled-components";
import { TagProp } from "../../../../model/Tag";
import TagService from "../../../../Services/TagService";

interface NoteItemContentWrapperProp {
  isFirst: boolean;
  category: TagProp;
}

const NoteItemWrapper = styled.ul`
    width: 300px;
    height: 224px;
`;

const NoteItemContentWrapper = styled.li<NoteItemContentWrapperProp>`
    display: flex;
    align-items: center;

    padding: 10px 20px;
    margin-bottom: 10px;

    width: 300px;
    height: 76px;

    background-color: #E5E5DF;
    ${({isFirst,category}) => isFirst && css`
        background-color: ${TagService.getTagColor(category)};
    `}

    border-radius: 10px;

    box-sizing: border-box;

    ${({})}
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