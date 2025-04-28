import React from 'react';

// Mock ResizeObserver for jsdom
global.ResizeObserver = global.ResizeObserver || class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Slider } from './index.tsx';

describe('Slider Component', () => {
  it('renders correctly', () => {
    render(<Slider data-testid="slider" />);
    const element = screen.getByTestId('slider');
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
