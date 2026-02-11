
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { HeartData } from '../types';

interface FloatingHeartsProps {
  count: number;
  intense?: boolean;
}

const FloatingHearts: React.FC<FloatingHeartsProps> = ({ count, intense }) => {
  const hearts = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * (intense ? 40 : 30) + (intense ? 20 : 10),
      left: `${Math.random() * 100}%`,
      duration: Math.random() * (intense ? 3 : 10) + (intense ? 2 : 5),
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [count, intense]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: [0, 45, -45, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            left: heart.left,
            color: intense ? '#ef4444' : '#fbcfe8'
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
