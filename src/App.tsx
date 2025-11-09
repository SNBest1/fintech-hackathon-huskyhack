import { useState } from 'react';
import { DealCard } from './components/DealCard';
import { CategoryPill } from './components/CategoryPill';
import { MonthlySavingsCard } from './components/MonthlySavingsCard';
import { SavingsBreakdown } from './components/SavingsBreakdown';
import { FullPageDeal } from './components/FullPageDeals';
import { Home, ArrowLeftRight, Sparkles, MoreHorizontal } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('nudge');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<number | null>(null);

  const categories = ['All', 'Food', 'Loans', 'Credit/Debit', 'Limited Time'];

  const deals = [
    {
      id: 1,
      merchantName: "Stumptown Coffee",
      merchantLogo: "☕",
      dealTitle: "Local Coffee Subscription",
      tagline: "2% off your monthly coffee plan",
      distance: "0.4 mi away",
      originalPrice: 6.00,
      discountedPrice: 4.50,
      image: "https://images.unsplash.com/photo-1676506129134-c8aef41eb4d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwbGF0dGV8ZW58MXx8fHwxNzYyNTk3MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Food",
      expiryDate: "12/31/2025"
    },
    {
      id: 2,
      merchantName: "Trader Joe's",
      merchantLogo: "🛒",
      dealTitle: "Grocery Cashback",
      tagline: "2% cashback on all purchases",
      distance: "0.8 mi away",
      originalPrice: 50.00,
      discountedPrice: 49.00,
      image: "https://images.unsplash.com/photo-1604742763104-86a0cf0aa1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBmcmVzaHxlbnwxfHx8fDE3NjI2MDMyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Food",
      expiryDate: "11/30/2025"
    },
    {
      id: 3,
      merchantName: "Delta Airlines",
      merchantLogo: "✈️",
      dealTitle: "Travel Rewards Boost",
      tagline: "Triple miles on next booking",
      distance: "Online",
      originalPrice: 350.00,
      discountedPrice: 320.00,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjI1OTkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Limited Time",
      expiryDate: "11/15/2025"
    },
    {
      id: 4,
      merchantName: "Sound CU Auto Loan",
      merchantLogo: "🚗",
      dealTitle: "Low Rate Auto Financing",
      tagline: "3.49% APR on new & used vehicles",
      distance: "All Branches",
      originalPrice: 25000.00,
      discountedPrice: 24500.00,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBmaW5hbmNlfGVufDF8fHx8MTc2MjU5NzMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Loans",
      expiryDate: "12/31/2025"
    },
    {
      id: 5,
      merchantName: "Sound Visa Platinum",
      merchantLogo: "💳",
      dealTitle: "Premium Cashback Card",
      tagline: "3% cashback on gas & groceries",
      distance: "Apply Online",
      originalPrice: 0,
      discountedPrice: 0,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVkaXQlMjBjYXJkfGVufDF8fHx8MTc2MjU5NzMzNnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Credit/Debit",
      expiryDate: "01/31/2026"
    },
    {
      id: 6,
      merchantName: "Black Friday Special",
      merchantLogo: "🎉",
      dealTitle: "Holiday Shopping Bonus",
      tagline: "5% extra cashback on all purchases",
      distance: "Limited Time",
      originalPrice: 100.00,
      discountedPrice: 95.00,
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhZ3N8ZW58MXx8fHwxNzYyNTk3MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Limited Time",
      expiryDate: "11/30/2025"
    },
    {
      id: 7,
      merchantName: "Home Loan Refinance",
      merchantLogo: "🏠",
      dealTitle: "Mortgage Refinancing",
      tagline: "Lower your monthly payment today",
      distance: "All Branches",
      originalPrice: 200000.00,
      discountedPrice: 198000.00,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwaG91c2V8ZW58MXx8fHwxNzYyNTk3MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Loans",
      expiryDate: "12/15/2025"
    }
  ];

  // Filter deals based on active category
  const filteredDeals = activeCategory === 'All' 
    ? deals 
    : deals.filter(deal => deal.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-[400px] h-[812px] bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col relative border-8 border-slate-900">
        {/* Status Bar */}
        <div className="h-11 bg-gradient-to-r from-[#0A1F44] to-[#1a3a6b] px-6 pt-2 flex items-center justify-between text-white">
          <span className="text-xs">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-white rounded-sm" />
            <div className="text-xs">100%</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {selectedDeal !== null ? (
            <FullPageDeal 
              deal={deals.find(d => d.id === selectedDeal)!} 
              onClose={() => setSelectedDeal(null)} 
            />
          ) : showBreakdown ? (
            <SavingsBreakdown onBack={() => setShowBreakdown(false)} />
          ) : (
            <>
              {/* Top Section - Monthly Savings Overview */}
              <div className="bg-gradient-to-br from-[#0A1F44] via-[#1a3a6b] to-[#2a4a7b] px-6 pt-6 pb-6">
                <MonthlySavingsCard onViewBreakdown={() => setShowBreakdown(true)}/>
              </div>

              {/* Mid Section - Category Carousel */}
              <div className="px-6 py-4 border-b border-slate-200">
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                  {categories.map((category) => (
                    <CategoryPill
                      key={category}
                      label={category}
                      active={activeCategory === category}
                      onClick={() => setActiveCategory(category)}
                    />
                  ))}
                </div>
              </div>

              {/* Main Section - Deal Carousel */}
              <div className="py-5">
                <h2 className="text-[#0A1F44] mb-4 px-6">
                  Deals & Benefits for You
                </h2>
                <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 pb-2">
                  {filteredDeals.length > 0 ? (
                    filteredDeals.map((deal) => (
                      <DealCard 
                        key={deal.id} 
                        deal={deal} 
                        onViewQR={() => setSelectedDeal(deal.id)}
                      />
                    ))
                  ) : (
                    <div className="w-full text-center py-8 text-slate-500">
                      No deals available in this category
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-6 py-3 safe-area-inset-bottom">
          <div className="flex justify-around items-center">
            <button
              onClick={() => setActiveTab('accounts')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'accounts' ? 'text-[#7DD3C0]' : 'text-slate-400'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">Accounts</span>
            </button>
            <button
              onClick={() => setActiveTab('transfers')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'transfers' ? 'text-[#7DD3C0]' : 'text-slate-400'
              }`}
            >
              <ArrowLeftRight className="w-5 h-5" />
              <span className="text-xs">Transfers</span>
            </button>
            <button
              onClick={() => setActiveTab('nudge')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'nudge' ? 'text-[#7DD3C0]' : 'text-slate-400'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span className="text-xs">Nudge</span>
            </button>
            <button
              onClick={() => setActiveTab('more')}
              className={`flex flex-col items-center gap-1 ${
                activeTab === 'more' ? 'text-[#7DD3C0]' : 'text-slate-400'
              }`}
            >
              <MoreHorizontal className="w-5 h-5" />
              <span className="text-xs">More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}