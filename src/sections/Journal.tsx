import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface JournalProps {
  onSetCursor: (text: string, isHovering: boolean) => void;
}

export default function Journal({ onSetCursor }: JournalProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.journal-card');
      if (cards) {
        gsap.fromTo(cards, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1, scrollTrigger: { trigger: cardsRef.current, start: 'top 80%', toggleActions: 'play none none none' } });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const articles = [
    { image: '/images/article-1.jpg', title: 'FIGMA TO CODE: MY WORKFLOW', date: 'MAY 2026', desc: 'How I translate design files into pixel-perfect HTML/CSS with zero guesswork.' },
    { image: '/images/article-2.jpg', title: 'BUILDING REUSABLE REACT COMPONENTS', date: 'APRIL 2026', desc: 'Best practices I follow to keep component libraries clean and maintainable.' },
    { image: '/images/article-3.jpg', title: 'RESPONSIVE DESIGN ESSENTIALS', date: 'MARCH 2026', desc: 'The mobile-first techniques that make every project screen-size agnostic.' },
  ];

  return (
    <section ref={sectionRef} id="journal" style={{ backgroundColor: '#FAF7F2', padding: 'clamp(80px, 15vw, 160px) clamp(20px, 5vw, 40px)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div className="font-mono-label" style={{ color: 'rgba(15, 15, 15, 0.6)', marginBottom: 16 }}>JOURNAL</div>
        <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 700, color: '#0F0F0F', marginBottom: 80 }}>LATEST THOUGHTS</h2>

        <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {articles.map((article) => (
            <div key={article.title} className="journal-card" onMouseEnter={() => onSetCursor('OPEN', true)} onMouseLeave={() => onSetCursor('', false)}>
              <div style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: 4, marginBottom: 20 }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)'; }} />
              </div>
              <div className="font-mono-label" style={{ color: 'rgba(15, 15, 15, 0.5)', marginBottom: 12 }}>{article.date}</div>
              <h3 className="font-display" style={{ fontSize: 20, fontWeight: 600, color: '#0F0F0F', lineHeight: 1.2, marginBottom: 8, letterSpacing: '-0.5px' }}>{article.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(15,15,15,0.6)', lineHeight: 1.5, marginBottom: 16 }}>{article.desc}</p>
              <a href="#" className="inline-flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500, color: '#0F0F0F', textDecoration: 'none', cursor: 'none' }}>
                READ ARTICLE <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
