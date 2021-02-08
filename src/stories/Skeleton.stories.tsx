import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton, Skeleton2 } from '../components';

export default {
  title: 'jacob-css/Skeleton',
  component: Skeleton,
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
  parameters: {
    docs: {
      description: {
        component: '데이터가 로드되기 전에 미리 보기를 표시하여 로드시간에 대한 불만을 줄입니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <Skeleton {...args} />;

const Template2: Story = (args) => <Skeleton2 {...args} />;

export const style1 = Template.bind({});

export const style2 = Template2.bind({});
