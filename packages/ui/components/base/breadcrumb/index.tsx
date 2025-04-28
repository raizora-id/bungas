import * as React from 'react';

import { cn } from '../../../lib/utils.js';
import { Slot } from '@radix-ui/react-slot';

import { ChevronRight, MoreHorizontal } from 'npm:lucide-react';

const Breadcrumb: React.FC<React.ComponentPropsWithoutRef<'nav'> & { separator?: React.ReactNode }> = React.forwardRef(
    ({ ...props }, ref) => <nav ref={ref} aria-label='breadcrumb' {...props} />
) as unknown as React.FC<React.ComponentPropsWithoutRef<'nav'> & { separator?: React.ReactNode }>;
Breadcrumb.displayName = 'Breadcrumb';

const BreadcrumbList: React.FC<React.ComponentPropsWithoutRef<'ol'>> = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
    ({ className, ...props }, ref) => (
        <ol
            ref={ref}
            className={cn(
                'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
                className
            )}
            {...props}
        />
    )
) as unknown as React.FC<React.ComponentPropsWithoutRef<'ol'>>;
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem: React.FC<React.ComponentPropsWithoutRef<'li'>> = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
    ({ className, ...props }, ref) => (
        <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
    )
) as unknown as React.FC<React.ComponentPropsWithoutRef<'li'>>;
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink: React.FC<React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }> = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & {
        asChild?: boolean;
    }
>(({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';

    return <Comp ref={ref} className={cn('transition-colors hover:text-foreground', className)} {...props} />;
}) as unknown as React.FC<React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }>;
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage: React.FC<React.ComponentPropsWithoutRef<'span'>> = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
    ({ className, ...props }, ref) => (
        <span
            ref={ref}
            role='link'
            aria-disabled='true'
            aria-current='page'
            className={cn('font-normal text-foreground', className)}
            {...props}
        />
    )
) as unknown as React.FC<React.ComponentPropsWithoutRef<'span'>>;
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator: React.FC<React.ComponentProps<'li'>> = ({ children, className, ...props }) => (
    <li role='presentation' aria-hidden='true' className={cn('[&>svg]:h-3.5 [&>svg]:w-3.5', className)} {...props}>
        {children ?? <ChevronRight />}
    </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis: React.FC<React.ComponentProps<'span'>> = ({ className, ...props }) => (
    <span
        role='presentation'
        aria-hidden='true'
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}>
        <MoreHorizontal className='size-4' />
        <span className='sr-only'>More</span>
    </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
    BreadcrumbEllipsis
};
