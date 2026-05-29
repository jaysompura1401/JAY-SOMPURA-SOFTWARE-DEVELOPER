import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const services = [
  {
    title: 'FRONTEND DEVELOPMENT',
    description:
      'Building modern, responsive web interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap. Pixel-perfect Figma-to-code conversions with cross-browser compatibility.',
    icons: [
      { src: `${iconBase}/html5/html5-original.svg`,           label: 'HTML5',     glow: '#E34F26' },
      { src: `${iconBase}/css3/css3-original.svg`,             label: 'CSS3',      glow: '#1572B6' },
      { src: `${iconBase}/javascript/javascript-original.svg`, label: 'JS',        glow: '#F7DF1E' },
      { src: `${iconBase}/react/react-original.svg`,           label: 'React',     glow: '#61DAFB' },
      { src: `${iconBase}/bootstrap/bootstrap-original.svg`,   label: 'Bootstrap', glow: '#7952B3' },
    ],
  },
  {
    title: 'PYTHON & DJANGO',
    description:
      'Full stack web development with Python and Django — dynamic pages, database integration with MySQL, and clean backend architecture.',
    icons: [
      { src: `${iconBase}/python/python-original.svg`, label: 'Python', glow: '#3776AB' },
      { src: `${iconBase}/django/django-plain.svg`,    label: 'Django', glow: '#44B78B', invert: true },
      { src: `${iconBase}/mysql/mysql-original.svg`,   label: 'MySQL',  glow: '#4479A1' },
    ],
  },
  {
    title: 'WORDPRESS DEVELOPMENT',
    description:
      'Custom WordPress website setup, theme customisation, and content management tailored to client requirements.',
    icons: [
      { src: `${iconBase}/wordpress/wordpress-plain.svg`, label: 'WordPress', glow: '#21759B', invert: true },
      { src: `${iconBase}/php/php-original.svg`,           label: 'PHP',       glow: '#777BB4' },
      { src: `${iconBase}/css3/css3-original.svg`,         label: 'CSS3',      glow: '#1572B6' },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } });
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" style={{ backgroundColor: '#FAF7F2', padding: 'clamp(60px, 10vw, 80px) 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px, 5vw, 40px)' }}>
        <h2 ref={headingRef} className="font-display text-center" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#0F0F0F', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          WHAT I DO
        </h2>

        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card"
              style={{ 
                background: 'linear-gradient(145deg, #161616 0%, #0a0a0a 100%)', 
                border: '1px solid rgba(255,255,255,0.03)',
                padding: '40px 32px', 
                minHeight: 320, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                borderRadius: 16, 
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
              }}
              onMouseEnter={(e) => { 
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-10px)'; 
                el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                el.style.borderColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => { 
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)'; 
                el.style.boxShadow = 'none';
                el.style.borderColor = 'rgba(255,255,255,0.03)';
              }}
            >
              <div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 600, color: '#FFFFFF', letterSpacing: '-0.5px', marginBottom: 16 }}>
                  {service.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.55)' }}>
                  {service.description}
                </p>
              </div>

              {/* Tech icon row */}
              <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
                {service.icons.map((icon) => (
                  <ServiceIcon key={icon.label} src={icon.src} label={icon.label} glow={icon.glow} invert={icon.invert} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ src, label, glow, invert }: { src: string; label: string; glow: string; invert?: boolean }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div
      ref={boxRef}
      title={label}
      style={{
        width: 40, height: 40, borderRadius: 8,
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s, border-color 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={() => {
        if (boxRef.current) {
          boxRef.current.style.background = `${glow}22`;
          boxRef.current.style.borderColor = `${glow}88`;
          boxRef.current.style.transform = 'scale(1.15)';
          boxRef.current.style.boxShadow = `0 6px 20px ${glow}55`;
        }
        if (imgRef.current) imgRef.current.style.filter = invert ? 'brightness(0) invert(1)' : 'none';
      }}
      onMouseLeave={() => {
        if (boxRef.current) {
          boxRef.current.style.background = 'rgba(255,255,255,0.08)';
          boxRef.current.style.borderColor = 'rgba(255,255,255,0.12)';
          boxRef.current.style.transform = 'scale(1)';
          boxRef.current.style.boxShadow = 'none';
        }
        if (imgRef.current) imgRef.current.style.filter = invert ? 'brightness(0) invert(1)' : 'none';
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={label}
        style={{ width: 22, height: 22, objectFit: 'contain', filter: invert ? 'brightness(0) invert(1)' : 'none', transition: 'filter 0.2s' }}
      />
    </div>
  );
}
