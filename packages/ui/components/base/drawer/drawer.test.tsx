import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Drawer } from './index.tsx';

describe('Drawer Component', () => {
  it('renders correctly', () => {
    render(<Drawer>Test</Drawer>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
