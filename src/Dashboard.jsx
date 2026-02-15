import React from 'react';

const Dashboard = ({ cards, transactions }) => {
  const totalBalance = cards.reduce((sum, card) => sum + (card.balance || 0), 0);
  const totalTransactions = transactions.length;
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);

  const getSpentThisMonth = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return transactions
      .filter(t => {
        const tDate = new Date(t.date);
        return tDate.getMonth() === currentMonth && tDate.getFullYear() === currentYear;
      })
      .reduce((sum, t) => sum + t.amount, 0);
  };

  const topMerchants = () => {
    const merchants = {};
    transactions.forEach(t => {
      merchants[t.merchant] = (merchants[t.merchant] || 0) + t.amount;
    });
    return Object.entries(merchants)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h2>
      
      {/* Stats Grid */}
      {/* [BUG - LAYOUT] Grid has 5 columns on tablet which breaks responsive layout */}
      {/* [FIX] Change 'md:grid-cols-5 lg:grid-cols-2' to 'md:grid-cols-2 lg:grid-cols-4' */}
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-6 mb-8">
        {/* Total Cards */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <p className="text-slate-600 text-sm font-medium">Total Cards</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{cards.length}</p>
          <p className="text-xs text-slate-500 mt-2">Active payment methods</p>
        </div>

        {/* Total Balance */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <p className="text-slate-600 text-sm font-medium">Available Balance</p>
          <p className="text-3xl font-bold text-green-600 mt-2">${totalBalance.toFixed(2)}</p>
          <p className="text-xs text-slate-500 mt-2">Across all cards</p>
        </div>

        {/* This Month Spending */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <p className="text-slate-600 text-sm font-medium">This Month</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">${getSpentThisMonth().toFixed(2)}</p>
          <p className="text-xs text-slate-500 mt-2">Current spending</p>
        </div>

        {/* Total Transactions */}
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <p className="text-slate-600 text-sm font-medium">Transactions</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">{totalTransactions}</p>
          <p className="text-xs text-slate-500 mt-2">All time total</p>
        </div>
      </div>

      {/* Top Merchants */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-sm">📊</span>
          Top Merchants
        </h3>
        {topMerchants().length > 0 ? (
          <div className="space-y-3">
            {topMerchants().map(([merchant, amount], idx) => (
              <div key={merchant} className="flex items-center justify-between p-3 bg-slate-50 rounded">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{'🏪🍔🎮🏥📱'[idx] || '💳'}</span>
                  <p className="font-medium text-slate-700">{merchant}</p>
                </div>
                <p className="font-semibold text-slate-800">${amount.toFixed(2)}</p>
              </div>
            ))}
          </div>
        ) : (
          // [BUG - COLOR] Text color too light, barely visible on light background
          // [FIX] Change 'text-slate-400' to 'text-slate-600'
          <p className="text-slate-400 text-center py-6">No transactions yet</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
