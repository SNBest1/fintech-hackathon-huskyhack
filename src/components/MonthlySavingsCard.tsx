import { ChevronRight } from 'lucide-react';

interface MonthlySavingsCardProps {
  onViewBreakdown: () => void;
  showCategories?: boolean;
}

export function MonthlySavingsCard({ onViewBreakdown, showCategories = true }: MonthlySavingsCardProps) {
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
          <p className="text-white/90 text-2xl mb-1">You Saved</p>
          <h3 className="text-3xl">
            🎉 ${totalSavings.toFixed(2)}
          </h3>
        </div>
      </div>

      {/* Mini Chart Preview */}
      {showCategories && (
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
      )}

      <button 
        onClick={onViewBreakdown}
        className={`w-full py-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors text-sm flex items-center justify-center gap-1 ${showCategories ? 'mt-4' : ''}`}
      >
        View Breakdown
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}