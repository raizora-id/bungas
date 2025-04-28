'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

export default function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
    return <SessionProvider>{children}</SessionProvider>;
}
