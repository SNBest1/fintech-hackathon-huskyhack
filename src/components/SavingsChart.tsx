export function SavingsChart() {
  const weeklyData = [
    { week: 'Week 1', amount: 22 },
    { week: 'Week 2', amount: 28 },
    { week: 'Week 3', amount: 35 },
    { week: 'Week 4', amount: 40 },
  ];

  const maxAmount = Math.max(...weeklyData.map(d => d.amount));

  return (
    <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-200">
      {/* Chart */}
      <div className="relative h-48 mb-4">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-slate-100" />
          ))}
        </div>
        
        {/* Line chart */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7DD3C0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#7DD3C0" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Area fill */}
          <path
            d={`M 0 ${192 - (weeklyData[0].amount / maxAmount) * 160} 
                L ${(1 / 3) * 100}% ${192 - (weeklyData[1].amount / maxAmount) * 160}
                L ${(2 / 3) * 100}% ${192 - (weeklyData[2].amount / maxAmount) * 160}
                L 100% ${192 - (weeklyData[3].amount / maxAmount) * 160}
                L 100% 192 L 0 192 Z`}
            fill="url(#chartGradient)"
          />
          
          {/* Line */}
          <path
            d={`M 0 ${192 - (weeklyData[0].amount / maxAmount) * 160} 
                L ${(1 / 3) * 100}% ${192 - (weeklyData[1].amount / maxAmount) * 160}
                L ${(2 / 3) * 100}% ${192 - (weeklyData[2].amount / maxAmount) * 160}
                L 100% ${192 - (weeklyData[3].amount / maxAmount) * 160}`}
            stroke="#7DD3C0"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Data points */}
        <div className="absolute inset-0 flex items-end justify-between px-0">
          {weeklyData.map((data, index) => (
            <div
              key={data.week}
              className="flex-1 flex items-end justify-center relative group"
              style={{ height: `${(data.amount / maxAmount) * 160}px` }}
            >
              <div className="absolute top-0 w-3 h-3 bg-[#7DD3C0] rounded-full shadow-lg ring-4 ring-white" />
              <div className="absolute -top-8 bg-[#0A1F44] text-white px-2 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                ${data.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Labels */}
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        {weeklyData.map((data) => (
          <div key={data.week} className="flex-1 text-center">
            {data.week}
          </div>
        ))}
      </div>
    </div>
  );
}
