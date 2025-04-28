import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Toaster } from './index.tsx';

describe('Toaster Component', () => {
  it('renders correctly', () => {
    render(<Toaster>Test</Toaster>);
    const element = screen.getByText((content, node) => !!node?.textContent?.includes('Test'));
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
