import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface NavigationProps {
  onSetCursor: (text: string, isHovering: boolean) => void;
}

export default function Navigation({ onSetCursor }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 });
    }
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'EDUCATION', id: 'education' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(16px, 5vw, 32px)',
          backgroundColor: scrolled || menuOpen ? 'rgba(16, 16, 16, 0.97)' : 'transparent',
          transition: 'background-color 0.3s',
          backdropFilter: scrolled || menuOpen ? 'blur(8px)' : 'none',
        }}
      >
        {/* Logo */}
        <div
          className="font-mono-label"
          style={{ color: '#FFFFFF', letterSpacing: '0.1em', fontSize: 12, cursor: 'default' }}
          onMouseEnter={() => onSetCursor('', true)}
          onMouseLeave={() => onSetCursor('', false)}
        >
          JAY SOMPURA
        </div>

        {/* Desktop links — hidden on mobile */}
        <div className="hidden md:flex items-center" style={{ gap: 36 }}>
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="relative bg-transparent border-none outline-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 500,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                cursor: 'none',
                letterSpacing: '0.05em',
                padding: '4px 0',
              }}
              onMouseEnter={(e) => {
                onSetCursor('', true);
                const u = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                if (u) gsap.fromTo(u, { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 0.3, ease: 'power2.out' });
              }}
              onMouseLeave={(e) => {
                onSetCursor('', false);
                const u = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                if (u) gsap.to(u, { scaleX: 0, duration: 0.3, ease: 'power2.in' });
              }}
            >
              {link.label}
              <span
                className="nav-underline absolute bottom-0 left-0"
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: '#FFFFFF',
                  transform: 'scaleX(0)',
                  transformOrigin: 'left',
                }}
              />
            </button>
          ))}
        </div>

        {/* Hamburger — visible only on mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            width: 40,
            height: 40,
            gap: 5,
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#FFFFFF',
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#FFFFFF',
              transition: 'opacity 0.35s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              backgroundColor: '#FFFFFF',
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu overlay */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          top: 72,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#101010',
          zIndex: 49,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.77, 0, 0.175, 1)',
        }}
      >
        {links.map((link, i) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 10vw, 56px)',
              fontWeight: 700,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-1px',
              lineHeight: 1.1,
              padding: '8px 0',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ease ${i * 0.06 + 0.1}s, transform 0.4s ease ${i * 0.06 + 0.1}s, color 0.2s`,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = '#FFFFFF'; }}
          >
            {link.label}
          </button>
        ))}

        {/* Social links at bottom */}
        <div style={{ position: 'absolute', bottom: 40, display: 'flex', gap: 32 }}>
          <a href="mailto:jaysompura2002@gmail.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            EMAIL
          </a>
          <a href="https://www.linkedin.com/in/jay-sompura-951377230/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            LINKEDIN
          </a>
        </div>
      </div>
    </>
  );
}
