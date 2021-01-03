import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown } from '../components';
import styled from 'styled-components';

export default {
  title: 'jacob-css/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: '오른쪽 위에 프로필 이미지를 누르면 드롭다운이 나옵니다.',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <>
    <IndicateText>{`Click Here! -->`}</IndicateText>
    <Dropdown {...args} />
  </>
);

const IndicateText = styled.h2`
  color: white;
  position: absolute;
  right: 120px;
  top: 12px;
`;

export const UserInfoDropdown = Template.bind({});
