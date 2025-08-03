'use client'

import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useCartStore } from '@/storages/useCartStorage'
import { useEffect, useState } from 'react'

export default function CartSidebar() {
  const isOpen = useCartStore((state) => state.isOpen)
  const closeCart = useCartStore((state) => state.closeCart)
  const items = useCartStore((state) => state.items)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeItem = useCartStore((state) => state.removeItem)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)

  const subtotal = getTotalPrice()
  const shipping = 10.00
  const total = subtotal + shipping

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out font-raleway text-base text-gray-800 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-medium font-raleway">Shopping Cart</h2>
          <button 
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-12 font-raleway">
              <p className="text-gray-500 mb-4 text-base font-raleway">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-raleway text-base font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg font-raleway">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yNCAyNEg0MFY0MEgyNFYyNFoiIGZpbGw9IiNEMUQ1REIiLz4KPC9zdmc+'
                      }}
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-medium text-base font-raleway">{item.name}</h3>
                    {item.size && <p className="text-xs text-gray-500 font-raleway">Size: {item.size}</p>}
                    {item.color && <p className="text-xs text-gray-500 font-raleway">Color: {item.color}</p>}
                    <p className="font-medium text-base font-raleway mt-1">${item.price.toFixed(2)}</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 transition-colors duration-200 font-raleway"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-base font-raleway">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 transition-colors duration-200 font-raleway"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors duration-200 font-raleway"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 font-raleway">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="font-raleway">Subtotal:</span>
                <span className="font-raleway">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="font-raleway">Shipping:</span>
                <span className="font-raleway">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2">
                <span className="font-medium text-lg font-raleway">Total:</span>
                <span className="font-medium text-lg font-raleway">${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Proceed to Checkout
            </button>
            
            <button 
              onClick={closeCart}
              className="w-full mt-2 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-raleway text-base font-medium"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}