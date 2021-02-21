import React from 'react';
import { Meta, Story } from '@storybook/react';
import { BasicScene, BasicScene2, BasicScene3 } from '../../components';

export default {
  title: 'threejs/BasicScene',
  component: BasicScene,
  parameters: {
    docs: {
      description: { component: 'threejs에서 제공하는 기본 예제' },
    },
  },
} as Meta;

const Template: Story = (args) => <BasicScene {...args} />;

const Template2: Story = (args) => <BasicScene2 {...args} />;

const Template3: Story = (args) => (
  <p style={{ color: 'white', padding: '16px' }}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque nisi aliquid quisquam, quibusdam incidunt
    sint quis ad eos, atque, nesciunt ea! Earum pariatur ducimus beatae, consequatur quisquam dolore natus!
    <BasicScene3 {...args} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat repudiandae nesciunt eos
    necessitatibus, quod porro ad quam debitis placeat nihil, quia doloribus distinctio provident voluptate vel neque
    dolor deserunt consequatur. Reprehenderit, voluptatum tempore. Ducimus deleniti, qui labore natus molestiae
    similique pariatur veniam dicta dolores in, eveniet est molestias. Ex dolorem accusamus nisi deserunt ducimus
    quisquam modi optio, voluptatum distinctio soluta, ratione quas velit laborum voluptate suscipit aliquam dolores,
    doloremque quo repellat error labore autem? Distinctio, laborum, cumque reiciendis mollitia ex odio, unde
    consectetur quidem amet sit vero quo? Fugit pariatur laboriosam, provident magni placeat eos vero amet veniam
    temporibus cum eligendi expedita laudantium, necessitatibus commodi! Dolorem nesciunt officia quod facilis impedit
    ab molestias voluptas, pariatur assumenda doloribus atque qui quam dolorum laborum in quis sint eum! Corrupti sed
    accusamus id possimus delectus quod ea dolorem molestiae modi porro tempore repudiandae tempora veniam, repellat
    rerum autem blanditiis? Dolorum maxime molestiae, possimus blanditiis asperiores sunt, eos rem cum explicabo atque
    corrupti corporis, consectetur officia nemo incidunt porro amet iste! Incidunt veniam corrupti hic placeat nam,
    doloribus perferendis at? Cupiditate animi culpa molestiae rem officiis. Aperiam laudantium vel quas itaque velit
    aspernatur debitis, quasi quibusdam temporibus, dignissimos, repellat hic voluptate totam atque illum?
  </p>
);

export const BasicCss = Template.bind({});
export const Improve1BasicCss = Template2.bind({});
export const Improve2BasicCss = Template3.bind({});
