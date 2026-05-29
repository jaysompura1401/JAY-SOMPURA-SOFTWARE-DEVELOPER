export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#101010', padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px) 40px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 60, marginBottom: 80 }}>

        {/* Brand */}
        <div>
          <div className="font-mono-label" style={{ color: '#FFFFFF', marginBottom: 16 }}>JAY SOMPURA</div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.5, color: 'rgba(255, 255, 255, 0.6)' }}>
            Frontend Developer & Web Designer based in Ahmedabad.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="font-mono-label" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: 20 }}>NAVIGATION</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[{ label: 'Work', id: 'work' }, { label: 'About', id: 'about' }, { label: 'Skills', id: 'services' }, { label: 'Contact', id: 'contact' }].map((link) => (
              <li key={link.id} style={{ marginBottom: 12 }}>
                <a href={`#${link.id}`} style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', cursor: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'; }}
                  onClick={(e) => { e.preventDefault(); document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }); }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-mono-label" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: 20 }}>CONTACT</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: '8306929541', href: 'tel:8306929541' },
              { label: 'jaysompura2002@gmail.com', href: 'mailto:jaysompura2002@gmail.com' },
            ].map((item) => (
              <li key={item.label} style={{ marginBottom: 12 }}>
                <a href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', cursor: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'; }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social / Links */}
        <div>
          <div className="font-mono-label" style={{ color: 'rgba(255, 255, 255, 0.6)', marginBottom: 20 }}>LINKS</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jay-sompura-951377230/' },
              { label: 'GitHub', href: 'https://github.com/JaySompura' },
              { label: 'Live Portfolio (Django)', href: 'https://jaysompura.pythonanywhere.com/' },
              { label: 'QuickSewa Project', href: 'https://quicksewa.netlify.app/' },
            ].map((social) => (
              <li key={social.label} style={{ marginBottom: 12 }}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: 'rgba(255, 255, 255, 0.6)', textDecoration: 'none', cursor: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FFFFFF'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'; }}>
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: 24, textAlign: 'center' }}>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: 'rgba(255, 255, 255, 0.4)' }}>
          © 2026 Jay Sompura. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
