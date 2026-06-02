import iconImg from '../assets/hero.png'

const PILLARS = [
  { icon: 'bi-check2-circle', title: '100% Client-Centric Delivery', desc: 'Every placement decision is anchored in your specific requirements, timelines, and organisational culture — we never cut corners to fill quotas.' },
  { icon: 'bi-shield-fill-check', title: 'Rigorous Compliance & Legal Readiness', desc: 'From I-9 verification to multi-state tax compliance, every engagement is structured to protect your organisation from risk and regulatory liability.' },
  { icon: 'bi-lightning-charge-fill', title: 'Speed Without Compromise', desc: 'Our deep pre-built talent pipelines across all major IT disciplines allow us to respond to urgent requisitions with qualified candidates — not just résumés.' },
]

const STATS = [
  { n: '8+', l: 'Years in US Staffing', c: '#D42020' },
  { n: '500+', l: 'Placements Made', c: '#1B2F7A' },
  { n: '50+', l: 'Active Clients', c: '#6B5BA8' },
  { n: '35+', l: 'US States Covered', c: '#E8782A' },
]

export default function About() {
  return (
    <section className="section section-gray" id="about" aria-label="About SparkPod Technologies — IT Staffing Company in Austin Texas">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: 80, alignItems: 'start' }} className="about-grid">
          <style>{`
            @keyframes spin { to { transform: rotate(360deg); } }
            @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {/* Left — Visual */}
          <div className="fade-up" style={{ position: 'relative' }}>
            {/* Decorative orbital */}
            <div style={{ position: 'absolute', top: -28, left: -28, zIndex: 0, opacity: .1, animation: 'spin 25s linear infinite', pointerEvents: 'none' }}>
              <svg width="180" height="180" viewBox="0 0 180 180">
                <ellipse cx="90" cy="90" rx="82" ry="32" fill="none" stroke="#D42020" strokeWidth="2" transform="rotate(-30 90 90)" strokeDasharray="7 5" />
                <circle cx="90" cy="8" r="5.5" fill="#D42020" />
              </svg>
            </div>

            {/* Offset frame */}
            <div style={{ position: 'absolute', top: -18, left: -18, width: 'calc(100% - 36px)', height: 'calc(100% - 36px)', border: '2px solid #D42020', borderRadius: 20, opacity: .18, zIndex: 0 }} />

            {/* Card */}
            <div style={{
              position: 'relative', zIndex: 1,
              background: 'linear-gradient(150deg, #fff 0%, #fff8f8 100%)',
              borderRadius: 16, border: '1.5px solid #E2E5F0',
              padding: '36px', boxShadow: '0 12px 40px rgba(13,27,74,.07)',
            }}>
              {/* Figure icon prominent */}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
                <img src={iconImg} alt="SparkPod Technologies"
                  style={{ width: 120, height: 'auto', filter: 'drop-shadow(0 8px 24px rgba(212,32,32,.25))' }} />
              </div>

              {/* Stats mini-grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {STATS.map(({ n, l, c }) => (
                  <div key={l} style={{
                    background: '#fff', borderRadius: 12, padding: '18px 16px', textAlign: 'center',
                    border: `1px solid ${c}20`, boxShadow: '0 2px 8px rgba(13,27,74,.05)',
                  }}>
                    <strong style={{ display: 'block', fontSize: 26, fontWeight: 900, color: c, letterSpacing: '-.02em' }}>{n}</strong>
                    <span style={{ fontSize: 10.5, fontWeight: 600, color: '#8A93B2', letterSpacing: '.08em', textTransform: 'uppercase', lineHeight: 1.3, display: 'block', marginTop: 2 }}>{l}</span>
                  </div>
                ))}
              </div>

              {/* Address card */}
              <div style={{
                background: 'linear-gradient(135deg, #0C1535, #1B2F7A)',
                borderRadius: 12, padding: '18px 20px',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
                <i className="bi bi-geo-alt-fill" style={{ color: '#D42020', fontSize: 20, marginTop: 2, flexShrink: 0 }}></i>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.45)', letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 4 }}>Headquarters</p>
                  <p style={{ fontSize: 13.5, color: '#fff', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                    5900 Balcones Drive, STE 100<br />
                    Austin, TX 78731, USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="fade-up delay-2">
            <span className="sec-label">04 — About SparkPod Technologies Inc.</span>
            <h2 className="sec-heading" style={{ marginBottom: 20 }}>
              A Texas-based IT staffing firm built on{' '}
              <span className="grad-red">trust, speed, and expertise.</span>
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#4A5473', marginBottom: 18 }}>
              SparkPod Technologies Inc. is a US-registered IT staffing and recruitment company headquartered in Austin, Texas.
              We specialise in connecting organisations across the United States with highly skilled,
              pre-screened technology professionals for contract, contract-to-hire, and permanent roles.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.78, color: '#4A5473', marginBottom: 28 }}>
              With a strong command of the US staffing landscape — spanning direct clients,
              implementation partners, prime vendors, and Managed Service Providers (MSPs) —
              we help businesses scale their technology teams rapidly while upholding the highest standards
              of quality, compliance, and candidate experience. Our mission is to build lasting,
              transparent relationships where both clients and consultants thrive.
            </p>

            {PILLARS.map(({ icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '15px 0', borderBottom: '1px solid #E2E5F0' }}>
                <div style={{
                  width: 38, height: 38, flexShrink: 0, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D42020, #A8181B)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, color: '#fff', marginTop: 2,
                }}>
                  <i className={`bi ${icon}`}></i>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: '#0C1535', marginBottom: 4 }}>{title}</strong>
                  <span style={{ fontSize: 13.5, color: '#4A5473', lineHeight: 1.58 }}>{desc}</span>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-red" style={{ padding: '14px 32px' }}>
                Partner With Us <i className="bi bi-arrow-right"></i>
              </a>
              <a href="#services" className="btn-outline" style={{ padding: '13px 28px' }}>
                View Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
