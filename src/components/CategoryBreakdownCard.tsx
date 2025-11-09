interface Category {
  icon: string;
  name: string;
  amount: number;
  color: string;
  percentage: number;
}

interface CategoryBreakdownCardProps {
  category: Category;
}

export function CategoryBreakdownCard({ category }: CategoryBreakdownCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-3">{category.icon}</div>
      <p className="text-[#0A1F44] text-sm mb-2">
        {category.name}
      </p>
      <div className="flex items-end justify-between mb-3">
        <span className="text-2xl text-[#0A1F44]">
          ${category.amount}
        </span>
        <span className="text-xs text-slate-500">
          {category.percentage}%
        </span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ 
            width: `${category.percentage}%`,
            backgroundColor: category.color
          }}
        />
      </div>
    </div>
  );
}
