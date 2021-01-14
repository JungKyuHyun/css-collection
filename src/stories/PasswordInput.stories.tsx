import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { PasswordInput } from '../components';

export default {
  title: 'jacob-css/PasswordInput',
  component: PasswordInput,
  parameters: {
    backgrounds: {
      default: 'whitesmoke',
    },
    docs: {
      description: {
        component: '암호를 입력하는 Input 컴포넌트 입니다. ',
      },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
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

const Template: Story = () => {
  return <PasswordInput />;
};

export const BasicCss = Template.bind({});
