import { MapPin, QrCode, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Deal {
  id: number;
  merchantName: string;
  merchantLogo: string;
  dealTitle: string;
  tagline: string;
  distance: string;
  originalPrice: number;
  discountedPrice: number;
  image: string;
  category: string;
  expiryDate: string;
}

interface DealCardProps {
  deal: Deal;
  onViewQR?: () => void;
}

export function DealCard({ deal, onViewQR }: DealCardProps) {

  // Format expiry date to "Dec 31" format
  const formatExpiryDate = (dateString: string) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    return `${monthName} ${day}`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow flex-shrink-0 w-[280px]">
      {/* Card Header with Logo */}
      <div className="relative h-32 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
        <ImageWithFallback
          src={deal.image}
          alt={deal.dealTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl border-2 border-white">
          {deal.merchantLogo}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-[#0A1F44] mb-1">
            {deal.dealTitle}
          </h3>
          <p className="text-slate-600 text-sm mb-2">
            {deal.tagline}
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <MapPin className="w-3 h-3" />
            <span>{deal.distance}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="relative mb-4 p-3 bg-gradient-to-r from-[#7DD3C0]/10 to-[#7DD3C0]/5 rounded-2xl border border-[#7DD3C0]/20">
          <div className="flex items-center gap-3">
            <div>
              <div className="text-slate-400 text-xs line-through">
                ${deal.originalPrice.toFixed(2)}
              </div>
              <div className="text-[#0A1F44] text-xl">
                ${deal.discountedPrice.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-red-500 text-xs">
            Till {formatExpiryDate(deal.expiryDate)}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex gap-2">
          <button
            onClick={onViewQR}
            className="flex-1 py-3 rounded-2xl bg-white border-2 border-[#7DD3C0] text-[#0A1F44] hover:bg-[#7DD3C0]/10 transition-all flex items-center justify-center gap-2"
          >
            <QrCode className="w-4 h-4" />
            <span className="text-sm">View QR Code</span>
          </button>
          <button
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-[#7DD3C0] to-[#5ab3a0] text-white hover:shadow-md transition-all flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Open in app</span>
          </button>
        </div>
        
      </div>
    </div>
  );
}