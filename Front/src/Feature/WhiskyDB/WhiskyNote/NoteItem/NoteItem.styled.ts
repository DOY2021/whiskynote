import styled from "styled-components";

const NoteItemWrapper = styled.ul`
    width: 400px;
    height: 254px;
`;

const NoteItemContentWrapper = styled.li`
    display: flex;

    padding: 10px 5px;

    width: 400px;
    height: 76px;
`;

const NoteItemContentIcon = styled.img`
    width: 32px;
    height: 24px;
`;

const NoteItemContentText = styled.div`
    flex: 1;
    
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

export default {
  NoteItemWrapper,
  NoteItemContentWrapper,
  NoteItemContentIcon,
  NoteItemContentText,
}