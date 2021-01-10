import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

export const Timeline = memo(() => {
  return (
    <Container>
      <TimelineList>
        <TimelineItemContainer>
          <TimelineItem>
            <Date>2021년 1월 1일</Date>
            <Title>결제 완료</Title>
            <Contents>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos fuga earum deleniti adipisci recusandae
              a aliquam inventore rem aut sint nobis doloremque, tempora laboriosam, tempore optio beatae reprehenderit
              distinctio!
            </Contents>
          </TimelineItem>
        </TimelineItemContainer>

        <TimelineItemContainer>
          <TimelineItem>
            <Date>2021년 1월 2일</Date>
            <Title>상품 준비중</Title>
            <Contents>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos fuga earum deleniti adipisci recusandae
              a aliquam inventore rem aut sint nobis doloremque, tempora laboriosam, tempore optio beatae reprehenderit
              distinctio!
            </Contents>
          </TimelineItem>
        </TimelineItemContainer>

        <TimelineItemContainer>
          <TimelineItem>
            <Date>2021년 1월 3일</Date>
            <Title>배송중</Title>
            <Contents>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos fuga earum deleniti adipisci recusandae
              a aliquam inventore rem aut sint nobis doloremque, tempora laboriosam, tempore optio beatae reprehenderit
              distinctio!
            </Contents>
          </TimelineItem>
        </TimelineItemContainer>

        <TimelineItemContainer>
          <TimelineItem>
            <Date>2021년 1월 4일</Date>
            <Title>배송 완료</Title>
            <Contents>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eos fuga earum deleniti adipisci recusandae
              a aliquam inventore rem aut sint nobis doloremque, tempora laboriosam, tempore optio beatae reprehenderit
              distinctio!
            </Contents>
          </TimelineItem>
        </TimelineItemContainer>
      </TimelineList>
    </Container>
  );
});

const Container = styled.div`
  color: white;
  max-width: 800px;
  margin: 40px auto 0;
  padding: 40px;
  background: black;
  box-sizing: border-box;
`;

const TimelineList = styled.ul`
  margin: 0;
  padding: 0;
  border-left: 2px solid dimgray;
  list-style: none;
`;

const TimelineItemContainer = styled.li`
  list-style: none;
`;

const Date = styled.span`
  padding: 4px 12px;
  background: rgba(105, 105, 105, 0.6);
  color: gray;
  border-radius: 16px;
`;

const Title = styled.h3`
  margin: 16px 0 0;
  padding: 0;
  color: dimgray;
  opacity: 0.8;
`;

const Contents = styled.p`
  margin: 8px 0 0;
  color: dimgray;
`;

const animate = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 28px 20px;

  &:hover {
    background: rgba(105, 105, 105, 0.2);
    ${Date} {
      background: seagreen;
      color: white;
      font-weight: bold;
    }
    ${Title} {
      color: lime;
      font-weight: bold;
    }
    ${Contents} {
      color: gray;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 32px;
    left: -7px;
    width: 12px;
    height: 12px;
    background: dimgray;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 32px;
    left: -6px;
    width: 12px;
    height: 12px;
    background: lime;
    border-radius: 50%;
    box-shadow: inset 0 0 10px rgba(0, 255, 0, 1);
    opacity: 0;
  }

  &:hover::after {
    animation: ${animate} 0.5s linear infinite;
  }
`;
