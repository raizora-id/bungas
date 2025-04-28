import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'npm:vitest';
import { ChevronUpIcon } from 'npm:lucide-react';
import {
  Pill,
  PillAvatar,
  PillButton,
  PillStatus,
  PillIndicator,
  PillDelta,
  PillIcon,
  PillAvatarGroup
} from './index.tsx';

describe('Pill Component', () => {
  it('renders correctly', () => {
    render(<Pill>Test Pill</Pill>);
    const element = screen.getByText('Test Pill');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Pill className="test-class">Test Pill</Pill>);
    const element = screen.getByText('Test Pill');
    expect(element).toHaveClass('test-class');
  });
});

describe('PillAvatar Component', () => {
  it('renders correctly', () => {
    render(<PillAvatar fallback="AB" alt="Avatar" data-testid="avatar" />);
    const element = screen.getByTestId('avatar');
    expect(element).toBeInTheDocument();
  });

  it('renders fallback content', () => {
    render(<PillAvatar fallback="AB" alt="Avatar" />);
    const fallback = screen.getByText('AB');
    expect(fallback).toBeInTheDocument();
  });
});

describe('PillButton Component', () => {
  it('renders correctly', () => {
    render(<PillButton>Test Button</PillButton>);
    const element = screen.getByText('Test Button');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillButton className="test-class">Test Button</PillButton>);
    const element = screen.getByText('Test Button');
    expect(element).toHaveClass('test-class');
  });
});

describe('PillStatus Component', () => {
  it('renders correctly', () => {
    render(<PillStatus>Active</PillStatus>);
    const element = screen.getByText('Active');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillStatus className="test-class">Active</PillStatus>);
    const element = screen.getByText('Active');
    expect(element).toHaveClass('test-class');
  });
});

describe('PillIndicator Component', () => {
  it('renders correctly', () => {
    render(<PillIndicator data-testid="indicator" />);
    const element = screen.getByTestId('indicator');
    expect(element).toBeInTheDocument();
  });

  it('renders with pulse animation', () => {
    render(<PillIndicator pulse data-testid="indicator" />);
    const spans = screen.getByTestId('indicator').querySelectorAll('span');
    expect(spans.length).toBeGreaterThanOrEqual(2); // At least pulse + indicator
    // The first span (spans[0]) is the pulse animation
    expect(spans[0]).toHaveClass('animate-ping');
  });

  it('applies different variants', () => {
    render(<PillIndicator variant="error" data-testid="indicator" />);
    const spans = screen.getByTestId('indicator').querySelectorAll('span');
    // The second span (spans[1]) is the solid color indicator
    if (spans.length === 2) {
      // pulse=true: spans[1] is the solid indicator
      expect(spans[1]).toHaveClass('bg-rose-500');
    } else if (spans.length === 1) {
      // pulse=false: only the indicator is present
      expect(spans[0]).toHaveClass('bg-rose-500');
    } else {
      throw new Error('Unexpected number of spans in PillIndicator');
    }
  });
});

describe('PillDelta Component', () => {
  it('renders minus icon for zero delta', () => {
    render(<PillDelta delta={0} />);
    // The MinusIcon SVG should have the class 'text-muted-foreground'
    const icon = document.querySelector('svg.text-muted-foreground');
    expect(icon).toBeInTheDocument();
  });

  it('renders up icon for positive delta', () => {
    render(<PillDelta delta={10} />);
    // The ChevronUpIcon SVG should have the class 'text-emerald-500'
    const icon = document.querySelector('svg.text-emerald-500');
    expect(icon).toBeInTheDocument();
  });

  it('renders down icon for negative delta', () => {
    render(<PillDelta delta={-5} />);
    // The ChevronDownIcon SVG should have the class 'text-rose-500'
    const icon = document.querySelector('svg.text-rose-500');
    expect(icon).toBeInTheDocument();
  });
});

describe('PillIcon Component', () => {
  it('renders correctly', () => {
    render(<PillIcon icon={ChevronUpIcon} data-testid="icon" />);
    const element = screen.getByTestId('icon');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<PillIcon icon={ChevronUpIcon} className="test-class" data-testid="icon" />);
    const element = screen.getByTestId('icon');
    expect(element).toHaveClass('test-class');
  });
});

describe('PillAvatarGroup Component', () => {
  it('renders correctly', () => {
    render(
      <PillAvatarGroup>
        <PillAvatar fallback="A" alt="Avatar A" />
        <PillAvatar fallback="B" alt="Avatar B" />
      </PillAvatarGroup>
    );
    
    const fallbacks = screen.getAllByText(/[AB]/);
    expect(fallbacks.length).toBe(2);
  });

  it('applies custom className', () => {
    render(
      <PillAvatarGroup className="test-class">
        <PillAvatar fallback="A" alt="Avatar A" />
      </PillAvatarGroup>
    );
    
    const group = screen.getByText('A').closest('.test-class');
    expect(group).toBeInTheDocument();
  });
});