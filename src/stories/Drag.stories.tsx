import React, { CSSProperties, useCallback, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DragItemList } from '../components';
import styled from 'styled-components';

export default {
  title: 'jacob-css/Drag',
  component: DragItemList,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'auto',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    docs: {
      description: {
        component: 'Drag를 조작하는 기초를 제공합니다.',
      },
    },
  },
} as Meta;

const Template: Story = () => {
  const [options, setOption] = useState([
    { label: 'jacob one', value: 'jacob 1' },
    { label: 'jacob two', value: 'jacob 2' },
    { label: 'jacob three', value: 'jacob 3' },
    { label: 'jacob four', value: 'jacob 4' },
    { label: 'jacob five', value: 'jacob 5' },
  ]);
  const [isReset, setIsReset] = useState(false);

  const handleChange = useCallback((newOptions) => {
    setOption(newOptions);
  }, []);

  const handleResetClick = useCallback(() => {
    setIsReset(true);

    setTimeout(() => {
      setIsReset(false);
    }, 1000);
  }, []);

  return (
    <>
      <WarningText>In a production environment, use third-party libraries.</WarningText>

      <Container>
        <Title>Drag & Drop</Title>
        <SubTitle>Simple React Drag and Drop without using external or third party libraries.</SubTitle>
        <DragItemList options={options} onChange={handleChange} isReset={isReset} />
        <ResetButton onClick={handleResetClick}>Reset</ResetButton>
      </Container>
      <br />
      <Container>
        <Title>Currnet Options</Title>
        <SubTitle>{JSON.stringify(options).replace(/},/g, '},\n').replace(/","/g, '", "')}</SubTitle>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: whitesmoke;
  padding: 12px 24px;
  max-width: 480px;
  width: 100%;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
`;

const Title = styled.h2`
  color: black;
  font-weight: 600;
  margin: 0;
`;

const SubTitle = styled.p`
  color: gray;
  margin: 8px 0 16px;
  white-space: pre-line;
`;

const WarningText = styled.span`
  position: absolute;
  top: 4px;
  left: 8px;
  color: orange;

  &::before {
    content: '* ';
  }
`;

const ResetButton = styled.button`
  text-transform: uppercase;
  color: whitesmoke;
  background: black;
  position: absolute;
  top: 12px;
  right: 16px;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const BasicCss = Template.bind({});
