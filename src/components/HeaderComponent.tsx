'use client'

import {GlobeAltIcon, ShoppingBagIcon, ChevronDownIcon} from '@heroicons/react/24/outline'
import { useState } from 'react';

const currencies = ["EUR", "PLN", "UAH"]
const languages = ["EN", "PL", "UA"]

export default function HeaderComponent() {

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const [currency, setCurrency] = useState('PLN')
    const cart_amount = 2

    const selectedCurrency = "PLN"
    const selectedLanguage = "PL"


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
                    {/* Middle block - Logotype */}
                    <div className="flex justify-center">
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

                        {/* currency drop down menu */}
                        <div 
                            className='relative group'
                            onMouseEnter={() => handleMouseEnter("currency")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className='flex items-center space-x-1 text-gray-700 hover:text-black transition-colors duration-200'>
                                <span className='text-sm font-semibold'>{currency}</span>
                                <ChevronDownIcon className='h-4 w-4' />
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
                                <span className='text-sm font-semibold'>{selectedLanguage}</span>
                                <ChevronDownIcon className='h-4 w-4' />
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
                                        onClick={() => setCurrency(lang as any)}
                                        className={`block w-full text-left px-3 py-2 text-sm transition-colors duration-150 font-medium ${
                                            currency === lang 
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
            </div>
        </header>
    )
}