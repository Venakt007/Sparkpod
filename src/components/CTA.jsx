const EMAIL = 'jake@sparkpodtech.com'
const PHONE = '+17322326540'
const PHONE_DISPLAY = '+1 (732) 232-6540'
const MAILTO = `mailto:${EMAIL}?subject=IT%20Staffing%20Requirement%20%E2%80%94%20SparkPod%20Technologies&cc=${EMAIL}&body=Hello%20SparkPod%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20an%20IT%20staffing%20requirement.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%2FSkill%20Required%3A%20%0ALocation%2FRemote%3A%20%0AStart%20Date%3A%20%0A%0AThank%20you%2C`

export default function CTA() {
  return (
    <section className="section" id="contact" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      {/* Watermark */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        fontSize: 'clamp(52px, 10vw, 110px)', fontWeight: 900, color: '#F5F6FA',
        letterSpacing: '-.04em', lineHeight: .9, userSelect: 'none', pointerEvents: 'none',
        whiteSpace: 'nowrap', zIndex: 0,
      }}>
        LET'S CONNECT
      </div>

      {/* Orbital deco */}
      <div style={{ position: 'absolute', top: -70, right: -70, zIndex: 0, opacity: .07, animation: 'spin 32s linear infinite' }}>
        <svg width="320" height="320" viewBox="0 0 320 320">
          <ellipse cx="160" cy="160" rx="144" ry="58" fill="none" stroke="#D42020" strokeWidth="2.5"
            transform="rotate(-25 160 160)" strokeDasharray="8 6" />
          <circle cx="160" cy="16" r="9" fill="#D42020" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }} className="fade-up">
          <span className="sec-label" style={{ justifyContent: 'center', marginBottom: 20 }}>07 — Get In Touch</span>
          <h2 className="sec-heading" style={{ marginBottom: 16 }}>
            Ready to build your{' '}
            <span className="serif-italic" style={{ color: '#D42020' }}>ideal</span>
            {' '}IT team?
          </h2>
          <p className="sec-sub" style={{ textAlign: 'center', margin: '0 auto 44px' }}>
            Whether you have an urgent IT requirement, need to scale your technology workforce,
            or are exploring long-term staffing partnerships — our team is ready to respond within hours.
            Submit your requirement and receive a qualified shortlist in 48 hours, guaranteed.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
            <a href={MAILTO} className="btn-red" style={{ padding: '15px 36px', fontSize: 15 }}>
              Submit a Requirement <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href={`tel:${PHONE}`} className="btn-outline" style={{ padding: '14px 32px', fontSize: 15 }}>
              <i className="bi bi-telephone"></i> Call Us Now
            </a>
          </div>

          {/* Contact cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 580, margin: '0 auto' }}
            className="contact-grid">
            <style>{`@media (max-width: 580px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>

            {[
              { icon: 'bi-envelope-fill', label: 'Email Us', value: EMAIL, href: MAILTO },
              { icon: 'bi-telephone-fill', label: 'Call Us', value: PHONE_DISPLAY, href: `tel:${PHONE}` },
              { icon: 'bi-geo-alt-fill', label: 'Office', value: '5900 Balcones Dr, STE 100\nAustin, TX 78731', href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} style={{
                background: '#F5F6FA', border: '1.5px solid #E2E5F0', borderRadius: 16,
                padding: '24px 18px', textAlign: 'center',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', margin: '0 auto 14px',
                  background: 'linear-gradient(135deg, #D42020, #A8181B)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, color: '#fff',
                }}>
                  <i className={`bi ${icon}`}></i>
                </div>
                <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8A93B2', marginBottom: 6 }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontSize: 13, color: '#0C1535', fontWeight: 600, textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}>{value}</a>
                ) : (
                  <span style={{ fontSize: 13, color: '#0C1535', fontWeight: 600, whiteSpace: 'pre-line', lineHeight: 1.55, display: 'block' }}>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
