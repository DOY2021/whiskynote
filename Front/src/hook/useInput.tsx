/* eslint-disable @typescript-eslint/indent */
import React, { Dispatch, SetStateAction, useState } from 'react';

type InputHookProp = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void,
  () => void,
];

function useInput(): InputHookProp {
  const [inputValue, setValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const resetInput = () => {
    setValue('');
  };

  return [inputValue, setValue, handleInputChange, resetInput];
}

export default useInput;
