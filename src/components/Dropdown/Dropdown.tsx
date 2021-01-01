import React, { memo, useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faEdit,
  faEnvelope,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import styled, { css } from 'styled-components';
import profileImage from '../../assets/profile-with-circle.jpg';

export const Dropdown = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <Container>
      <Profile onClick={handleClick}>
        <Img src={profileImage} alt="profile" />
      </Profile>
      <Menu open={isOpen}>
        <H3>
          제이콥
          <br />
          <JobTitle>Front-end Developer</JobTitle>
        </H3>
        <Ul>
          <Li>
            <Icon icon={faUserCircle} size="2x" />
            <Link href="#">나의 정보</Link>
          </Li>
          <Li>
            <Icon icon={faEdit} size="2x" />
            <Link href="#">나의 정보 수정</Link>
          </Li>
          <Li>
            <Icon icon={faEnvelope} size="2x" />
            <Link href="#">메일함</Link>
          </Li>
          <Li>
            <Icon icon={faCog} size="2x" />
            <Link href="#">설정</Link>
          </Li>
          <Li>
            <Icon icon={faQuestionCircle} size="2x" />
            <Link href="#">고객센터</Link>
          </Li>
          <Li>
            <Icon icon={faSignOutAlt} size="2x" />
            <Link href="#">로그아웃</Link>
          </Li>
        </Ul>
      </Menu>
    </Container>
  );
});

const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
`;

const Profile = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  top: 120px;
  right: -10px;
  padding: 12px 20px;
  background: white;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: 0.25s;
  ${(props) =>
    props.open
      ? css`
          visibility: visible;
          opacity: 1;
          top: 80px;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: white;
    transform: rotate(45deg);
  }
`;

const H3 = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding: 8px 0;
  font-weight: 700;
  color: dimgray;
  line-height: 1.2em;
  margin: 8px 0;
`;

const JobTitle = styled.span`
  color: lightgray;
  font-size: 14px;
  font-weight: 400;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 4px 0;
  margin: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  max-width: 32px;
  transition: 0.5s;
  opacity: 0.25;
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: dimgray;
  font-weight: 500;
  transition: 0.25s;
`;

const Li = styled.li`
  list-style: none;
  padding: 8px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;

  &:hover {
    ${Icon} {
      opacity: 1;
    }
    ${Link} {
      color: black;
      font-weight: 600;
    }
  }
`;
