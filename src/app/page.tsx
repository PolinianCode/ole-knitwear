'use client'

import SliderComponent from "@/components/SliderComponent"
import AboutUsComponent from "@/components/AboutUsComponent";
import SectionLineComponent from "@/components/SectionLineComponent";
import GalleryComponent from "@/components/GalleryComponent";
import { useCartStore } from "@/storages/useCartStorage";
import CartSidebar from "@/components/CartSidebar";

export default function HomePage() {
    const addItem = useCartStore((state) => state.addItem)
    
    const addTestItem = () => {
        addItem({
            id: `test-${Date.now()}`,
            name: "Test Wool Cardigan",
            price: 89.99,
            image: "/images/boleros.jpg",
            size: "M",
            color: "Beige"
        })
    }
    
    return (
        <div>
            <SliderComponent />
            
            {/* Test button for cart */}
            <div className="text-center py-8">
                <button 
                    onClick={addTestItem}
                    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                    Add Test Item to Cart
                </button>
            </div>
            
            <SectionLineComponent  title="FEATURE" />
            <GalleryComponent />
            <SectionLineComponent />
            <AboutUsComponent />
            <CartSidebar />
        </div>
    )
}