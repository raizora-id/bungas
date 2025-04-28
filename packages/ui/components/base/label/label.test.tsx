import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Label } from './index.tsx';

describe('Label Component', () => {
  it('renders correctly', () => {
    render(<Label>Test</Label>);
    const element = screen.getByText('Test');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
