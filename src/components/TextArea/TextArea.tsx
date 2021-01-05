import React, { memo, useCallback, useRef, ReactText, useEffect } from 'react';
import styled from 'styled-components';

export interface TextAreaProp {
  className?: string;
  value?: ReactText | ReadonlyArray<string>;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = memo<TextAreaProp>(
  ({ className, value, onChange, placeholder }) => {
    const ref = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (ref === null || ref.current === null) {
        return;
      }
      ref.current.style.height = '38px';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }, []);

    const handleResizeHeight = useCallback(() => {
      if (ref === null || ref.current === null) {
        return;
      }
      ref.current.style.height = '38px';
      ref.current.style.height = ref.current.scrollHeight + 'px';
    }, []);

    return (
      <>
        <Title>
          Automatic height-adjusted TextArea
          <br />
          <Sub>by JACOB</Sub>
        </Title>
        <AutoResizeTextArea
          className={className}
          value={value}
          onChange={onChange}
          rows={1}
          placeholder={placeholder}
          ref={ref}
          onInput={handleResizeHeight}
        />
      </>
    );
  },
);

const Title = styled.h2`
  color: white;
  text-align: center;
`;

const Sub = styled.span`
  color: dimgray;
  font-weight: 600;
`;

const AutoResizeTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  padding: 12px;
  display: block;
  outline: none;
  min-height: 38px;
  border-radius: 4px;
  caret-color: lightskyblue;
  box-sizing: border-box;
  line-height: 20px;

  &:focus {
    background: azure;
  }
`;
