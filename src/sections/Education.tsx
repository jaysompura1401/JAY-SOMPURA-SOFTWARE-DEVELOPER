import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Software Developer – Product Development',
    institution: 'TopsTechnologies, Ahmedabad',
    period: 'Jun 2025 – Feb 2026',
    type: 'CERTIFICATION',
    detail: 'Comprehensive full-stack software development course covering Python, Django, React.js, and modern web technologies.',
  },
  {
    degree: 'ITI – COPA (NCVT)',
    institution: 'Govt. Industrial Training Institute, Sagwara, Rajasthan',
    period: 'Sep 2023 – Aug 2024',
    type: 'DIPLOMA',
    detail: 'Computer Operator and Programming Assistant — National Council for Vocational Training certification.',
  },
  {
    degree: 'Bachelor of Arts (B.A.)',
    institution: 'GYAYAK COLLEGE, Govind Guru Tribal University, Sagwara, Rajasthan',
    period: '2023',
    type: 'DEGREE',
    detail: 'Bachelor of Arts undergraduate degree from Govind Guru Tribal University.',
  },
  {
    degree: 'RSCIT – Computer Fundamentals / IT',
    institution: 'Vardhaman Mahaveer Open University, Kota',
    period: '2017',
    type: 'CERTIFICATION',
    detail: 'Rajasthan State Certificate in Information Technology — foundational computer and IT skills.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { x: -40, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="education" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(60px, 10vw, 80px) 0', minHeight: '100vh', alignItems: 'center', display: 'flex' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', width: '100%' }}>
        <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>ACADEMIC BACKGROUND</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 80, letterSpacing: '-2px' }}>
          EDUCATION
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}>
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                background: '#0A0A0A',
                padding: '40px 36px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#161616'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0A'; }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '4px 10px',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                }}
              >
                {edu.type}
              </span>

              <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 }}>
                {edu.period}
              </div>

              <h3 className="font-display" style={{ fontSize: 'clamp(18px, 1.8vw, 24px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.2, letterSpacing: '-0.5px' }}>
                {edu.degree}
              </h3>

              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>
                {edu.institution}
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginTop: 4 }}>
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
