import type { Meta, StoryObj } from 'npm:@storybook/react';
import { CarouselIndicator } from './index.tsx';

const meta: Meta<typeof CarouselIndicator> = {
  title: 'Components/Base/CarouselIndicator',
  component: CarouselIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselIndicator>;

export const Default: Story = {
  args: {
    children: 'Default CarouselIndicator',
  },
};

// Add more stories as needed based on component variants
