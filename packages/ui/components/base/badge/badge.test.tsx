import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Badge } from './index.tsx';

describe('Badge Component', () => {
  it('renders correctly', () => {
    render(<Badge>Test</Badge>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
