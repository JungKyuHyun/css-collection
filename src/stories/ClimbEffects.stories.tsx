import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { ClimbEffects } from '../components';

export default {
  title: 'jacob-css/ClimbEffects',
  component: ClimbEffects,
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
        component: '보이지 않는 영역을 힘겹게 개척하는 네온사인 사각형입니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => <ClimbEffects {...args} />;

export const BasicCss = Template.bind({});
BasicCss.args = {};
