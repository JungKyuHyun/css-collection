import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { TooltipWithPortal, TooltipWithPortalProps } from '../components';
import styled from 'styled-components';

export default {
  title: 'jacob-css/Tooltip',
  component: TooltipWithPortal,
  parameters: {
    docs: {
      description: {
        component: 'TooltipWithPortal은 사용자가 요소를 가리 키거나, 초점을 맞추거나, 탭하면 정보 텍스트를 표시합니다.',
      },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        boxSizing: 'border-box',
      } as CSSProperties;

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story<TooltipWithPortalProps> = () => {
  const shortText = "Jacob's playground!";

  return (
    <Container>
      without using external or third party libraries.{' '}
      <TooltipWithPortal contents={shortText}>JACOB CSS</TooltipWithPortal> ...!
    </Container>
  );
};

const Container = styled.div`
  color: white;
  width: 100%;
  text-align: center;
`;

export const WithPortal = Template.bind({});
