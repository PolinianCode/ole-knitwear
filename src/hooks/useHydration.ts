import { useEffect, useState } from 'react';

/**
 * Custom hook to handle hydration state
 * Prevents hydration mismatches by ensuring components only render client-specific content after hydration
 */
export function useHydration() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return isHydrated;
}