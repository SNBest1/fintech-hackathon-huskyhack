import { ArrowLeft, TrendingUp } from 'lucide-react';
import { NudgeAvatar } from './NudgeAvatar';
import { SavingsChart } from './SavingsChart';
import { CategoryBreakdownCard } from './CategoryBreakdownCard';
import { InsightCard } from './InsightCard';
import { ProjectionCard } from './ProjectionCard';

interface SavingsBreakdownProps {
  onBack: () => void;
}

export function SavingsBreakdown({ onBack }: SavingsBreakdownProps) {
  const categories = [
    { icon: '☕', name: 'Food & Drinks', amount: 48, color: '#7DD3C0', percentage: 39 },
    { icon: '✈️', name: 'Travel', amount: 32, color: '#5ab3a0', percentage: 26 },
    { icon: '💳', name: 'Loans & Payments', amount: 20, color: '#0A1F44', percentage: 16 },
    { icon: '🛍️', name: 'Shopping', amount: 24, color: '#2a4a7b', percentage: 19 },
  ];

  const advice = [
    "Use your Sound Credit Union credit card to earn 1 point on every dollar you spend!",
    "You have 20,000 points saved up that can be redeemed for $20 added to your account.",
    "Redeem your points for travel, merchandise, gift cards, and more!"
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gradient-to-br from-[#0A1F44] via-[#1a3a6b] to-[#2a4a7b] px-6 pt-6 pb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white mb-6 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </button>
        
        <h1 className="text-white mb-2">
          Your Savings Breakdown
        </h1>
        <p className="text-[#7DD3C0] text-sm">
          Here's how Nudge helped you save this month.
        </p>
      </div>

      {/* Summary Card */}
      <div className="px-6 -mt-4 mb-6">
        <div className="bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] rounded-3xl p-6 shadow-xl">
          <p className="text-white/90 text-sm mb-2">Total Saved This Month</p>
          <div className="flex items-end justify-between">
            <h2 className="text-white text-5xl">
              $124.50
            </h2>
            <div className="flex items-center gap-1 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-white text-sm">+3.5%</span>
            </div>
          </div>
          <p className="text-white/80 text-sm mt-3">
            vs. last month
          </p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[#0A1F44] mb-4">
          Savings Over Time
        </h2>
        <SavingsChart />
        <p className="text-slate-600 text-sm mt-4 px-2">
          💡 Consistent coffee savings helped you stay $20 above your goal.
        </p>
      </div>

      {/* Category Breakdown Section */}
      <div className="px-6 mb-6">
        <h2 className="text-[#0A1F44] mb-4">
          Category Breakdown
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <CategoryBreakdownCard key={category.name} category={category} />
          ))}
        </div>
      </div>

      {/* Nudge Advice Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="scale-75">
            <NudgeAvatar />
          </div>
          <h2 className="text-[#0A1F44]">
            Nudge Advice
          </h2>
        </div>
        <div className="space-y-3">
          {advice.map((adviceItem, index) => (
            <InsightCard key={index} insight={adviceItem} />
          ))}
        </div>
      </div>

      {/* Future Projection Section */}
      <div className="px-6 pb-6">
        <ProjectionCard />
      </div>
    </div>
  );
}