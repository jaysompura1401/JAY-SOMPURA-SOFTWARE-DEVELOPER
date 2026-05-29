import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Frontend Developer / Web Designer',
    company: 'Keyanna Technology Pvt. Ltd.',
    location: 'Ahmedabad',
    link: 'https://keyannatech.com/',
    period: 'May 2026 – Present',
    type: 'INTERNSHIP',
    points: [
      'INTERNSHIP CONTINUED VIA INTERNAL TRANSFER FROM UNIFIED REACH PVT. LTD. TO KEYANNA TECHNOLOGY PVT. LTD.',
      'Working as a Frontend Developer focusing on modern and responsive web application interfaces.',
      'Developed and maintained live websites and web platforms from development stage to deployment.',
      'Converted Figma designs into pixel-perfect responsive webpages using HTML5, CSS3, JavaScript (ES6), Bootstrap, and React.js.',
      'Built reusable frontend components and scalable UI structures for better maintainability and performance.',
      'Implemented responsive layouts for mobile, tablet, and desktop devices.',
      'Developed and customised WordPress websites based on business and client requirements.',
      'Worked on telecom and fintech-related projects including the Nivtrix Platform.',
      'Improved frontend responsiveness, UI consistency, and overall user experience.',
      'Participated in testing, optimisation, debugging, and deployment of live projects.',
      'Collaborated with designers and developers to deliver scalable and production-ready solutions.',
    ],
  },
  {
    role: 'Frontend Developer Intern (Figma to Code)',
    company: 'UnifiedReach Private Limited',
    location: 'Ahmedabad',
    link: '',
    period: 'March 2026 – April 2026',
    type: 'INTERNSHIP',
    points: [
      'Converted Figma designs into responsive webpages using HTML, CSS, JavaScript, and Bootstrap.',
      'Ensured cross-browser compatibility and mobile responsiveness across devices.',
      'Worked on multiple sections including Home, Product, GIS, and About pages.',
      'Implemented interactive UI elements such as hover effects, animations, and transitions.',
      'Collaborated with the design team to accurately convert UI/UX concepts into frontend code.',
      'Improved UI consistency and user experience across multiple pages.',
    ],
  },
  {
    role: 'Data Entry Operator',
    company: 'Zeel Rainwear',
    location: 'Ahmedabad',
    link: '',
    period: 'December 2024 – June 2025',
    type: 'FULL-TIME',
    points: [
      'Entered and maintained accurate company data and records.',
      'Managed Excel sheets and documentation for daily operations.',
      'Verified data accuracy and maintained organised reports.',
      'Supported administrative and office-related operations.',
      'Maintained proper records for easy access and reporting.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" style={{ backgroundColor: '#101010', padding: 'clamp(60px, 10vw, 80px) 0', minHeight: '100vh', alignItems: 'center', display: 'flex' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)', width: '100%' }}>
        <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>WORK HISTORY</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 80, letterSpacing: '-2px' }}>
          EXPERIENCE
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              ref={(el) => { itemRefs.current[i] = el; }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '40px 60px',
                padding: '48px 0',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
              className="flex-col md:grid"
            >
              {/* Left: Meta */}
              <div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 9, textTransform: 'uppercase' as const, letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.15)',
                    padding: '4px 10px', display: 'inline-block', marginBottom: 16,
                  }}
                >
                  {exp.type}
                </span>
                <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontSize: 10 }}>
                  {exp.period}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.5 }}>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: 1, transition: 'color 0.2s' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'; }}
                    >
                      {exp.company}
                    </a>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>{exp.company}</span>
                  )}
                  <span style={{ color: 'rgba(255,255,255,0.3)', display: 'block', fontSize: 12, marginTop: 4 }}>
                    📍 {exp.location}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div>
                <h3 className="font-display" style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 600, color: '#FFFFFF', marginBottom: 24, letterSpacing: '-0.5px' }}>
                  {exp.role}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {exp.points.map((point, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                      <span style={{ color: 'rgba(255,255,255,0.3)', marginTop: 2, flexShrink: 0, fontSize: 12 }}>—</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.6)' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
        </div>
      </div>
    </section>
  );
}
