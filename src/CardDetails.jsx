import React, { useState } from 'react';
import TransactionHistory from './TransactionHistory';
import CardSecurity from './CardSecurity';

const CardDetails = ({ card, transactions, onClose, isOpen }) => {
  if (!isOpen) return null;

  const cardBalance = card.balance || 5250.00;
  const creditLimit = card.creditLimit || 10000.00;
  const usagePercent = (cardBalance / creditLimit) * 100;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-slate-800 to-slate-700 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">{card.holder}</h2>
            <p className="text-slate-300 text-sm mt-1">{card.number.slice(-4).padStart(4, '•')} ending in {card.number.slice(-4)}</p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Balance & Credit Limit */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Current Balance</p>
              <p className="text-2xl font-bold text-blue-900 mt-2">${cardBalance.toFixed(2)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-xs text-green-600 font-medium uppercase tracking-wide">Credit Limit</p>
              <p className="text-2xl font-bold text-green-900 mt-2">${creditLimit.toFixed(2)}</p>
            </div>
          </div>

          {/* Usage Progress */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-slate-700">Credit Usage</p>
              <p className="text-sm font-bold text-slate-800">{usagePercent.toFixed(1)}%</p>
            </div>
            <div className="w-full bg-slate-300 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all ${
                  usagePercent < 30 ? 'bg-green-500' : usagePercent < 70 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min(usagePercent, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Card Details */}
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">Card Number</span>
              <span className="font-mono font-medium text-slate-900">{card.number}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">Expires</span>
              <span className="font-medium text-slate-900">{card.expiry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">CVV</span>
              <span className="font-mono font-medium text-slate-900">***</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600 text-sm">Status</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">Active</span>
            </div>
          </div>

          {/* Transactions */}
          <TransactionHistory cardId={card.id} transactions={transactions} />

          {/* Security */}
          <CardSecurity card={card} />

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-slate-200">
            <button className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition">
              Edit Card
            </button>
            <button className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition">
              Close Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
