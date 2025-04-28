import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Checkbox } from './index.tsx';

describe('Checkbox Component', () => {
  it('renders correctly', () => {
    render(<Checkbox>Test</Checkbox>);
    // Use a flexible matcher for split/wrapped text
    const element = screen.getByText((_content, node) => node?.textContent?.includes('Test'));
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
