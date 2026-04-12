import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState('');
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth > 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverElement = target.closest('[data-hover]');
      if (hoverElement) {
        setIsHovering(true);
        setHoverText(hoverElement.getAttribute('data-hover') || '');
      } else {
        setIsHovering(false);
        setHoverText('');
      }
    };

    if (isDesktop) {
      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center"
      animate={{
        x: mousePosition.x - (isHovering ? 20 : 4),
        y: mousePosition.y - (isHovering ? 20 : 4),
        width: isHovering ? 40 : 8,
        height: isHovering ? 40 : 8,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
    >
      <div
        className={`rounded-full flex items-center justify-center transition-all duration-200 ${
          isHovering
            ? 'w-full h-full border border-accent-primary bg-transparent'
            : 'w-full h-full bg-accent-primary'
        }`}
      >
        {isHovering && hoverText && (
          <span className="text-[8px] font-mono text-accent-primary uppercase tracking-widest absolute -top-4 whitespace-nowrap">
            {hoverText}
          </span>
        )}
      </div>
    </motion.div>
  );
}
