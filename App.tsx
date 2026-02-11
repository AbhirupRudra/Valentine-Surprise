
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import ValentineCard from './components/ValentineCard';
import SuccessView from './components/SuccessView';
import { NoButtonPosition } from './types';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<NoButtonPosition>({ x: 0, y: 0, isAbsolute: false });

  const handleYes = () => {
    setIsAccepted(true);
  };

  const moveNoButton = useCallback(() => {
    // Estimated dimensions of the button to ensure it doesn't clip
    const buttonWidth = 160; 
    const buttonHeight = 60;
    const padding = 20;

    // Calculate maximum safe coordinates
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
    
    // Ensure we don't get negative values on very small screens
    const safeMaxX = Math.max(padding, maxX);
    const safeMaxY = Math.max(padding, maxY);
    
    const randomX = padding + Math.random() * (safeMaxX - padding);
    const randomY = padding + Math.random() * (safeMaxY - padding);
    
    setNoButtonPos({
      x: randomX,
      y: randomY,
      isAbsolute: true
    });
  }, []);

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 ${isAccepted ? 'bg-red-50' : 'animate-gradient'}`}>
      {/* Background Hearts */}
      <FloatingHearts count={isAccepted ? 50 : 20} intense={isAccepted} />

      <AnimatePresence mode="wait">
        {!isAccepted ? (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
            className="z-10 px-4 w-full max-w-lg"
          >
            <ValentineCard 
              onYes={handleYes} 
              onNoHover={moveNoButton} 
              noButtonPos={noButtonPos}
            />
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="z-20 w-full h-full flex items-center justify-center"
          >
            <SuccessView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative corners */}
      {!isAccepted && (
        <div className="absolute top-0 left-0 p-8 text-pink-300 opacity-30 pointer-events-none">
          <Heart size={100} fill="currentColor" className="animate-pulse" />
        </div>
      )}
      {!isAccepted && (
        <div className="absolute bottom-0 right-0 p-8 text-pink-300 opacity-30 pointer-events-none">
          <Heart size={120} fill="currentColor" className="animate-bounce" style={{ animationDuration: '3s' }} />
        </div>
      )}
    </div>
  );
};

export default App;
