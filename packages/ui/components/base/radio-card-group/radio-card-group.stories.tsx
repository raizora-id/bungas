import type { Meta, StoryObj } from 'npm:@storybook/react';
import { RadioCardGroup } from './index.tsx';

const meta: Meta<typeof RadioCardGroup> = {
  title: 'Components/Base/RadioCardGroup',
  component: RadioCardGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioCardGroup>;

export const Default: Story = {
  args: {
    children: 'Default RadioCardGroup',
  },
};

// Add more stories as needed based on component variants
