import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Slider } from './index.tsx';

const meta: Meta<typeof Slider> = {
  title: 'Components/Base/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    children: 'Default Slider',
  },
};

// Add more stories as needed based on component variants
