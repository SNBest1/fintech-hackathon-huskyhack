import { useState } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ProjectionCard() {
  const [loading, setLoading] = useState(false);
  const monthlyProjection = [
    { month: 'Aug', amount: 124, projected: false },
    { month: 'Sep', amount: 130, projected: true },
    { month: 'Oct', amount: 118, projected: true },
    { month: 'Nov', amount: 125, projected: true },
    { month: 'Dec', amount: 135, projected: true },
  ];

  const maxAmount = Math.max(...monthlyProjection.map(d => d.amount));

  const handleViewTrends = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.error('You are not logged in', {
        description: 'Please log in to view annual trends',
      });
    }, 800);
  };

  return (
    <div className="bg-gradient-to-br from-[#0A1F44] to-[#2a4a7b] rounded-3xl p-6 shadow-xl text-white">
      <h3 className="text-white mb-2">
        Keep it up!
      </h3>
      <p className="text-white/80 text-sm mb-5">
        If you continue like this, you'll save around <span className="text-[#7DD3C0]">$1,400</span> this year.
      </p>

      {/* Mini projection chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/20">
        <div className="flex items-end justify-between gap-2 h-24 mb-2">
          {monthlyProjection.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full flex items-end justify-center h-20">
                <div
                  className={`w-full rounded-t-lg transition-all ${
                    data.projected 
                      ? 'bg-gradient-to-t from-white/40 to-white/20 border-dashed border-2 border-white/40' 
                      : 'bg-gradient-to-t from-[#7DD3C0] to-[#7DD3C0]/80'
                  }`}
                  style={{ height: `${(data.amount / maxAmount) * 100}%` }}
                />
              </div>
              <span className="text-xs text-white/70">{data.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs text-white/70 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#7DD3C0] rounded-sm" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white/40 border-2 border-dashed border-white/60 rounded-sm" />
            <span>Projected</span>
          </div>
        </div>
      </div>

      <button 
        onClick={handleViewTrends}
        disabled={loading}
        className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            <span>View Annual Trends</span>
            <ChevronRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}
