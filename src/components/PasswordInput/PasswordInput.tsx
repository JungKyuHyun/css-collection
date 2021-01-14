import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

export const PasswordInput = memo(() => {
  const [value, setValue] = useState<string>();
  const [type, setType] = useState('password');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  const handleIconClick = useCallback(() => {
    setType((t) => (t === 'password' ? 'text' : 'password'));
  }, []);

  return (
    <Container>
      <Input type={type} name="" placeholder="Enter Password" value={value} onChange={handleChange} />
      <Toggle>
        <Icon icon={type === 'password' ? faEye : faEyeSlash} size="2x" onClick={handleIconClick} />
      </Toggle>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  padding: 0 20px;
  font-size: 18px;
  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
  box-shadow: -4px -4px 10px white, inset 4px 4px 10px rgba(0, 0, 0, 0.05), inset -4px -4px 10px white,
    4px 4px 10px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: lightgray;
  }
`;

const Toggle = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  color: gray;
`;
