import { useEffect, useRef, useCallback } from 'react';

interface CustomCursorProps {
  cursorText: string;
  isHovering: boolean;
}

export default function CustomCursor({ cursorText, isHovering }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorX = useRef(0);
  const cursorY = useRef(0);
  const mouseX = useRef(-100);
  const mouseY = useRef(-100);
  const rafId = useRef<number>(0);

  const animate = useCallback(() => {
    cursorX.current += (mouseX.current - cursorX.current) * 0.15;
    cursorY.current += (mouseY.current - cursorY.current) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorX.current}px, ${cursorY.current}px) translate(-50%, -50%)`;
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    // Check for touch device
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [animate]);

  // Check for touch device
  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches;
  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
      }}
    >
      <span
        style={{
          display: 'block',
          width: isHovering ? 80 : 16,
          height: isHovering ? 80 : 16,
          borderRadius: '50%',
          backgroundColor: '#FFFFFF',
          mixBlendMode: isHovering ? 'difference' : 'normal',
          transition: 'width 0.3s, height 0.3s',
          opacity: isHovering ? 0 : 1,
        }}
      />
      {isHovering && (
        <span
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            fontSize: 13,
            fontWeight: 500,
            color: '#FFFFFF',
            fontFamily: "'Inter', sans-serif",
            mixBlendMode: 'difference',
          }}
        >
          {cursorText}
        </span>
      )}
    </div>
  );
}
