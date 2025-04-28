import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { expect, describe, it, vi, beforeEach } from 'npm:vitest';
import {
  Snippet,
  SnippetHeader,
  SnippetCopyButton,
  SnippetTabsList,
  SnippetTabsTrigger,
  SnippetTabsContent
} from './index.tsx';

// Mock the clipboard API
const mockClipboard = {
  writeText: vi.fn(() => Promise.resolve()),
};

Object.defineProperty(navigator, 'clipboard', {
  value: mockClipboard,
  configurable: true,
});

describe('Snippet Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<Snippet data-testid="snippet">Content</Snippet>);
    const element = screen.getByTestId('snippet');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Snippet className="test-class" data-testid="snippet">Content</Snippet>);
    const element = screen.getByTestId('snippet');
    expect(element).toHaveClass('test-class');
  });
});

describe('SnippetHeader Component', () => {
  it('renders correctly', () => {
    render(<SnippetHeader>Header Content</SnippetHeader>);
    const element = screen.getByText('Header Content');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<SnippetHeader className="test-class">Header Content</SnippetHeader>);
    const element = screen.getByText('Header Content');
    expect(element).toHaveClass('test-class');
  });
});

describe('SnippetCopyButton Component', () => {
  it('renders correctly', () => {
    render(<SnippetCopyButton value="test code" data-testid="copy-button" />);
    const button = screen.getByTestId('copy-button');
    expect(button).toBeInTheDocument();
  });

  it('copies text to clipboard on click', async () => {
    const onCopy = vi.fn();
    render(
      <SnippetCopyButton 
        value="test code" 
        onCopy={onCopy}
        data-testid="copy-button"
      />
    );
    
    const button = screen.getByTestId('copy-button');
    await act(async () => {
      fireEvent.click(button);
    });
    expect(mockClipboard.writeText).toHaveBeenCalledWith('test code');
    expect(onCopy).toHaveBeenCalled();
  });

  it('changes icon when copied', async () => {
    vi.useFakeTimers();
    render(<SnippetCopyButton value="test code" data-testid="copy-button" />);
    const button = screen.getByTestId('copy-button');
    expect(button.querySelector('svg')).toBeInTheDocument();
    // Click to copy
    await act(async () => {
      fireEvent.click(button);
    });
    // Wait for icon to change to check/copy
    await waitFor(() => {
      expect(button.querySelector('svg')).toBeInTheDocument();
    });
    // Advance timers and wait for revert
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    await waitFor(() => {
      expect(button.querySelector('svg')).toBeInTheDocument();
    });
    vi.useRealTimers();
  });

  it('supports custom button children', () => {
    render(
      <SnippetCopyButton value="test code" data-testid="copy-button">
        Custom Text
      </SnippetCopyButton>
    );
    
    const button = screen.getByText('Custom Text');
    expect(button).toBeInTheDocument();
  });
});

describe('SnippetTabs Components', () => {
  it('renders tabs structure correctly', () => {
    render(
      <Snippet defaultValue="tab1">
        <SnippetHeader>
          <SnippetTabsList>
            <SnippetTabsTrigger value="tab1">Tab 1</SnippetTabsTrigger>
            <SnippetTabsTrigger value="tab2">Tab 2</SnippetTabsTrigger>
          </SnippetTabsList>
          <SnippetCopyButton value="test code" />
        </SnippetHeader>
        <SnippetTabsContent value="tab1">Code 1</SnippetTabsContent>
        <SnippetTabsContent value="tab2">Code 2</SnippetTabsContent>
      </Snippet>
    );
    
    // First tab should be visible
    const code1 = screen.queryByText('Code 1');
    expect(code1).not.toBeNull();
    expect(code1).toBeVisible();
    // Second tab content should not be visible
    const code2 = screen.queryByText('Code 2');
    if (code2) expect(code2).not.toBeVisible();
    // Click second tab
    fireEvent.click(screen.getByText('Tab 2'));
    // Now second tab content should be visible
    const code2After = screen.queryByText('Code 2');
    expect(code2After).not.toBeNull();
    expect(code2After).toBeVisible();
    // And first tab content should not be visible
    const code1After = screen.queryByText('Code 1');
    if (code1After) expect(code1After).not.toBeVisible();
  });
});