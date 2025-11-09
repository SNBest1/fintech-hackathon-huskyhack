import { useState } from 'react';
import { X, Mic, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { NudgeAvatar } from './NudgeAvatar';

interface FullScreenChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullScreenChat({ isOpen, onClose }: FullScreenChatProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai' as const,
      content: "Hey Sarah 👋, I've found some ways you can save today! How can I help you?"
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      setMessages([...messages, { id: messages.length + 1, type: 'user' as const, content: message }]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          id: prev.length + 1, 
          type: 'ai' as const, 
          content: "I'm analyzing your spending patterns and finding the best deals for you! 💡" 
        }]);
      }, 1000);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-[#0A1F44] via-[#1a3a6b] to-[#2a4a7b] z-50 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="scale-75">
            <NudgeAvatar />
          </div>
          <div>
            <h2 className="text-white">Nudge Assistant</h2>
            <p className="text-white/60 text-xs">Your AI financial companion</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex gap-3 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {msg.type === 'ai' && (
              <div className="scale-50 -mt-2">
                <NudgeAvatar />
              </div>
            )}
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.type === 'ai'
                  ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white'
                  : 'bg-[#7DD3C0] text-[#0A1F44]'
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-3 space-y-2">
        <p className="text-white/60 text-xs mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => handleQuickQuestion("💡 Ways to save more?")}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors"
          >
            💡 Ways to save more?
          </button>
          <button 
            onClick={() => handleQuickQuestion("🎁 My unused perks?")}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors"
          >
            🎁 My unused perks?
          </button>
          <button 
            onClick={() => handleQuickQuestion("📊 Show my spending trends")}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors"
          >
            📊 Show my spending trends
          </button>
          <button 
            onClick={() => handleQuickQuestion("💳 Best card for this purchase?")}
            className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-white text-xs hover:bg-white/20 transition-colors"
          >
            💳 Best card for this purchase?
          </button>
        </div>
      </div>

      {/* Chat Input */}
      <div className="px-6 py-4 border-t border-white/10">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask Nudge anything..."
              className="flex-1 bg-transparent text-white placeholder:text-white/60 outline-none text-sm"
            />
            <button className="p-2 bg-[#7DD3C0] rounded-full hover:bg-[#6bc3b0] transition-colors">
              <Mic className="w-4 h-4 text-[#0A1F44]" />
            </button>
            <button 
              onClick={handleSendMessage}
              className="p-2 bg-[#7DD3C0] rounded-full hover:bg-[#6bc3b0] transition-colors"
            >
              <Send className="w-4 h-4 text-[#0A1F44]" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
