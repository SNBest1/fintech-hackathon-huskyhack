import { useState } from 'react';
import { NudgeAvatar } from './components/NudgeAvatar';
import { DealCard } from './components/DealCard';
import { CategoryPill } from './components/CategoryPill';
import { MonthlySavingsCard } from './components/MonthlySavingsCard';
import { SavingsBreakdown } from './components/SavingsBreakdown';
import { FullScreenChat } from './components/FullScreenChat';
import { Home, ArrowLeftRight, Sparkles, MoreHorizontal, Mic, Send } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('nudge');
  const [message, setMessage] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [showFullScreenChat, setShowFullScreenChat] = useState(false);

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
          {showBreakdown ? (
            <SavingsBreakdown onBack={() => setShowBreakdown(false)} />
          ) : (
            <>
              {/* Top Section - AI Chat Assistant */}
              <div className="bg-gradient-to-br from-[#0A1F44] via-[#1a3a6b] to-[#2a4a7b] px-6 pt-6 pb-6">
                <div className="flex items-start gap-4 mb-4">
                  <NudgeAvatar onClick={() => setShowFullScreenChat(true)} />
                  <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                    <p className="text-white text-sm">
                      Hey Sarah 👋, I've found some ways you can save today!
                    </p>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 mb-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask Nudge anything..."
                      className="flex-1 bg-transparent text-white placeholder:text-white/60 outline-none text-sm"
                    />
                    <button className="p-2 bg-[#7DD3C0] rounded-full hover:bg-[#6bc3b0] transition-colors">
                      <Mic className="w-4 h-4 text-[#0A1F44]" />
                    </button>
                    <button className="p-2 bg-[#7DD3C0] rounded-full hover:bg-[#6bc3b0] transition-colors">
                      <Send className="w-4 h-4 text-[#0A1F44]" />
                    </button>
                  </div>
                </div>

                {/* Example Questions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors">
                    💡 Ways to save more?
                  </button>
                  <button className="flex-1 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors">
                    🎁 My unused perks?
                  </button>
                </div>
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
                      <DealCard key={deal.id} deal={deal} />
                    ))
                  ) : (
                    <div className="w-full text-center py-8 text-slate-500">
                      No deals available in this category
                    </div>
                  )}
                </div>
              </div>

              {/* Lower Section - Monthly Savings Overview */}
              <div className="px-6 pb-6">
                <MonthlySavingsCard onViewBreakdown={() => setShowBreakdown(true)} />
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

        {/* Full Screen Chat Modal */}
        <FullScreenChat 
          isOpen={showFullScreenChat} 
          onClose={() => setShowFullScreenChat(false)} 
        />
      </div>
    </div>
  );
}