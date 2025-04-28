import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Drawer } from './index.tsx';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Base/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    children: 'Default Drawer',
  },
};

// Add more stories as needed based on component variants
