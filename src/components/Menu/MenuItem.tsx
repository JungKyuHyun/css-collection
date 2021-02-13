import React, { FC, memo } from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  open?: boolean;
  onToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const MenuItem: FC<Props> = memo(({ text, children, open = false, onToggle }) => {
  return (
    <MenuItemContainer open={open}>
      <Title open={open} onClick={onToggle}>
        <Summary>{text}</Summary>
      </Title>
      {children && <HiddenContextMenuItem open={open}>{children}</HiddenContextMenuItem>}
    </MenuItemContainer>
  );
});

const MenuItemContainer = styled.div<{ open: boolean }>`
  position: relative;
  width: 100%;
  margin: 2px 0;

  &::after {
    position: absolute;
    border-radius: 50%;
    bottom: -4px;
    right: -4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 2px;
    width: 18px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    font-weight: 800;
    background: #fff;
    z-index: 2;
  }

  &:hover::after {
    content: '+';
  }

  &[open]::after {
    content: 'ㅡ';
  }
`;

const HiddenContextMenuItem = styled.span<{ open: boolean }>`
  position: absolute;
  color: black;
  background: #fff;
  border: 1px solid lightgray;
  border-radius: 4px;
  top: 100%;
  right: 10px;
  /* fallback for ie */
  width: 60%;
  width: min(60%, 100px);
  padding: 8px;
  margin: 0;
  display: ${(props) => (props.open ? 'block' : 'none')};
  z-index: 1;
`;

const Title = styled.details`
  position: relative;
  color: white;
  padding: 8px 0;
  margin: 0 24px;
  transition: all 0.3s ease;

  &[open],
  &:hover {
    padding-left: 24px;
    padding-right: 24px;
    margin: 0;
    background: gray;
    border-radius: 8px;
  }

  @media (pointer: fine) {
    cursor: pointer;
  }
`;

const Summary = styled.summary`
  padding: 8px;
  outline: none;
  font-weight: 600;

  &::-webkit-details-marker {
    display: none;
  }
`;
