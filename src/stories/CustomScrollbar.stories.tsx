import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomScrollbar } from '../components';

export default {
  title: 'jacob-css/CustomScrollbar',
  component: CustomScrollbar,
  parameters: {
    docs: {
      description: { component: '스크롤을 커스텀하였습니다.' },
    },
  },
} as Meta;

const Template: Story = (args) => <CustomScrollbar {...args} />;

export const BasicCss = Template.bind({});
