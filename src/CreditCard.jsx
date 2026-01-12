import React, { useState } from 'react';

const CreditCard = ({ card, onDelete, onClick, isFlipped }) => {
  // Detect card brand
  const detectBrand = (number) => {
    const num = number.replace(/\s/g, '');
    if (/^4/.test(num)) return { name: 'Visa', color: 'from-blue-600 to-blue-900' };
    if (/^5[1-5]/.test(num)) return { name: 'Mastercard', color: 'from-red-600 to-orange-900' };
    if (/^3[47]/.test(num)) return { name: 'Amex', color: 'from-green-600 to-teal-900' };
    if (/^6(?:011|5)/.test(num)) return { name: 'Discover', color: 'from-orange-600 to-yellow-900' };
    return { name: 'Card', color: 'from-purple-600 to-indigo-900' };
  };

  const brand = detectBrand(card.number);
  const lastFourDigits = card.number.slice(-4);
  const maskNumber = card.number.slice(0, -4).replace(/\d/g, '•') + card.number.slice(-4);

  return (
    <div className="relative w-96 h-60 cursor-pointer perspective" onClick={onClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          isFlipped ? 'rotateY-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${brand.color} rounded-2xl shadow-2xl relative overflow-hidden text-white transition-all duration-300 hover:shadow-3xl`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>

          {/* Brand Name */}
          <div className="absolute top-6 right-8 text-sm font-bold opacity-75">{brand.name}</div>

          {/* EMV Chip */}
          <div className="absolute top-8 left-8 w-12 h-10 bg-yellow-200 rounded-md border border-yellow-300 overflow-hidden opacity-90 shadow-sm flex flex-col justify-between p-px">
            <div className="w-full h-px bg-yellow-500 mt-2"></div>
            <div className="w-full h-px bg-yellow-500 mb-2"></div>
            <div className="absolute top-0 left-1/2 h-full w-px bg-yellow-500 transform -translate-x-1/2"></div>
          </div>

          {/* Contactless Icon */}
          <div className="absolute top-8 right-8">
            <svg className="w-8 h-8 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
            </svg>
          </div>

          {/* Card Number */}
          <div className="absolute top-24 left-8 right-8">
            <p className="text-2xl font-mono tracking-widest drop-shadow-md">{maskNumber}</p>
          </div>

          {/* Card Holder & Expiry */}
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div>
              <p className="text-xs opacity-75 uppercase tracking-wider mb-1">Card Holder</p>
              <p className="font-bold tracking-wide uppercase">{card.holder || 'Card Holder'}</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-75 uppercase tracking-wider mb-1">Expires</p>
              <p className="font-bold tracking-wide">{card.expiry || 'MM/YY'}</p>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full bg-gradient-to-br ${brand.color} rounded-2xl shadow-2xl relative overflow-hidden text-white`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Magnetic Strip */}
          <div className="absolute top-8 left-0 right-0 h-12 bg-black opacity-80"></div>

          {/* CVV Section */}
          <div className="absolute bottom-16 right-8 w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
            <div className="text-center">
              <p className="text-xs text-gray-600 font-bold">CVV</p>
              <p className="text-sm text-gray-800 font-mono tracking-widest">{card.cvv || '***'}</p>
            </div>
          </div>

          {/* Signature Area */}
          <div className="absolute bottom-8 left-8 right-12 border-t border-white opacity-50">
            <p className="text-xs text-white opacity-75 mt-2">Authorized Signature</p>
          </div>
        </div>
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute -top-8 right-0 text-red-500 hover:text-red-700 font-bold text-sm"
      >
        ✕ Delete
      </button>
    </div>
  );
};

export default CreditCard;
