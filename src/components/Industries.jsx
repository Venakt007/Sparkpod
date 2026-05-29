const INDUSTRIES = [
  { icon: 'bi-pc-display-horizontal', label: 'Information Technology' },
  { icon: 'bi-heart-pulse', label: 'Healthcare IT' },
  { icon: 'bi-bank', label: 'Finance & Banking' },
  { icon: 'bi-graph-up-arrow', label: 'Telecommunications' },
  { icon: 'bi-umbrella', label: 'Insurance & InsurTech' },
  { icon: 'bi-bag-check', label: 'Retail & E-Commerce' },
  { icon: 'bi-people', label: 'HR & Operations' },
  { icon: 'bi-gear-wide-connected', label: 'Engineering & Manufacturing' },
  { icon: 'bi-shield-lock', label: 'Cybersecurity' },
  { icon: 'bi-building-fill', label: 'Government & Federal' },
]

export default function Industries() {
  const row1 = INDUSTRIES.slice(0, 5)
  const row2 = INDUSTRIES.slice(5)

  return (
    <section className="section section-gray" id="industries">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} className="fade-up">
          <span className="sec-label">02 — Industries We Serve</span>
          <h2 className="sec-heading">
            Deep domain expertise across{' '}
            <span className="grad-red">every major vertical</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Our recruiters are industry-aligned, not generalists. That specialisation means
            we understand the nuanced skill requirements of each sector we serve — and place talent that delivers from day one.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }} className="fade-up delay-1">
          {[row1, row2].map((row, ri) => (
            <div key={ri} style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
              {row.map(({ icon, label }) => (
                <a key={label} href="#contact"
                  style={{
                    width: 140, height: 140, borderRadius: '50%', background: '#fff',
                    border: '1.5px solid #E2E5F0', display: 'flex',
                    flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    gap: 9, textDecoration: 'none', cursor: 'pointer',
                    transition: 'transform .2s, border-color .2s, box-shadow .2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'
                    e.currentTarget.style.borderColor = '#D42020'
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(212,32,32,.18)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = ''
                    e.currentTarget.style.borderColor = '#E2E5F0'
                    e.currentTarget.style.boxShadow = ''
                  }}>
                  <i className={`bi ${icon}`} style={{
                    fontSize: 26,
                    background: 'linear-gradient(135deg, #D42020, #1B2F7A)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}></i>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#0C1535', textAlign: 'center', lineHeight: 1.3, padding: '0 10px' }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
