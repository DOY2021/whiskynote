import React from 'react';
import styled, { css } from 'styled-components';
import Delete from '../../../../../assets/CustomIcons/removetag.svg'

const HashTagWrapper = styled.div`
  background-color: #d0cec5;
  align-items: center;
  border-radius: 4px;
  padding: 2px 6px 4px;
  width: fit-content;
  display: flex;
  display-items: row;
  margin-right:12px;
  margin-bottom: 16px;
`;
const TagText = styled.div`
  font-size: 13px;
  color: #2f2e2d;
  padding-top: 2px;
`;
const DeleteIcon = styled.div`
  outline: none;
  margin-left: 3px;
  cursor: pointer;
  background-color: transparent;
  margin-top: 2px;
`;
function HashTag(props: { name: string, key:any, handleTagDelete:(k:any) => void}) {
  const handleDeletion = () => {
    props.handleTagDelete(props.name)
  }
  return (
    <HashTagWrapper>
      <TagText>{props.name}</TagText>
      <DeleteIcon onClick={handleDeletion}>
        <Delete src={Delete}></Delete>
      </DeleteIcon>
    </HashTagWrapper>
  );
}

export default HashTag;
