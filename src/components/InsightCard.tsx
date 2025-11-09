import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface InsightCardProps {
  insight: string;
}

export function InsightCard({ insight }: InsightCardProps) {
  const [loading, setLoading] = useState(false);
  const hasAction = insight.includes('—');
  const [text, action] = hasAction ? insight.split('—').map(s => s.trim()) : [insight, null];

  const handleAction = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.error('You are not logged in', {
        description: 'Please log in to set goals',
      });
    }, 800);
  };

  return (
    <div className="bg-gradient-to-br from-[#7DD3C0]/10 to-[#7DD3C0]/5 rounded-2xl p-4 border border-[#7DD3C0]/30">
      <div className="flex gap-3">
        <div className="flex-shrink-0 mt-0.5">
          <Sparkles className="w-5 h-5 text-[#7DD3C0]" />
        </div>
        <div className="flex-1">
          <p className="text-[#0A1F44] text-sm mb-2">
            {text}
          </p>
          {action && (
            <button 
              onClick={handleAction}
              disabled={loading}
              className="px-4 py-2 bg-gradient-to-r from-[#7DD3C0] to-[#5ab3a0] text-white rounded-xl text-sm hover:shadow-md transition-shadow flex items-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>{action}</span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
