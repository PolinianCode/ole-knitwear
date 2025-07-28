'use client'

import SliderComponent from "@/components/SliderComponent"
import AboutUsComponent from "@/components/AboutUsComponent";
import ProductCard from "@/components/ProductCard";
import SectionLineComponent from "@/components/SectionLineComponent";
import GalleryComponent from "@/components/GalleryComponent";

export default function HomePage() {
    return (
        <div>
            <SliderComponent />
            <SectionLineComponent  title="FEATURE" />
            <GalleryComponent />
            <AboutUsComponent />
        </div>
    )
}