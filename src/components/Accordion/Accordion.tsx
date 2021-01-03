import React, { memo, useState, useCallback, ReactText } from 'react';
import styled, { css } from 'styled-components';

interface AccordionItemProps {
  className?: string;
  label?: ReactText;
}

const AccordionItem = memo<AccordionItemProps>(({ className, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((v) => !v);
  }, []);

  return (
    <>
      <ContentSection className={className} onClick={handleClick}>
        <Label open={isOpen}>{label}</Label>
        <Contents open={isOpen}>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates quae nostrum totam quaerat, commodi asperiores ullam.
            Neque enim beatae, cum, optio, tempora autem est a sint vitae ipsum
            debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos voluptates quae nostrum totam quaerat, commodi asperiores
            ullam. Neque enim beatae, cum, optio, tempora autem est a sint vitae
            ipsum debitis!
          </P>
        </Contents>
      </ContentSection>
    </>
  );
});

export const Accordion = memo(() => {
  const dummyList = [
    'Jacob Accordion One',
    'Jacob Accordion Two',
    'Jacob Accordion Three',
    'Jacob Accordion Four',
  ];

  return (
    <AccordionContainer>
      {dummyList.map((d) => (
        <AccordionItem key={d} label={d} />
      ))}
    </AccordionContainer>
  );
});

const AccordionContainer = styled.div`
  max-width: 600px;
`;

const ContentSection = styled.div`
  position: relative;
  margin: 10px 20px;
  background: white;
`;

const Label = styled.div<{ open: boolean }>`
  position: relative;
  padding: 10px;
  background: cyan;
  font-weight: 600;
  cursor: pointer;

  &::before {
    content: ${(props) => (props.open ? '"-"' : '"+"')};
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    font-size: 1.5em;
  }
`;

const Contents = styled.div<{ open: boolean }>`
  position: relative;
  background: white;
  overflow-y: auto;
  transition: 0.5s;
  height: 0;

  ${(props) =>
    props.open &&
    css`
      height: 100px;
    `}
`;

const P = styled.p`
  padding: 0 8px;
`;
