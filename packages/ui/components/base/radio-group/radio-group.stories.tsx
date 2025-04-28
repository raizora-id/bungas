import type { Meta, StoryObj } from 'npm:@storybook/react';
import { RadioGroup } from './index.tsx';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Base/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    children: 'Default RadioGroup',
  },
};

// Add more stories as needed based on component variants
