import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleLines = titleRef.current?.querySelectorAll('.title-line');
      if (titleLines) {
        gsap.fromTo(
          titleLines,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.3 }
        );
      }
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.4 });
      gsap.fromTo(bodyRef.current,    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 });
      gsap.fromTo(ctaRef.current,     { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#101010',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT: Portrait — DESKTOP ── */}
      <div
        className="hidden md:block"
        style={{
          width: '52%',
          flexShrink: 0,
          position: 'relative',
          overflow: 'hidden',
          /* No extra backgroundColor so no seam shows */
        }}
      >
        <img
          src="/images/hero-portrait.jpg"
          alt="Jay Sompura"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        {/* Strong right-edge fade — seamlessly merges into the dark panel */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent 30%, #101010 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 120,
            background: 'linear-gradient(to top, #101010 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── MOBILE: image as top half ── */}
      <div
        className="md:hidden"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '52%',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/hero-portrait.jpg"
          alt="Jay Sompura"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 50%, #101010 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── RIGHT: Text content ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(20px, 5vw, 48px)',
          position: 'relative',
          zIndex: 2,
        }}
        className="pt-[54vh] md:pt-0"
      >
        {/* Label */}
        <div
          ref={subtitleRef}
          className="font-mono-label"
          style={{ color: 'rgba(255,255,255,0.55)', marginBottom: 28, fontSize: 10, letterSpacing: '0.12em' }}
        >
          SOFTWARE DEVELOPER &amp; FULL STACK
        </div>

        {/* Title */}
        <div ref={titleRef}>
          {['BUILDING', 'PIXEL-PERFECT', 'INTERFACES'].map((word) => (
            <div
              key={word}
              className="title-line font-display"
              style={{
                fontSize: 'clamp(28px, 4.2vw, 72px)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-2px',
                color: '#FFFFFF',
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Body */}
        <p
          ref={bodyRef}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 360,
            marginTop: 28,
          }}
        >
          I'm Jay Sompura — a Software Developer specialising in Python, Django, React.js,
          and pixel-perfect Figma-to-code conversions. Currently building modern web
          interfaces at Keyanna Technology Pvt. Ltd.
        </p>

        {/* CTA */}
        <button
          ref={ctaRef}
          onClick={scrollToWork}
          className="flex items-center gap-3 bg-transparent"
          style={{
            border: '1px solid #FFFFFF',
            padding: '14px 28px',
            color: '#FFFFFF',
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            cursor: 'none',
            marginTop: 36,
            alignSelf: 'flex-start',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#101010';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          VIEW MY WORK
          <ArrowDown size={14} />
        </button>
      </div>
    </section>
  );
}
