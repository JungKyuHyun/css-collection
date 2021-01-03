import React, { memo, useState, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';

export const Modal = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (
        typeof window !== 'undefined' &&
        document.body.scrollHeight > window.innerHeight
      ) {
        document.body.style.overflowY = 'hidden';
        document.body.style.paddingRight = '15px';
        return;
      }
    }
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = '0';
  }, [isOpen]);

  const handleClick = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  return (
    <>
      <Container open={isOpen}>
        <Content>
          <h2>더보기를 누르면 모달이 나와요</h2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
            ipsa rerum aliquam culpa quasi, asperiores obcaecati consectetur,
            magnam repudiandae blanditiis eos, rem nam. Quam maiores voluptate
            saepe hic officia...
          </P>
          <ButtonContainer>
            <Button onClick={handleClick}>더보기</Button>
          </ButtonContainer>
        </Content>
      </Container>
      <Popup open={isOpen}>
        <PopupTitle>Jacob's Modal</PopupTitle>
        <PopupContents>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          perspiciatis cupiditate sapiente perferendis non consequuntur, alias
          dolores distinctio, qui obcaecati, recusandae incidunt quia nesciunt
          laudantium ipsam maxime inventore reiciendis laboriosam.
        </PopupContents>
        <ButtonContainer>
          <Button onClick={handleClick}>닫기</Button>
        </ButtonContainer>
      </Popup>
    </>
  );
});

const Popup = styled.div<{ open: boolean }>`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  padding: 28px 36px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 4px;

  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
  ${(props) =>
    props.open &&
    css`
      top: 50%;
      visibility: visible;
      opacity: 1;
      transition: 0.5s;
    `}
`;

const PopupTitle = styled.h2``;

const PopupContents = styled.p``;

const Container = styled.div<{ open: boolean }>`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  padding: 20px;

  ${(props) =>
    props.open &&
    css`
      filter: blur(20px);
      pointer-events: none;
      user-select: none;
    `}
`;

const Content = styled.div`
  position: relative;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 4px;
`;

const P = styled.p``;

const Button = styled.button`
  position: relative;
  padding: 8px 20px;
  display: inline-block;
  font-weight: 600;
  margin-top: 20px;
  text-decoration: none;
  color: white;
  background: black;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
