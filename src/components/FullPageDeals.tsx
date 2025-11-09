import { ArrowLeft, MapPin, QrCode, Clock, Tag, ExternalLink } from 'lucide-react';
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

interface FullPageDealProps {
  deal: Deal;
  onClose: () => void;
}

export function FullPageDeal({ deal, onClose }: FullPageDealProps) {
  const savings = deal.originalPrice - deal.discountedPrice;
  const savingsPercent = ((savings / deal.originalPrice) * 100).toFixed(0);

  // Format expiry date to "Dec 31, 2025" format
  const formatExpiryDate = (dateString: string) => {
    const [month, day, year] = dateString.split('/');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    return `${monthName} ${day}, ${year}`;
  };

  return (
    <div className="h-full overflow-y-auto bg-white">
      {/* Header with Image */}
      <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-50">
        <ImageWithFallback
          src={deal.image}
          alt={deal.dealTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Back Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-[#0A1F44]" />
        </button>

        {/* Merchant Logo */}
        <div className="absolute bottom-4 left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl border-4 border-white">
          {deal.merchantLogo}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
          <span className="text-[#0A1F44] text-xs">{deal.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 pb-8">
        {/* Merchant Name */}
        <p className="text-[#7DD3C0] text-sm mb-2">{deal.merchantName}</p>
        
        {/* Deal Title */}
        <h1 className="text-[#0A1F44] text-2xl mb-2">
          {deal.dealTitle}
        </h1>
        
        {/* Tagline */}
        <p className="text-slate-600 mb-4">
          {deal.tagline}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-500 mb-6">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{deal.distance}</span>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] rounded-3xl p-6 mb-6 text-white">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-white/80 text-sm mb-1">Regular Price</p>
              <p className="text-2xl line-through opacity-70">
                ${deal.originalPrice.toFixed(2)}
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm mb-1">Your Price</p>
              <p className="text-4xl">
                ${deal.discountedPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span className="text-sm">You save ${savings.toFixed(2)}</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <span className="text-sm">{savingsPercent}% off</span>
            </div>
          </div>
        </div>

        {/* Expiry Info */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <Clock className="w-5 h-5 text-red-500 mt-0.5" />
          <div>
            <p className="text-red-900 text-sm">Deal expires on</p>
            <p className="text-red-700">{formatExpiryDate(deal.expiryDate)}</p>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-gradient-to-br from-slate-50 to-white border-2 border-[#7DD3C0] rounded-3xl p-8 mb-6 flex flex-col items-center">
          <p className="text-[#0A1F44] mb-4 text-sm">Scan at checkout to redeem</p>
          
          {/* Placeholder QR Code */}
          <div className="w-48 h-48 bg-white border-4 border-[#7DD3C0] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <div className="text-center">
              <QrCode className="w-32 h-32 text-[#0A1F44] mx-auto mb-2" />
              <p className="text-[#0A1F44] text-xs">QR Code #{deal.id}</p>
            </div>
          </div>

          <p className="text-slate-500 text-xs text-center">
            Show this QR code to the cashier or merchant
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#7DD3C0] to-[#5ab3a0] text-white hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <ExternalLink className="w-5 h-5" />
            <span>Open in Merchant App</span>
          </button>
          
          <button className="w-full py-4 rounded-2xl bg-white border-2 border-slate-200 text-[#0A1F44] hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Get Directions</span>
          </button>
        </div>

        {/* Terms & Conditions */}
        <div className="mt-6 p-4 bg-slate-50 rounded-2xl">
          <h3 className="text-[#0A1F44] text-sm mb-2">Terms & Conditions</h3>
          <ul className="text-slate-600 text-xs space-y-1">
            <li>• Valid for Sound Credit Union members only</li>
            <li>• Cannot be combined with other offers</li>
            <li>• One-time use per customer</li>
            <li>• Subject to availability</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
