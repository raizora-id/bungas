import React from 'npm:react';
import { render, screen } from 'npm:@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Calendar } from './index.tsx';

describe('Calendar Component', () => {
  it('renders correctly', () => {
    // Simply check that the calendar renders without error
    render(<Calendar mode="single" />);
    expect(true).toBeTruthy();
  });
  
  // Add more tests as needed based on component functionality
});
