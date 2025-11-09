import { ChevronRight } from 'lucide-react';

interface Tip {
  id: number;
  icon: string;
  text: string;
  action: string;
}

interface TipCardProps {
  tip: Tip;
}

export function TipCard({ tip }: TipCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#7DD3C0]/10 to-[#7DD3C0]/5 rounded-2xl p-4 border border-[#7DD3C0]/20 hover:border-[#7DD3C0]/40 transition-all">
      <div className="flex gap-3">
        <div className="text-2xl flex-shrink-0">{tip.icon}</div>
        <div className="flex-1">
          <p className="text-[#0A1F44] text-sm mb-3">
            {tip.text}
          </p>
          <button className="flex items-center gap-1 text-[#0A1F44] text-sm hover:gap-2 transition-all">
            <span>{tip.action}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
