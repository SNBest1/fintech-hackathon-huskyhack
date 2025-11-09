export function NudgeAvatar({ onClick }: { onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`relative w-16 h-16 rounded-full bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] shadow-lg flex items-center justify-center ${
        onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''
      }`}
    >
      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] animate-pulse opacity-50" />
      
      {/* AI Orb */}
      <div className="relative w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-[#7DD3C0]/30 animate-pulse" />
      </div>
      
      {/* Sparkle indicator */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#0A1F44] rounded-full border-2 border-white flex items-center justify-center">
        <span className="text-[8px]">✨</span>
      </div>
    </div>
  );
}
