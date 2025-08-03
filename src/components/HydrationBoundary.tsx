'use client'

import { useHydration } from '@/hooks/useHydration';
import { ReactNode } from 'react';

interface HydrationBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

/**
 * HydrationBoundary component prevents hydration mismatches by only rendering 
 * children after the component has hydrated on the client side.
 * 
 * Use this component to wrap any content that depends on client-side state
 * (like localStorage, sessionStorage, or browser APIs) that might differ
 * between server and client rendering.
 */
export default function HydrationBoundary({ children, fallback = null }: HydrationBoundaryProps) {
    const isHydrated = useHydration();

    if (!isHydrated) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}