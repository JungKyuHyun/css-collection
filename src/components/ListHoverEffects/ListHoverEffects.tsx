import React, { memo } from 'react';
import styled from 'styled-components';

export const ListHoverEffects = memo(() => {
  return (
    <List>
      <Title>Jacob's Playground</Title>
      <Ul>
        <Li>
          <Item>제이콥이 배고프다.</Item>
        </Li>
        <Li>
          <Item>제이콥은 개발자다.</Item>
        </Li>
        <Li>
          <Item>제이콥은 먹는게 좋다.</Item>
        </Li>
        <Li>
          <Item>제이콥은 옷이 좋다.</Item>
        </Li>
        <Li>
          <Item>제이콥은 성격이 좋다.</Item>
        </Li>
        <Li>
          <Item>제이콥은 일한다.</Item>
        </Li>
        <Li>
          <Item>제이콥이 코딩한다.</Item>
        </Li>
      </Ul>
    </List>
  );
});

const List = styled.div`
  position: relative;
`;

const Title = styled.h2`
  position: relative;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Ul = styled.ul`
  position: relative;
  width: 100%;
  padding: 0;
`;

const Li = styled.li`
  position: relative;
  left: 0;
  color: gray;
  list-style: none;
  margin: 4px 0;
  border-left: 2px solid cyan;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    left: 10px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: cyan;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.5s;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const Item = styled.span`
  position: relative;
  padding: 8px;
  display: inline-block;
  z-index: 1;
  transition: 0.5s;

  &:hover {
    color: white;
  }
`;
