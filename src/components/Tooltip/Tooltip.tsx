import React, { memo } from 'react';
import styled from 'styled-components';

export const Tooltip = memo(() => {
  return (
    <List>
      <ListItem>
        <ContentsContainer>
          <Title>Jacob One</Title>
          <Contents>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque voluptatibus possimus esse officia.
          </Contents>
        </ContentsContainer>
      </ListItem>

      <ListItem>
        <ContentsContainer>
          <Title>Jacob Two</Title>
          <Contents>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque voluptatibus possimus esse officia.
          </Contents>
        </ContentsContainer>
      </ListItem>

      <ListItem>
        <ContentsContainer>
          <Title>Jacob Three</Title>
          <Contents>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque voluptatibus possimus esse officia.
          </Contents>
        </ContentsContainer>
      </ListItem>
    </List>
  );
});

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

const ContentsContainer = styled.div`
  position: absolute;
  bottom: 56px;
  width: 400px;
  background: white;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  visibility: hidden;
  transition: 0.5s;
  opacity: 0;
  transform: translate(-50%, -50px);

  &::before {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    background: white;
    bottom: -14px;
    right: 178px;
    transform: rotate(45deg);
  }
`;

const ListItem = styled.li`
  position: relative;
  list-style: none;
  width: 20px;
  height: 20px;
  background: lightgray;
  margin: 0 20px;
  border-radius: 50%;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: cyan;
    box-shadow: 0 0 0 4px black, 0 0 0 6px cyan;

    ${ContentsContainer} {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 8px;
`;

const Contents = styled.p`
  margin: 0 0 8px;
`;
