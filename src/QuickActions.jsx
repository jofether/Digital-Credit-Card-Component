import React from 'react';

const QuickActions = () => {
  const actions = [
    { icon: '💸', label: 'Send Money', color: 'bg-blue-500', action: 'send' },
    { icon: '📊', label: 'View Statement', color: 'bg-green-500', action: 'statement' },
    { icon: '🔔', label: 'Notifications', color: 'bg-orange-500', action: 'notifications' },
    { icon: '⚙️', label: 'Settings', color: 'bg-purple-500', action: 'settings' },
  ];

  const handleAction = (action) => {
    console.log(`Action triggered: ${action}`);
  };

  return (
    <div className="mb-12">
      <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <button
            key={action.action}
            onClick={() => handleAction(action.action)}
            className="p-4 rounded-lg bg-white border border-slate-200 hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center gap-3"
          >
            <span className="text-2xl">{action.icon}</span>
            <span className="text-sm font-medium text-slate-700 text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
