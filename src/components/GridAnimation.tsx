import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const GridAnimation = () => {
  const [gridUnit, setGridUnit] = useState(64); // Default 4rem = 64px

  useEffect(() => {
    const updateGridUnit = () => {
      const rem = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      setGridUnit(rem * 4);
    };

    updateGridUnit();
    window.addEventListener('resize', updateGridUnit);
    return () => window.removeEventListener('resize', updateGridUnit);
  }, []);

  // Define paths using grid units [x, y]
  const paths = [
    {
      id: 1,
      points: [
        [6, 0],
        [6, 4],
        [3, 4],
        [3, 7]
      ],
      delay: 0,
      duration: 4
    },
    {
      id: 2,
      points: [
        [14, 0],
        [14, 3],
        [18, 3],
        [18, 8]
      ],
      delay: 1,
      duration: 5
    },
    {
      id: 3,
      points: [
        [24, 0],
        [24, 5],
        [21, 5],
        [21, 9]
      ],
      delay: 2,
      duration: 4.5
    },
    {
      id: 4,
      points: [
        [0, 6],
        [8, 6],
        [8, 10]
      ],
      delay: 0.5,
      duration: 3.5
    },
    {
      id: 5,
      points: [
        [32, 4],
        [26, 4],
        [26, 8]
      ],
      delay: 1.5,
      duration: 4
    },
    {
      id: 6,
      points: [
        [10, 0],
        [10, 6],
        [13, 6],
        [13, 11]
      ],
      delay: 2.5,
      duration: 5
    },
    // Mobile friendly paths (smaller X coordinates)
    {
      id: 7,
      points: [
        [2, 0],
        [2, 5],
        [4, 5],
        [4, 12]
      ],
      delay: 0.8,
      duration: 4.5
    },
    {
      id: 8,
      points: [
        [5, 0],
        [5, 2],
        [1, 2],
        [1, 8]
      ],
      delay: 1.2,
      duration: 3.8
    },
    {
      id: 9,
      points: [
        [0, 2],
        [3, 2],
        [3, 6]
      ],
      delay: 2.2,
      duration: 3.2
    }
  ];

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden opacity-20 dark:opacity-30">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="red-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF2D20" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF2D20" stopOpacity="1" />
            <stop offset="100%" stopColor="#FF2D20" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g filter="url(#glow)">
          {paths.map((p) => {
            const d = `M ${p.points.map((pt) => `${pt[0] * gridUnit} ${pt[1] * gridUnit}`).join(' L ')}`;

            return (
              <motion.path
                key={p.id}
                d={d}
                stroke="url(#red-gradient)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: p.delay,
                  times: [0, 0.5, 1]
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
