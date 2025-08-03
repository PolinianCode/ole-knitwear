'use client'

import { useCartStore } from '@/storages/useCartStorage';
import HydrationBoundary from './HydrationBoundary';

function CartBadgeContent() {
    const totalItems = useCartStore((state) => state.getTotalItems());

    if (totalItems <= 0) return null;
    
    return (
        <span className='absolute -right-1 -top-1 bg-black w-5 h-5 rounded-full text-white text-xs font-raleway font-bold flex items-center justify-center'>
            {totalItems}
        </span>
    );
}

export default function CartBadgeClient() {
    return (
        <HydrationBoundary>
            <CartBadgeContent />
        </HydrationBoundary>
    );
}
