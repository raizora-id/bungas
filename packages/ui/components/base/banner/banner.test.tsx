import React from 'npm:react';
import { render, screen, fireEvent } from 'npm:@testing-library/react';
import { expect, describe, it, vi } from 'npm:vitest';
import { InfoIcon } from 'npm:lucide-react';
import { Banner, BannerIcon, BannerTitle, BannerAction, BannerClose } from './index.tsx';

describe('Banner Component', () => {
  it('renders correctly', () => {
    render(<Banner>Test Banner</Banner>);
    const element = screen.getByText('Test Banner');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Banner className="test-class">Test Banner</Banner>);
    const element = screen.getByText('Test Banner');
    expect(element.closest('div')).toHaveClass('test-class');
  });

  it('applies inset variant correctly', () => {
    render(<Banner inset>Test Banner</Banner>);
    const element = screen.getByText('Test Banner');
    expect(element.closest('div')).toHaveClass('rounded-lg');
  });

  it('doesn\'t render when visible is false', () => {
    render(<Banner visible={false}>Test Banner</Banner>);
    const element = screen.queryByText('Test Banner');
    expect(element).not.toBeInTheDocument();
  });

  it('calls onClose when BannerClose is clicked', () => {
    const onClose = vi.fn();
    render(
      <Banner onClose={onClose}>
        Test Banner
        <BannerClose />
      </Banner>
    );
    
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    
    expect(onClose).toHaveBeenCalled();
  });
});

describe('BannerIcon Component', () => {
  it('renders correctly', () => {
    render(<BannerIcon icon={InfoIcon} data-testid="banner-icon" />);
    const element = screen.getByTestId('banner-icon');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BannerIcon icon={InfoIcon} className="test-class" data-testid="banner-icon" />);
    const element = screen.getByTestId('banner-icon');
    expect(element).toHaveClass('test-class');
  });
});

describe('BannerTitle Component', () => {
  it('renders correctly', () => {
    render(<BannerTitle>Title</BannerTitle>);
    const element = screen.getByText('Title');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BannerTitle className="test-class">Title</BannerTitle>);
    const element = screen.getByText('Title');
    expect(element).toHaveClass('test-class');
  });
});

describe('BannerAction Component', () => {
  it('renders correctly', () => {
    render(<BannerAction>Action</BannerAction>);
    const element = screen.getByText('Action');
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BannerAction className="test-class">Action</BannerAction>);
    const element = screen.getByText('Action');
    expect(element).toHaveClass('test-class');
  });
});