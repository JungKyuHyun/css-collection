import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip } from '../components';

export default {
  title: 'jacob-css/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component: 'Tooltip은 사용자가 요소를 가리 키거나, 초점을 맞추거나, 탭하면 정보 텍스트를 표시합니다.',
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

const Template: Story = (args) => <Tooltip {...args} />;

export const BasicCss = Template.bind({});
