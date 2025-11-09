import { ChevronRight } from 'lucide-react';

export function MonthlySavingsCard({ onViewBreakdown }: { onViewBreakdown: () => void }) {
  const savingsData = [
    { category: 'Food', amount: 45.50, color: '#7DD3C0' },
    { category: 'Travel', amount: 52.00, color: '#5ab3a0' },
    { category: 'Subscriptions', amount: 27.00, color: '#0A1F44' },
  ];

  const totalSavings = savingsData.reduce((sum, item) => sum + item.amount, 0);
  const maxAmount = Math.max(...savingsData.map(item => item.amount));

  return (
    <div className="bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] rounded-3xl p-5 shadow-lg text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-white/90 text-sm mb-1">This Month's Savings</p>
          <h3 className="text-3xl">
            🎉 ${totalSavings.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Mini Chart Preview */}
      <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
        {savingsData.map((item) => (
          <div key={item.category} className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/90">{item.category}</span>
              <span>${item.amount.toFixed(2)}</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${(item.amount / maxAmount) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={onViewBreakdown}
        className="w-full mt-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-sm flex items-center justify-center gap-1"
      >
        View Breakdown
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}