import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface NudgeAvatarProps {
  onClick?: () => void;
}

export function NudgeAvatar({ onClick }: NudgeAvatarProps = {}) {
  return (
    <button 
      onClick={onClick}
      className={`relative w-14 h-14 flex-shrink-0 ${onClick ? 'cursor-pointer hover:scale-105 transition-transform' : ''}`}
    >
      {/* Outer glow rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#7DD3C0]/30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#7DD3C0]/20"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Core orb */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-[#7DD3C0] to-[#5ab3a0] shadow-lg flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 20px rgba(125, 211, 192, 0.6)",
            "0 0 30px rgba(125, 211, 192, 0.8)",
            "0 0 20px rgba(125, 211, 192, 0.6)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
      </motion.div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"
        animate={{
          y: [0, -8, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-2 left-0 w-1 h-1 bg-white rounded-full"
        animate={{
          y: [0, -6, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
      />
    </button>
  );
}
