
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Stars } from 'lucide-react';

const SuccessView: React.FC = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-4">
      <div className="relative mb-12">
        {/* Massive Heart Explosion Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative"
        >
          <Heart className="text-red-500 fill-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]" size={200} />
          
          {/* Small floating decorative hearts */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 text-red-400"
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{
                x: (Math.random() - 0.5) * 400,
                y: (Math.random() - 0.5) * 400,
                opacity: 0,
                scale: Math.random() * 2 + 1,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            >
              <Heart fill="currentColor" size={24} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showText ? 1 : 0, scale: showText ? 1 : 0.8 }}
        className="bg-white/90 backdrop-blur-sm p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(239,68,68,0.2)] border-2 border-red-100"
      >
        <h1 className="text-5xl md:text-7xl font-pacifico text-red-600 mb-6 drop-shadow-sm">
          Yay! I Knew It! ❤️
        </h1>
        <p className="text-2xl md:text-3xl font-quicksand font-bold text-red-500 flex items-center justify-center gap-3">
          <Stars className="animate-spin text-yellow-400" />
          You've made me the happiest person ever! 
          <Stars className="animate-spin text-yellow-400" />
        </p>
        <p className="mt-8 text-lg font-semibold text-pink-400 italic">
          I promise to love you more every single day...
        </p>

        <motion.div 
          className="mt-10 flex gap-4 justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessView;
