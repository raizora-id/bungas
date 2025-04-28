import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { Toast, ToastProvider } from './index.tsx';

describe('Toast Component', () => {
  it('renders correctly', () => {
    render(
      <ToastProvider>
        <Toast>Test Toast</Toast>
      </ToastProvider>
    );
    const element = screen.getByText((content, node) => !!node?.textContent?.includes('Test Toast'));
    expect(element).toBeInTheDocument();
  });
  
  // Add more tests as needed based on component functionality
});
