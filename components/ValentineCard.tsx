
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { NoButtonPosition } from '../types';

interface ValentineCardProps {
  onYes: () => void;
  onNoHover: () => void;
  noButtonPos: NoButtonPosition;
}

const ValentineCard: React.FC<ValentineCardProps> = ({ onYes, onNoHover, noButtonPos }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-pink-200 relative overflow-visible">
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Heart className="text-pink-500 fill-pink-500" size={64} />
        </motion.div>
      </div>

      <h1 className="text-4xl md:text-5xl font-pacifico text-pink-600 mb-6">
        My Dearest...
      </h1>

      <p className="text-xl md:text-2xl text-pink-500 leading-relaxed mb-8 font-quicksand font-semibold">
        Every moment with you feels like a dream I never want to wake up from. 
        You make my heart skip a beat and my world shine brighter! ✨
      </p>

      <h2 className="text-3xl md:text-4xl font-caveat font-bold text-pink-700 mb-12">
        Will you be my valentine? ❤️
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-[100px] relative">
        <button
          onClick={onYes}
          className="group relative px-10 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold text-2xl rounded-full shadow-lg hover:shadow-pink-400/50 transition-all active:scale-95"
        >
          <span className="flex items-center gap-2">
            YES! <Sparkles className="group-hover:animate-spin" size={24} />
          </span>
        </button>

        {/* The Elusive No Button */}
        <motion.button
          onMouseEnter={onNoHover}
          onClick={onNoHover} // Just in case they are fast!
          animate={{
            x: noButtonPos.isAbsolute ? noButtonPos.x as number : 0,
            y: noButtonPos.isAbsolute ? noButtonPos.y as number : 0,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className={`${
            noButtonPos.isAbsolute ? 'fixed z-[100]' : 'relative'
          } px-10 py-4 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold text-2xl rounded-full shadow-md transition-colors`}
          style={noButtonPos.isAbsolute ? { top: 0, left: 0 } : {}}
        >
          No...
        </motion.button>
      </div>
    </div>
  );
};

export default ValentineCard;
