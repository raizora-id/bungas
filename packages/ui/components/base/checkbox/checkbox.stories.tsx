import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Checkbox } from './index.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Base/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: 'Default Checkbox',
  },
};

// Add more stories as needed based on component variants
