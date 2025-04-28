import type { Meta, StoryObj } from 'npm:@storybook/react';
import { Breadcrumb } from './index.tsx';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Base/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    children: 'Default Breadcrumb',
  },
};

// Add more stories as needed based on component variants
