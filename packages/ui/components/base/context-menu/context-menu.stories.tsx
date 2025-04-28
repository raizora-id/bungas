import type { Meta, StoryObj } from 'npm:@storybook/react';
import { ContextMenu } from './index.tsx';

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/Base/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    children: 'Default ContextMenu',
  },
};

// Add more stories as needed based on component variants
