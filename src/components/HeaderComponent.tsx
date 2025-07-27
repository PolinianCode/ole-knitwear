'use client'

import {GlobeAltIcon, ShoppingBagIcon, ChevronDownIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import { useState } from 'react';

const currencies = ["EUR", "PLN", "UAH"]
const languages = ["EN", "PL", "UA"]

const clothCategories = {
  'Clothing': ['Cardigans/Outwear', 'Sweaters/Jumpers', 'Shirts/Tops', 'Pants', 'Dresses', 'Skirts'],
  'Accessories': ['Category 1', 'Category 2', 'Category 3']
};

export default function HeaderComponent() {

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [currency, setCurrency] = useState('PLN')
    const [language, setLanguage] = useState('PL')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const cart_amount = 3

    const handleMouseEnter = (dropdownName: string) => {
        setActiveDropdown(dropdownName)
    }

    const handleMouseLeave = () => {
        setActiveDropdown(null)
    }


    return (
        <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex justify-between items-center h-16">

                    <button
                            className="md:hidden relative w-6 h-6 flex flex-col justify-between items-center"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <Bars3Icon className="w-6 h-6 fill-current stroke-current" />
                    </button>

                    {/* Left Side - Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {Object.entries(clothCategories).map(([category, items]) => (
                        <div
                            key={category}
                            className="relative group"
                            onMouseEnter={() => handleMouseEnter(category)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200 font-medium">
                            <span className="font-raleway font-semibold tracking-wide">{category}</span>
                            <ChevronDownIcon 
                                className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === category ? 'rotate-180' : ''
                                }`} 
                            />
                            </button>
                            
                            {/* Dropdown Menu */}
                            <div className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                            activeDropdown === category 
                                ? 'opacity-100 visible translate-y-0' 
                                : 'opacity-0 invisible -translate-y-2'
                            }`}>
                            <div className="py-2">
                                {items.map((item, index) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-150 font-medium"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    {item}
                                </a>
                                ))}
                            </div>
                            </div>
                        </div>
                        ))}
                    </nav>

                    {/* Middle block - Logotype */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="/">
                            <img 
                            src="./images/logotype.png" 
                            alt="Ole knitwear logotype" 
                            width={100}
                            height={50}
                            />
                        </a>
                    </div>

                    {/* Right - Currency, Language, Cart */}
                    <div className="flex items-center space-x-6">

                       <div
                       className='hidden md:flex items-center space-x-4'>
                             {/* currency drop down menu */}
                            <div 
                                className='relative group'
                                onMouseEnter={() => handleMouseEnter("currency")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className='flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200'>
                                    <span className='text-sm font-semibold'>{currency}</span>
                                    <ChevronDownIcon 
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                        activeDropdown === "currency" ? 'rotate-180' : ''
                                        }`} 
                                    />
                                </button>
                                <div className={`absolute top-full right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                                    activeDropdown === 'currency' 
                                    ? 'opacity-100 visible translate-y-0' 
                                    : 'opacity-0 invisible -translate-y-2'
                                }`}>
                                    <div className="py-1">
                                    {currencies.map((currencyOption) => (
                                        <button
                                        key={currencyOption}
                                        onClick={() => setCurrency(currencyOption as any)}
                                        className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-150 font-medium ${
                                            currency === currencyOption 
                                            ? 'text-black bg-gray-50' 
                                            : 'text-gray-600 hover:text-black hover:bg-gray-50'
                                        }`}
                                        >
                                        {currencyOption}
                                        </button>
                                    ))}
                                    </div>
                                </div>
                            </div>

                            {/* Language drop down menu */}
                            <div 
                                className='relative group'
                                onMouseEnter={() => handleMouseEnter("language")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button className='flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200'>
                                    <GlobeAltIcon className='h-4 w-4'/>
                                    <span className='text-sm font-semibold'>{language}</span>
                                    <ChevronDownIcon 
                                        className={`w-4 h-4 transition-transform duration-200 ${
                                        activeDropdown === "language" ? 'rotate-180' : ''
                                    }`} 
                                />
                                </button>
                                <div className={`absolute top-full right-0 mt-2 w-20 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-200 ${
                                    activeDropdown === 'language' 
                                    ? 'opacity-100 visible translate-y-0' 
                                    : 'opacity-0 invisible -translate-y-2'
                                }`}>
                                    <div className="py-1">
                                        {languages.map((lang) => (
                                            <button
                                            key={lang}
                                            onClick={() => setLanguage(lang as any)}
                                            className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-150 font-medium ${
                                                language === lang 
                                                ? 'text-black bg-gray-50' 
                                                : 'text-gray-600 hover:text-black hover:bg-gray-50'
                                            }`}
                                            >
                                            {lang}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                       </div>

                        {/* Cart button */}
                        <button className='relative p-2 text-gray-700 hover:text-black transition-colors duration-200 group'>
                            <ShoppingBagIcon className='w-6 h-6 group-hover:scale-110 transition-transform duration-200'/>
                            {cart_amount >0 && (
                                <span className='absolute -right-1 -top-1 bg-black w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center'>
                                    {cart_amount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-start px-6 py-8 pt-6 animate-[fadeIn_300ms_ease-out_forwards]">
                        <div className='flex items-center justify-between w-full mb-6'>
                            <button
                                className="w-6 h-6 flex items-center justify-center z-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <XMarkIcon className="w-6 h-6 text-black" />
                            </button>

                            <a href="/">
                                <img src="./images/logotype.png" alt="Logo" width={100} height={50} />
                            </a>
                        </div>

                        <nav className="mt-10 flex flex-col items-center gap-6 text-lg font-medium text-gray-800">
                        <a href="#" className="hover:text-black transition-colors duration-200">Clothing</a>
                        <a href="#" className="hover:text-black transition-colors duration-200">Accessories</a>

                        <a href="#" className="hover:text-black transition-colors duration-200">About</a>
                        <a href="#" className="hover:text-black transition-colors duration-200">Contact</a>
                        </nav>
                    </div>
                )}

            </div>
        </header>
    )
}