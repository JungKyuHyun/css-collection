import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faEdit,
  faEnvelope,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export const SidebarMenu = memo(() => {
  return (
    <Sidebar>
      <MenuList>
        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faUserCircle} />
            </IconContainer>
            <Label>나의 정보</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faEdit} />
            </IconContainer>
            <Label>나의 정보 수정</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faEnvelope} />
            </IconContainer>
            <Label>메일함</Label>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faCog} />
            </IconContainer>
            <Label>설정</Label>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faQuestionCircle} />
            </IconContainer>
            <Label>고겍센터</Label>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#">
            <IconContainer>
              <Icon icon={faSignOutAlt} />
            </IconContainer>
            <Label>로그아웃</Label>
          </Link>
        </MenuItem>
      </MenuList>
    </Sidebar>
  );
});

const Sidebar = styled.div`
  position: fixed;
  width: 60px;
  height: 100%;
  background: dimgray;
  transition: 0.5s;
  overflow: hidden;

  &:hover {
    width: 240px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
`;

const IconContainer = styled.span`
  position: relative;
  display: flex;
  line-height: 60px;
  text-align: center;
  height: 60px;
  min-width: 60px;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: white;
`;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li`
  list-style: none;
  position: relative;
  width: 100%;

  &:hover {
    background: coral;
  }
`;

const Label = styled.span`
  position: relative;
  display: block;
  padding: 0 10px;
  line-height: 60px;
  text-align: start;
  width: 60px;
  white-space: nowrap;
  color: white;
`;
