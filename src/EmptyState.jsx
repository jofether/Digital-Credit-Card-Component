import React from 'react';

/**
 * Empty State Component
 * Displayed when there are no cards
 */
const EmptyState = ({ onAddCard }) => {
  return (
    <div className="text-center mb-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-12 border-2 border-dashed border-slate-300">
      <div className="mb-6">
        <span className="text-6xl">💳</span>
      </div>
      <h2 className="text-2xl font-bold text-slate-800 mb-2">No Cards Yet</h2>
      <p className="text-slate-600 mb-6">Start managing your finances by adding your first card</p>
      <button
        onClick={onAddCard}
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition transform hover:scale-105"
      >
        Add Your First Card
      </button>
    </div>
  );
};

export default EmptyState;
