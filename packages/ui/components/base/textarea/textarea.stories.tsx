import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Textarea } from './index.tsx';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Base/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    children: 'Default Textarea',
  },
};

// Add more stories as needed based on component variants
