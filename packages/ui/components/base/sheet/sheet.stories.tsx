import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Sheet } from './index.tsx';

const meta: Meta<typeof Sheet> = {
  title: 'Components/Base/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {
    children: 'Default Sheet',
  },
};

// Add more stories as needed based on component variants
