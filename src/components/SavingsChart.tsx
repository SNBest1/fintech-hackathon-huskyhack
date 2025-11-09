export function SavingsChart() {
  // Data points every 3 days over a month - adds up to $124.50
  const savingsData = [
    { period: 'Day 1-3', amount: 12 },
    { period: 'Day 4-6', amount: 15 },
    { period: 'Day 7-9', amount: 14 },
    { period: 'Day 10-12', amount: 18 },
    { period: 'Day 13-15', amount: 16 },
    { period: 'Day 16-18', amount: 13 },
    { period: 'Day 19-21', amount: 11 },
    { period: 'Day 22-24', amount: 10 },
    { period: 'Day 25-27', amount: 8.5 },
    { period: 'Day 28-30', amount: 7 },
  ];

  const maxAmount = Math.max(...savingsData.map(d => d.amount));
  const minAmount = Math.min(...savingsData.map(d => d.amount));
  const range = maxAmount - minAmount;

  // Calculate cumulative savings for display
  const cumulativeSavings = savingsData.map((_, idx) => 
    savingsData.slice(0, idx + 1).reduce((sum, d) => sum + d.amount, 0)
  );

  return (
    <div className="bg-white rounded-3xl p-5 shadow-md border border-slate-200">
      {/* Chart */}
      <div className="relative h-56 mb-6">
        {/* Y-axis labels */}
        <div className="absolute -left-1 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-400 pr-2">
          <span>${maxAmount}</span>
          <span>${Math.round((maxAmount + minAmount) / 2)}</span>
          <span>${minAmount}</span>
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 ml-8 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-full h-px bg-slate-100" />
          ))}
        </div>
        
        {/* Chart area with left margin for labels */}
        <div className="absolute inset-0 ml-8">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7DD3C0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#7DD3C0" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* Generate path for line and area */}
            {(() => {
              const points = savingsData.map((data, index) => {
                const x = (index / (savingsData.length - 1)) * 100;
                const y = 100 - ((data.amount - minAmount) / range) * 80 - 10;
                return { x, y };
              });

              const linePath = points.map((p, i) => 
                `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
              ).join(' ');

              const areaPath = `${linePath} L 100 100 L 0 100 Z`;

              return (
                <>
                  {/* Area fill */}
                  <path
                    d={areaPath}
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Line */}
                  <path
                    d={linePath}
                    stroke="#7DD3C0"
                    strokeWidth="0.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {points.map((point, index) => (
                    <g key={index}>
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="1.2"
                        fill="#7DD3C0"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </g>
                  ))}
                </>
              );
            })()}
          </svg>

          {/* Value labels on data points */}
          <div className="absolute inset-0">
            {savingsData.map((data, index) => {
              const x = (index / (savingsData.length - 1)) * 100;
              const y = 100 - ((data.amount - minAmount) / range) * 80 - 10;
              
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -100%)'
                  }}
                >
                  <div className="bg-[#0A1F44] text-white px-2 py-0.5 rounded-md text-xs whitespace-nowrap mb-2 shadow-lg">
                    ${data.amount}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Bottom info */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div>
          <p className="text-xs text-slate-500">Cumulative Savings</p>
          <p className="text-[#0A1F44] mt-1">$124.50</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Average per Period</p>
          <p className="text-[#7DD3C0] mt-1">$12.45</p>
        </div>
      </div>
    </div>
  );
}
