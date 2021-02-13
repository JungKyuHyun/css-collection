import React, { CSSProperties } from 'react';
import { Meta, Story } from '@storybook/react';
import { Menu } from '../components';
import dummyData from './dummy/dummyData';

export default {
  title: 'jacob-css/Menu',
  component: Menu,
  decorators: [
    (Story) => {
      const style = {
        display: 'flex',
        padding: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
        height: '100vh',
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
      description: { component: '리스트를 클릭했을때 나오는 메뉴.' },
    },
  },
} as Meta;

const Template: Story = () => {
  return (
    <>
      <h2 style={{ color: 'white', borderRight: '1px solid white', height: '50%', padding: '20px' }}>Context Menu</h2>
      <Menu list={dummyData} />
    </>
  );
};

export const ContextMenu = Template.bind({});
