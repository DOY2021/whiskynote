import React from 'react';
import styled, { css } from 'styled-components';

const HashTagWrapper = styled.div`
  background-color: #d0cec5;
  align-items: center;
  border-radius: 4px;
  padding: 4px 8px;
  width: fit-content;
  display: flex;
  display-items: row;
  margin-right:12px;
`;
const TagText = styled.div`
  font-size: 13px;
  color: #2f2e2d;
`;
const DeleteIcon = styled.button`
  outline: none;
  margin-left: 3px;
  cursor: pointer;
  background-color: transparent;
  margin-top: 2px;
`;
function HashTag(props: { name: string }) {
  return (
    <HashTagWrapper>
      <TagText>{props.name}</TagText>
      <DeleteIcon>
        <img src="../../../../../assets/CustomIcons/removetag.svg"></img>
      </DeleteIcon>
    </HashTagWrapper>
  );
}

export default HashTag;
