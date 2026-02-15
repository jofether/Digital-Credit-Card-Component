import React, { useState } from 'react';

const TransactionHistory = ({ cardId, transactions }) => {
  const [expanded, setExpanded] = useState(false);
  const cardTransactions = transactions.filter(t => t.cardId === cardId).slice(0, 5);

  const getCategoryColor = (category) => {
    const colors = {
      'Shopping': 'bg-blue-100 text-blue-800',
      'Food': 'bg-orange-100 text-orange-800',
      'Transport': 'bg-green-100 text-green-800',
      'Entertainment': 'bg-purple-100 text-purple-800',
      'Utilities': 'bg-red-100 text-red-800',
      'Health': 'bg-pink-100 text-pink-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex justify-between items-center font-semibold text-slate-700 hover:text-slate-900 transition"
      >
        <span>Recent Transactions ({cardTransactions.length})</span>
        <span className={`transform transition ${expanded ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {expanded && (
        <div className="mt-4 space-y-3 max-h-64 overflow-y-auto">
          {cardTransactions.length > 0 ? (
            cardTransactions.map((transaction) => (
              <div key={transaction.id} className="flex justify-between items-center p-3 bg-white rounded border border-slate-100 hover:shadow-md transition">
                <div className="flex-1">
                  <p className="font-medium text-slate-800">{transaction.merchant}</p>
                  <p className="text-xs text-slate-500">{transaction.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(transaction.category)}`}>
                    {transaction.category}
                  </span>
                  <p className="font-semibold text-slate-800 min-w-[60px] text-right">${transaction.amount.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500 text-sm py-4">No transactions yet</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
