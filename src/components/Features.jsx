const FEATURES = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Rapid Talent Delivery',
    desc: 'Our extensive pre-vetted talent network enables us to deliver qualified shortlists within 48 hours — dramatically reducing your time-to-hire without sacrificing quality.',
    color: '#D42020',
  },
  {
    icon: 'bi-shield-fill-check',
    title: 'Compliance-First Approach',
    desc: 'Every consultant is onboarded with full legal compliance — background checks, I-9 verification, W2/1099 documentation, and state-level regulatory adherence across all US jurisdictions.',
    color: '#1B2F7A',
  },
  {
    icon: 'bi-people-fill',
    title: 'Deep Technical Expertise',
    desc: 'Our recruiting team specialises exclusively in IT talent across Java, .NET, Python, Cloud, DevOps, AI/ML, Cybersecurity, SAP, Salesforce, and Business Analysis — we speak the language of technology.',
    color: '#6B5BA8',
  },
  {
    icon: 'bi-handshake-fill',
    title: 'Long-Term Partnerships',
    desc: 'We build relationships, not just transactions. With dedicated account managers and ongoing consultant support, we become a true extension of your HR and technology teams.',
    color: '#E8782A',
  },
]

export default function Features() {
  return (
    <section className="section" style={{ background: '#fff' }} aria-label="Why Choose SparkPod Technologies for IT Staffing">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="sec-label">01 — Why SparkPod Technologies</span>
          <h2 className="sec-heading">
            The staffing partner that{' '}
            <span className="grad-red">delivers every time</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Built on a foundation of integrity, speed, and deep IT domain knowledge —
            we go beyond résumé matching to deliver talent that truly fits your culture and requirements.
          </p>
        </div>

        <div className="row">
          {FEATURES.map(({ icon, title, desc, color }, i) => (
            <div className={`col-4 fade-up delay-${i + 1}`} key={title}>
              <div style={{
                background: '#fff', border: '1.5px solid #E2E5F0', borderRadius: 16,
                padding: '36px 28px', height: '100%', position: 'relative',
                transition: 'transform .25s, box-shadow .25s, border-color .25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(13,27,74,.12)'
                  e.currentTarget.style.borderColor = color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#E2E5F0'
                }}>
                {/* L-corner accents */}
                <div style={{ position: 'absolute', top: -1.5, left: -1.5, width: 22, height: 22, borderTop: `2.5px solid ${color}`, borderLeft: `2.5px solid ${color}`, borderRadius: '4px 0 0 0' }} />
                <div style={{ position: 'absolute', bottom: -1.5, right: -1.5, width: 22, height: 22, borderBottom: `2.5px solid ${color}`, borderRight: `2.5px solid ${color}`, borderRadius: '0 0 4px 0' }} />

                <div style={{
                  width: 54, height: 54, borderRadius: 14, marginBottom: 20,
                  background: `linear-gradient(135deg, ${color}18, ${color}06)`,
                  border: `1px solid ${color}28`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, color,
                }}>
                  <i className={`bi ${icon}`}></i>
                </div>
                <h4 style={{ fontSize: 16.5, fontWeight: 700, color: '#0C1535', marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 14, lineHeight: 1.68, color: '#4A5473', margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
