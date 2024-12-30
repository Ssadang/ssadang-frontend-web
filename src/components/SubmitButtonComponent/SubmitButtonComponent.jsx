import React from 'react';
import { SubmitButton } from './style';

function SubmitButtonComponent(props) {
  return (
    <SubmitButton onClick={props.onClick} fontSize={props.fontSize}>{props.text}</SubmitButton>
  )
}

export default SubmitButtonComponent;