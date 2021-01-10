import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Timeline } from '../components';

export default {
  title: 'jacob-css/Timeline',
  component: Timeline,
  parameters: {
    docs: {
      description: { component: 'Timeline은 이벤트 목록이 시간순으로 표시됩니다.' },
    },
  },
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        flexDirection: 'column',
        top: '180px',
        position: 'absolute',
        left: 0,
        right: 0,
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
} as Meta;

const Template: Story = (args) => <Timeline {...args} />;

export const BasicCss = Template.bind({});
