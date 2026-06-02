import fullLogoImg from '../assets/logo-full.png'

const EMAIL = 'jake@sparkpodtech.com'
const PHONE = '+17322326540'
const PHONE_DISPLAY = '+1 (732) 232-6540'
const MAILTO = `mailto:${EMAIL}?subject=IT%20Staffing%20Requirement%20%E2%80%94%20SparkPod%20Technologies&cc=${EMAIL}&body=Hello%20SparkPod%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20an%20IT%20staffing%20requirement.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%2FSkill%20Required%3A%20%0ALocation%2FRemote%3A%20%0AStart%20Date%3A%20%0A%0AThank%20you%2C`

const LINKS = {
  'Our Services': [
    'Contract Staffing', 'Contract-to-Hire', 'Full-Time Hiring',
    'Remote & Hybrid Staffing', 'Vendor Management', 'Bench Sales',
  ],
  'Company': [
    'About Us', 'Industries', 'Our Process', 'Client Stories', 'Careers', 'Privacy Policy',
  ],
}

const SOCIALS = [
  { icon: 'bi-linkedin', href: '#', label: 'LinkedIn' },
  { icon: 'bi-twitter-x', href: '#', label: 'Twitter / X' },
  { icon: 'bi-instagram', href: '#', label: 'Instagram' },
  { icon: 'bi-facebook', href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#000', padding: '68px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr 1.5fr', gap: 48, marginBottom: 56 }} className="footer-grid">
          <style>{`
            @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 520px) { .footer-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {/* Brand col */}
          <div>
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ display: 'inline-block', marginBottom: 16, textDecoration: 'none' }}>
              <img
                src={fullLogoImg}
                alt="SparkPod Technologies"
                style={{ height: 56, width: 'auto', display: 'block', borderRadius: 8, filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.38)', lineHeight: 1.72, maxWidth: 256, marginBottom: 8 }}>
              A Texas-based US IT staffing company connecting businesses with top technology professionals
              for contract, contract-to-hire, and permanent roles nationwide.
            </p>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.25)', marginBottom: 20 }}>
              Registered: SparkPod Technologies Inc.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map(({ icon, href, label }) => (
                <a key={label} href={href} aria-label={label} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,.14)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, color: 'rgba(255,255,255,.48)', textDecoration: 'none',
                  transition: 'border-color .2s, color .2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#D42020'; e.currentTarget.style.color = '#D42020' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.14)'; e.currentTarget.style.color = 'rgba(255,255,255,.48)' }}>
                  <i className={`bi ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: 18 }}>
                {title}
              </div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#services" style={{ fontSize: 13.5, color: 'rgba(255,255,255,.5)', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#D42020'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.5)'}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,.28)', marginBottom: 18 }}>
              Contact Us
            </div>

            {[
              { icon: 'bi-geo-alt-fill', lines: ['5900 Balcones Drive, STE 100', 'Austin, TX 78731, USA'], href: null },
              { icon: 'bi-envelope-fill', lines: [EMAIL], href: MAILTO },
              { icon: 'bi-telephone-fill', lines: [PHONE_DISPLAY], href: `tel:${PHONE}` },
            ].map(({ icon, lines, href }) => (
              <div key={icon} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                <i className={`bi ${icon}`} style={{ color: '#D42020', fontSize: 14, width: 18, flexShrink: 0, marginTop: 2 }}></i>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', textDecoration: 'none', lineHeight: 1.6, transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.5)'}>
                    {lines.join('\n')}
                  </a>
                ) : (
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,.5)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{lines.join('\n')}</span>
                )}
              </div>
            ))}

            <a href={MAILTO}
              className="btn-red" style={{ marginTop: 8, padding: '11px 22px', fontSize: 13 }}>
              Submit a Requirement <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,.07)', paddingTop: 24,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.26)', margin: 0 }}>
            © 2026 SparkPod Technologies Inc. All rights reserved. ·{' '}
            <a href="#" style={{ color: 'rgba(255,255,255,.38)', textDecoration: 'none' }}>Privacy Policy</a>
            {' '}·{' '}
            <a href="#" style={{ color: 'rgba(255,255,255,.38)', textDecoration: 'none' }}>Terms of Service</a>
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.22)', margin: 0 }}>
            5900 Balcones Drive, STE 100 · Austin, TX 78731 · USA
          </p>
        </div>
      </div>
    </footer>
  )
}
