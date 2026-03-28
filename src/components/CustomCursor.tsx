import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Initialize off-screen to prevent flash
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smooth spring animation
  const springConfig = { damping: 20, stiffness: 350, mass: 0.1 }; 
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide default cursor across the document when this component mounts on desktop
    const hideDefaultCursor = () => {
      document.body.style.cursor = 'none';
    };

    const restoreDefaultCursor = () => {
      document.body.style.cursor = 'auto';
    };

    // We only want custom cursor behaving like default cursor replacement on hoverable elements
    // so we need to add cursor-none to interactive elements or globally. 
    // Best practice is dropping global cursor: none on desktop.
    if (window.matchMedia('(pointer: fine)').matches) {
      document.documentElement.classList.add('cursor-none');
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Also hover on cards or interactive elements, we track data-hover="true"
      const clickable = target.closest('button') || 
                        target.closest('a') || 
                        target.closest('[role="button"]') ||
                        target.closest('[data-hover="true"]');
      setIsHovering(!!clickable);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.documentElement.classList.remove('cursor-none');
    }
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center hidden md:flex will-change-transform"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
    >
      {/* 
        This div is the actual cursor "body". 
        We keep pure white bg and pure black text to ensure perfect mix-blend-difference "hole-punch" effect
      */}
      <motion.div
        className="relative rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)] flex items-center justify-center"
        style={{ width: 24, height: 24 }}
        animate={{
          scale: isHovering ? 2 : 1, 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {/* Text removed as requested by user: "should not show view text when going to a button" */}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
