import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = quoteRef.current?.querySelectorAll('.quote-line');
      if (lines) {
        gsap.fromTo(lines, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#101010', padding: 'clamp(100px, 15vw, 200px) clamp(20px, 5vw, 40px)' }}>
      <div ref={quoteRef} style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div className="quote-line font-display" style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 600, lineHeight: 1.2, color: '#FFFFFF', fontStyle: 'italic', marginBottom: 48 }}>
          "Jay converted our Figma designs into clean, responsive code with remarkable attention to detail. His work was consistent, well-structured, and delivered on time."
        </div>
        <div className="quote-line font-mono-label" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
          — TEAM LEAD, UNIFIEDREACH PRIVATE LIMITED
        </div>
      </div>
    </section>
  );
}
