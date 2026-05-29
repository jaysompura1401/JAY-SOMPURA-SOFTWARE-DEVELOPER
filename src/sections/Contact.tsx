import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactProps {
  onSetCursor: (text: string, isHovering: boolean) => void;
}

export default function Contact({ onSetCursor }: ContactProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } });
      gsap.fromTo([bodyRef.current, ctaRef.current], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 60%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" style={{ minHeight: '100vh', backgroundColor: '#101010', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'clamp(60px, 10vw, 120px) clamp(16px, 4vw, 20px)', textAlign: 'center' }}>
      <h2 ref={headingRef} className="font-display" style={{ fontSize: 'clamp(36px, 8vw, 120px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-3.6px', color: '#FFFFFF', marginBottom: 32 }}>
        LET'S WORK<br />TOGETHER
      </h2>
      <p ref={bodyRef} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.6)', marginBottom: 16 }}>
        Open to internships, freelance projects, and full-time roles.
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 48 }}>
        📍 Ahmedabad &nbsp;·&nbsp; 📞 8306929541 &nbsp;·&nbsp; ✉️ jaysompura2002@gmail.com
      </p>
      <a
        ref={ctaRef}
        href="mailto:jaysompura2002@gmail.com"
        onMouseEnter={() => onSetCursor('', true)}
        onMouseLeave={() => onSetCursor('', false)}
        style={{ border: '1px solid #FFFFFF', padding: '20px 40px', color: '#FFFFFF', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', cursor: 'none', transition: 'background-color 0.3s, color 0.3s', textDecoration: 'none', display: 'inline-block' }}
        onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.color = '#101010'; }}
        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#FFFFFF'; }}
      >
        SEND AN EMAIL
      </a>
    </section>
  );
}
