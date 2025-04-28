import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Pagination } from './index.tsx';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Base/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    children: 'Default Pagination',
  },
};

// Add more stories as needed based on component variants
