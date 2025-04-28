import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Tabs } from './index.tsx';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Base/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: 'Default Tabs',
  },
};

// Add more stories as needed based on component variants
