import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  onSetCursor: (text: string, isHovering: boolean) => void;
}

const projects = [
  {
    image: '/images/project-1.jpg',
    title: 'PORTFOLIO',
    category: 'DJANGO · PYTHON · BOOTSTRAP',
    description: 'Personal portfolio built with Python & Django featuring dynamic pages, responsive design, and a clean modern UI.',
    link: 'https://jaysompura.pythonanywhere.com/',
    hasImage: true,
  },
  {
    image: '/images/quicksewa.png',
    title: 'QUICKSEWA',
    category: 'HTML · CSS · JAVASCRIPT · BOOTSTRAP',
    description: 'Service booking website for a local business with structured sections, user-friendly interface, and full mobile responsiveness.',
    link: 'https://quicksewa.netlify.app/',
    hasImage: true,
  },
  {
    image: '/images/keyanna.png',
    title: 'KEYANNA TECH',
    category: 'HTML · CSS · JS · REACT · WORDPRESS',
    description: 'Developed and maintained live company websites & internal modules. Converted Figma designs to pixel-perfect responsive webpages and customised WordPress sites.',
    link: 'https://keyannatech.com/',
    hasImage: true,
  },
  {
    image: '/images/nivtrix.png',
    title: 'NIVTRIX',
    category: 'HTML · CSS · JAVASCRIPT · REACT · BOOTSTRAP',
    description: 'Frontend of the Nivtrix telecom & fintech platform — responsive UI dashboards, scalable components, live deployment and production updates.',
    link: 'https://nivtrix.com/',
    hasImage: true,
  },
];

export default function Work({ onSetCursor }: WorkProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.work-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { scale: 0.92, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.12,
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{ backgroundColor: '#101010', padding: 'clamp(60px, 10vw, 80px) 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', width: '100%', padding: '0 clamp(20px, 5vw, 40px)' }}>
        <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>SELECTED PROJECTS</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#FFFFFF', marginBottom: 60, letterSpacing: '-2px' }}>
          MY WORK
        </h2>

        <div
          ref={cardsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}
        >
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
              style={{ position: 'relative', display: 'block', textDecoration: 'none' }}
              onMouseEnter={() => onSetCursor('VIEW', true)}
              onMouseLeave={() => onSetCursor('', false)}
            >
              {/* Image or styled placeholder */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  borderRadius: 6,
                  background: project.hasImage ? 'transparent' : (project.accent || '#111'),
                }}
              >
                {project.hasImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease', display: 'block' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)'; }}
                  />
                ) : (
                  /* Gradient placeholder for company projects */
                  <div
                    style={{
                      width: '100%', height: '100%',
                      background: `linear-gradient(135deg, ${project.accent}ee 0%, #0a0a0a 100%)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                  >
                    <span
                      className="font-display"
                      style={{ fontSize: 'clamp(14px, 2vw, 22px)', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}
                    >
                      {project.link.replace('https://', '').replace('/', '')}
                    </span>
                  </div>
                )}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 30%, transparent 100%)' }} />
                <div
                  className="font-display"
                  style={{ position: 'absolute', bottom: 20, left: 20, fontSize: 'clamp(24px, 3vw, 44px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-1.5px', color: '#FFFFFF', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
                >
                  {project.title}
                </div>
              </div>

              {/* Meta */}
              <div style={{ marginTop: 18 }}>
                <span className="font-mono-label" style={{ color: 'rgba(255,255,255,0.6)' }}>{project.category}</span>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,0.5)', marginTop: 8, marginBottom: 14 }}>
                  {project.description}
                </p>
                <span
                  className="inline-flex items-center gap-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#FFFFFF', cursor: 'none' }}
                >
                  VIEW PROJECT {project.hasImage ? <ArrowRight size={14} /> : <ExternalLink size={13} />}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
