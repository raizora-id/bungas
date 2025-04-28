import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Toggle } from './index.tsx';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Base/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: 'Default Toggle',
  },
};

// Add more stories as needed based on component variants
