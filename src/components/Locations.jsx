const CITIES = [
  { city: 'Austin', state: 'TX', tag: 'HQ', desc: 'Our home base. Deep connections with Austin\'s booming tech ecosystem — from Dell and Oracle campuses to the explosive startup scene along 6th Street and the Domain.' },
  { city: 'Dallas', state: 'TX', tag: '', desc: 'IT staffing for Dallas–Fort Worth\'s financial services, telecom, and healthcare IT sectors. We fill contract and permanent roles across the Metroplex rapidly.' },
  { city: 'Houston', state: 'TX', tag: '', desc: 'Serving Houston\'s energy tech, healthcare systems, and aerospace IT departments with specialised contract, contract-to-hire, and direct placement services.' },
  { city: 'New York', state: 'NY', tag: '', desc: 'Placing Java, .NET, Python, and financial technology professionals across New York City\'s investment banks, fintechs, and enterprise software companies.' },
  { city: 'Chicago', state: 'IL', tag: '', desc: 'Contract and permanent IT staffing for Chicago\'s trading firms, insurance companies, and healthcare networks — with 48-hour shortlist turnarounds.' },
  { city: 'Atlanta', state: 'GA', tag: '', desc: 'Supporting Atlanta\'s growing technology corridor with DevOps, cloud, and data engineering placements for enterprise clients and high-growth startups.' },
  { city: 'Seattle', state: 'WA', tag: '', desc: 'Connecting Seattle\'s cloud-native companies with specialised AWS, Azure, Kubernetes, and software engineering talent on contract and permanent terms.' },
  { city: 'San Jose', state: 'CA', tag: '', desc: 'Silicon Valley IT staffing for product engineering, AI/ML, and platform roles — short-term contracts to full-time placements across Bay Area tech firms.' },
  { city: 'Remote / USA', state: 'All 50 States', tag: 'Nationwide', desc: 'Fully remote staffing across all 50 US states. Our distributed placement capability means geography never limits your access to the best IT talent.' },
]

export default function Locations() {
  return (
    <section
      className="section"
      id="locations"
      aria-label="IT staffing locations — cities and states served by SparkPod Technologies"
      style={{ background: '#fff' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="sec-label">Where We Work</span>
          <h2 className="sec-heading">
            IT staffing across{' '}
            <span className="grad-red">every major US market</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Headquartered in Austin, TX — delivering contract, contract-to-hire, and permanent
            IT staffing solutions to clients in all 50 US states. On-site, hybrid, or fully remote.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="locations-grid fade-up delay-1">
          <style>{`
            @media (max-width: 900px) { .locations-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 520px) { .locations-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {CITIES.map(({ city, state, tag, desc }) => (
            <div
              key={city}
              style={{
                background: tag === 'Nationwide' ? 'linear-gradient(135deg,#0C1535,#1B2F7A)' : '#F5F6FA',
                border: tag === 'HQ' ? '1.5px solid #D42020' : '1.5px solid #E2E5F0',
                borderRadius: 16, padding: '28px 24px',
                position: 'relative', overflow: 'hidden',
                transition: 'transform .22s, box-shadow .22s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(13,27,74,.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
            >
              {tag && (
                <span style={{
                  position: 'absolute', top: 14, right: 14,
                  background: tag === 'HQ' ? '#D42020' : 'rgba(255,255,255,.15)',
                  color: '#fff', fontSize: 9, fontWeight: 800,
                  letterSpacing: '.18em', textTransform: 'uppercase',
                  padding: '3px 10px', borderRadius: 20,
                }}>{tag}</span>
              )}

              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <i className="bi bi-geo-alt-fill" style={{ color: tag === 'Nationwide' ? '#F5A060' : '#D42020', fontSize: 18 }} />
                <div>
                  <strong style={{ fontSize: 16, fontWeight: 800, color: tag === 'Nationwide' ? '#fff' : '#0C1535', display: 'block', lineHeight: 1 }}>{city}</strong>
                  <span style={{ fontSize: 11, fontWeight: 600, color: tag === 'Nationwide' ? 'rgba(255,255,255,.55)' : '#8A93B2', letterSpacing: '.1em' }}>{state}</span>
                </div>
              </div>

              <p style={{ fontSize: 13, lineHeight: 1.65, color: tag === 'Nationwide' ? 'rgba(255,255,255,.6)' : '#4A5473', margin: 0 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up delay-2">
          <p style={{ fontSize: 14, color: '#8A93B2', marginBottom: 0 }}>
            Don't see your city?{' '}
            <a
              href="mailto:jake@sparkpodtech.com"
              style={{ color: '#D42020', fontWeight: 700, textDecoration: 'none' }}
            >
              Contact us
            </a>
            {' '}— we staff IT roles in every US state, including remote-first positions.
          </p>
        </div>
      </div>
    </section>
  )
}