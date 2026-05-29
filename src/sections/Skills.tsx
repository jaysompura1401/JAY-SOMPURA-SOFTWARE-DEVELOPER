import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const skillCategories = [
  {
    label: '01',
    category: 'FRONTEND',
    skills: [
      { name: 'HTML5',       icon: `${iconBase}/html5/html5-original.svg`,           glow: '#E34F26' },
      { name: 'CSS3',        icon: `${iconBase}/css3/css3-original.svg`,             glow: '#1572B6' },
      { name: 'JavaScript',  icon: `${iconBase}/javascript/javascript-original.svg`, glow: '#F7DF1E' },
      { name: 'React.js',    icon: `${iconBase}/react/react-original.svg`,           glow: '#61DAFB' },
      { name: 'Bootstrap',   icon: `${iconBase}/bootstrap/bootstrap-original.svg`,   glow: '#7952B3' },
    ],
  },
  {
    label: '02',
    category: 'BACKEND',
    skills: [
      { name: 'Python', icon: `${iconBase}/python/python-original.svg`,  glow: '#3776AB' },
      { name: 'Django', icon: `${iconBase}/django/django-plain.svg`,     glow: '#44B78B', invert: true },
      { name: 'MySQL',  icon: `${iconBase}/mysql/mysql-original.svg`,    glow: '#4479A1' },
    ],
  },
  {
    label: '03',
    category: 'CMS & TOOLS',
    skills: [
      { name: 'WordPress', icon: `${iconBase}/wordpress/wordpress-plain.svg`, glow: '#21759B', invert: true },
      { name: 'Git',       icon: `${iconBase}/git/git-original.svg`,          glow: '#F05032' },
      { name: 'GitHub',    icon: `${iconBase}/github/github-original.svg`,    glow: '#a0a0ff', invert: true },
      { name: 'Figma',     icon: `${iconBase}/figma/figma-original.svg`,      glow: '#F24E1E' },
    ],
  },
  {
    label: '04',
    category: 'CONCEPTS',
    skills: [
      { name: 'Responsive Design',      icon: `${iconBase}/css3/css3-original.svg`,             glow: '#1572B6' },
      { name: 'UI/UX',                  icon: `${iconBase}/figma/figma-original.svg`,            glow: '#F24E1E' },
      { name: 'Cross-browser',          icon: `${iconBase}/chrome/chrome-original.svg`,          glow: '#4285F4' },
      { name: 'Component Architecture', icon: `${iconBase}/react/react-original.svg`,            glow: '#61DAFB' },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
        }
      );
      const cards = cardsRef.current?.querySelectorAll('.skill-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      style={{ backgroundColor: '#0A0A0A', padding: 'clamp(60px, 10vw, 100px) 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px, 5vw, 40px)' }}>
        <div ref={headingRef}>
          <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>TECHNICAL EXPERTISE</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FFFFFF', letterSpacing: '-2px', marginBottom: 80, lineHeight: 1 }}>
            • SKILLS
          </h2>
        </div>

        <div
          ref={cardsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.06)' }}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="skill-card"
              style={{ background: '#0A0A0A', padding: '44px 40px', display: 'flex', flexDirection: 'column', gap: 0, transition: 'background 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#141414'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0A0A0A'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 36 }}>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.5px' }}>
                  {cat.category}
                </h3>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.08em' }}>
                  {cat.label}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                {cat.skills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} glow={skill.glow} invert={skill.invert} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 60, display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {['Responsive Web Design', 'UI/UX Implementation', 'Figma to Code', 'Component Architecture', 'Cross-browser Compatibility', 'REST APIs', 'Version Control'].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.12em',
                border: '1px solid rgba(255,255,255,0.12)', padding: '6px 14px',
                color: 'rgba(255,255,255,0.4)', borderRadius: 2,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name, icon, glow, invert }: { name: string; icon: string; glow: string; invert?: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 60 }}>
      <div
        ref={boxRef}
        title={name}
        style={{
          width: 48, height: 48, borderRadius: 10,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s',
          cursor: 'default',
        }}
        onMouseEnter={() => {
          if (boxRef.current) {
            boxRef.current.style.background = `${glow}22`;
            boxRef.current.style.borderColor = `${glow}88`;
            boxRef.current.style.transform = 'translateY(-4px)';
            boxRef.current.style.boxShadow = `0 8px 24px ${glow}55`;
          }
          if (imgRef.current) {
            imgRef.current.style.filter = invert ? 'brightness(0) invert(1)' : 'none';
          }
        }}
        onMouseLeave={() => {
          if (boxRef.current) {
            boxRef.current.style.background = 'rgba(255,255,255,0.06)';
            boxRef.current.style.borderColor = 'rgba(255,255,255,0.1)';
            boxRef.current.style.transform = 'translateY(0)';
            boxRef.current.style.boxShadow = 'none';
          }
          if (imgRef.current) {
            imgRef.current.style.filter = invert ? 'brightness(0) invert(1)' : 'none';
          }
        }}
      >
        <img
          ref={imgRef}
          src={icon}
          alt={name}
          style={{ width: 28, height: 28, objectFit: 'contain', filter: invert ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.25s' }}
        />
      </div>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: 'rgba(255,255,255,0.45)', textAlign: 'center', letterSpacing: '0.03em', lineHeight: 1.2 }}>
        {name}
      </span>
    </div>
  );
}
