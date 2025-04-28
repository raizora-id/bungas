import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Avatar } from './index.tsx';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Base/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    // Add appropriate props for this component
  },
};

// Add more stories as needed based on component variants
