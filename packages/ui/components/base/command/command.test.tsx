import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Command } from './index.tsx';

describe('Command Component', () => {
  it('renders correctly', () => {
    render(<Command>Test</Command>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
