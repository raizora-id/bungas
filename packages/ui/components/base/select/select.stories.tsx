import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Select } from './index.tsx';

const meta: Meta<typeof Select> = {
  title: 'Components/Base/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: 'Default Select',
  },
};

// Add more stories as needed based on component variants
