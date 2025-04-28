import type { Meta, StoryObj } from 'npm:@storybook/react';
import { AlertDialog } from './index.tsx';

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/Base/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  args: {
    children: 'Default AlertDialog',
  },
};

// Add more stories as needed based on component variants
