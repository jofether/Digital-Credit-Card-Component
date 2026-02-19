import React from 'react';

const CardSecurity = ({ card }) => {
  const securityScore = 85; // 0-100
  const lastUsed = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // 2 days ago

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg border border-slate-200 space-y-4">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <span>🔒</span> Security Status
      </h3>

      {/* Security Score */}
      <div className={`p-3 rounded-9999 ${getScoreBgColor(securityScore)}`}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">Security Score</span>
          <span className={`text-lg font-bold ${getScoreColor(securityScore)}`}>{securityScore}/100</span>
        </div>
        <div className="w-full bg-slate-300 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all ${
              securityScore >= 80 ? 'bg-green-600' : securityScore >= 60 ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            style={{ width: `${securityScore}%` }}
          ></div>
        </div>
      </div>

      {/* Security Features */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600">✓</span>
          <span className="text-slate-700">Fraud protection enabled</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600">✓</span>
          <span className="text-slate-700">Two-factor authentication active</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-green-600">✓</span>
          <span className="text-slate-700">Purchase alerts enabled</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-yellow-600">⚠</span>
          <span className="text-slate-700">International transactions limited</span>
        </div>
      </div>

      {/* Last Used */}
      <div className="pt-3 border-t border-slate-200">
        <p className="text-xs text-slate-500">
          Last used: <span className="font-medium text-slate-700">{lastUsed.toLocaleDateString()} at {lastUsed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 pt-2">
        <button className="flex-1 text-xs px-3 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition font-medium">
          Lock Card
        </button>
        <button className="flex-1 text-xs px-3 py-2 border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition font-medium">
          View Alerts
        </button>
      </div>
    </div>
  );
};

export default CardSecurity;
