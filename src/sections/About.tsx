import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } }
      );
      gsap.fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none none' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    'HTML5', 'CSS3', 'JavaScript (ES6)', 'Bootstrap', 'React.js',
    'Python', 'Django', 'MySQL', 'WordPress', 'Git & GitHub',
    'Figma to Code', 'Responsive Design', 'UI/UX Implementation',
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{ backgroundColor: '#101010', padding: '100px 0', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div
        style={{ maxWidth: 1440, margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', padding: '0 clamp(20px, 5vw, 40px)' }}
        className="flex-col md:flex-row gap-10 md:gap-20"
      >
        {/* ── Text ── */}
        <div ref={textRef} className="w-full md:w-[55%]">
          <div className="font-mono-label" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
            ABOUT ME
          </div>

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 600, lineHeight: 1.15, color: '#FFFFFF', marginBottom: 28 }}
          >
            A SOFTWARE DEVELOPER DRIVEN BY CLEAN CODE AND GREAT USER EXPERIENCE.
          </h2>

          <p
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 520, marginBottom: 12 }}
          >
            I'm <strong style={{ color: '#fff' }}>Jay Sompura</strong> — a passionate and detail-oriented Software Developer
            based in <strong style={{ color: '#fff' }}>Ahmedabad, Gujarat</strong> with hands-on experience in building
            responsive, user-friendly, and scalable web applications from development to live deployment.
          </p>
          <p
            style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', maxWidth: 520, marginBottom: 32 }}
          >
            Skilled in frontend development, Figma to Code conversion, WordPress customisation,
            and modern UI/UX implementation. Currently working at{' '}
            <a
              href="https://keyannatech.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.35)', paddingBottom: 1 }}
            >
              Keyanna Technology Pvt. Ltd.
            </a>
          </p>

          {/* Skills chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontFamily: "'Space Mono', monospace", fontSize: 10, textTransform: 'uppercase',
                  letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.2)',
                  padding: '6px 12px', color: 'rgba(255,255,255,0.7)', borderRadius: 2,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.6)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Contact links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 36 }}>
            {[
              { label: '📍 Ahmedabad, Gujarat', href: '' },
              { label: '📞 +91 8306929541', href: 'tel:+918306929541' },
              { label: '📧 jaysompura2002@gmail.com', href: 'mailto:jaysompura2002@gmail.com' },
              { label: '💼 LinkedIn: JaySompura', href: 'https://www.linkedin.com/in/jay-sompura-951377230/' },
            ].map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s', cursor: 'none' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                >
                  {item.label}
                </a>
              ) : (
                <span key={item.label} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
                  {item.label}
                </span>
              )
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 500,
              color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em',
              textDecoration: 'none', cursor: 'none',
            }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GET IN TOUCH
            <ArrowRight size={16} />
          </a>
        </div>

        {/* ── Image ── */}
        <div ref={imageRef} className="w-full md:w-[40%]">
          <img
            src="/images/about-portrait.jpg"
            alt="Jay Sompura"
            style={{ width: '100%', maxHeight: '70vh', objectFit: 'cover', objectPosition: 'center top', borderRadius: 4 }}
          />
        </div>
      </div>
    </section>
  );
}
