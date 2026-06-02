const MAILTO = `mailto:jake@sparkpodtech.com?subject=IT%20Staffing%20Requirement%20%E2%80%94%20SparkPod%20Technologies&cc=jake@sparkpodtech.com&body=Hello%20SparkPod%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20an%20IT%20staffing%20requirement.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%2FSkill%20Required%3A%20%0ALocation%2FRemote%3A%20%0AStart%20Date%3A%20%0A%0AThank%20you%2C`

const SERVICES = [
  {
    id: 'contract-staffing',
    icon: 'bi-file-earmark-person-fill',
    color: '#D42020',
    title: 'Contract IT Staffing',
    tagline: 'On-demand tech talent. No long-term overhead.',
    description: 'Our contract IT staffing service connects Austin-area and nationwide businesses with pre-vetted technology professionals on a fixed-term basis. Whether you need a Java developer for a 6-month digital transformation or a DevOps engineer for a cloud migration sprint, SparkPod Technologies delivers qualified candidates within 48 hours — fully compliant, W2 or C2C, ready to contribute from day one.',
    bullets: [
      '48-hour shortlist guarantee for urgent requisitions',
      'W2, C2C, and 1099 engagement structures available',
      'Multi-state compliance and I-9 verification included',
      'Roles filled: Java, .NET, Python, Cloud, DevOps, QA, Data Engineering, AI/ML',
    ],
    keywords: 'Contract IT staffing Austin TX, short-term IT contractors, technology contract staffing',
  },
  {
    id: 'contract-to-hire',
    icon: 'bi-arrow-repeat',
    color: '#1B2F7A',
    title: 'Contract-to-Hire Staffing',
    tagline: 'Evaluate talent before you commit.',
    description: 'Reduce permanent hiring risk with SparkPod\'s contract-to-hire model. Engage a technology professional on a contract basis, assess their technical skills, team fit, and delivery quality over a defined trial period, then convert them to a full-time employee with confidence. Ideal for organisations that need immediate capacity while maintaining the option to build long-term team strength.',
    bullets: [
      'Trial periods of 30, 60, or 90 days — fully flexible',
      'Seamless conversion to direct employee at end of contract',
      'No placement fee charged on conversion after qualifying period',
      'Covers senior engineers, architects, scrum masters, and tech leads',
    ],
    keywords: 'Contract-to-hire IT staffing, temp-to-perm technology roles, try-before-you-hire IT',
  },
  {
    id: 'permanent-hiring',
    icon: 'bi-person-badge-fill',
    title: 'Full-Time IT Recruitment',
    color: '#6B5BA8',
    tagline: 'End-to-end permanent placement for critical tech roles.',
    description: 'SparkPod Technologies handles the full permanent recruitment lifecycle — from job scoping and sourcing to technical assessment, reference checks, offer management, and onboarding coordination. We specialise in placing senior software engineers, cloud architects, data scientists, cybersecurity professionals, and technology leaders across the United States, with a focus on cultural fit and long-term retention.',
    bullets: [
      'Dedicated technical recruiter assigned to every search',
      'Multi-channel sourcing: LinkedIn, referrals, proprietary talent pools',
      'Structured technical screening before any submission',
      'Typical time-to-fill: 10–21 business days for senior roles',
    ],
    keywords: 'Permanent IT recruitment Austin TX, full-time technology hiring, software engineer recruitment USA',
  },
  {
    id: 'remote-hybrid-staffing',
    icon: 'bi-wifi',
    color: '#E8782A',
    title: 'Remote & Hybrid IT Staffing',
    tagline: 'Location-independent talent for distributed teams.',
    description: 'Geography is no longer a constraint. SparkPod Technologies places high-calibre IT professionals in fully remote and hybrid roles across all 50 US states. Our remote staffing solutions are designed for organisations building distributed engineering teams, supporting work-from-anywhere policies, or accessing specialised skills unavailable locally in markets like Austin, Dallas, Houston, or New York.',
    bullets: [
      'Candidates screened specifically for remote work readiness',
      'Time-zone aligned shortlisting for seamless collaboration',
      'All 50 US states covered — including niche tech markets',
      'Strong bench across cloud-native, SaaS, and platform engineering roles',
    ],
    keywords: 'Remote IT staffing USA, hybrid technology staffing, work from home IT jobs placement',
  },
]

export default function ServiceDetail() {
  return (
    <section
      className="section section-gray"
      id="service-detail"
      aria-label="Detailed IT staffing services — SparkPod Technologies Austin TX"
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="fade-up">
          <span className="sec-label">Deep Dive — Our Core Services</span>
          <h2 className="sec-heading">
            IT staffing solutions built for{' '}
            <span className="grad-red">every hiring scenario</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            From urgent contract placements to permanent technology leadership hires — SparkPod
            Technologies provides specialised IT staffing services tailored to your timeline,
            budget, and workforce strategy across the United States.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {SERVICES.map(({ id, icon, color, title, tagline, description, bullets }, i) => (
            <article
              key={id}
              id={id}
              className={`fade-up delay-${(i % 3) + 1}`}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '2fr 1fr' : '1fr 2fr',
                gap: 48,
                alignItems: 'center',
                background: '#fff',
                border: '1.5px solid #E2E5F0',
                borderRadius: 20,
                padding: '44px 48px',
                borderLeft: `4px solid ${color}`,
              }}
              className={`service-article fade-up delay-${(i % 3) + 1}`}
            >
              <style>{`
                @media (max-width: 860px) { .service-article { grid-template-columns: 1fr !important; padding: 32px 24px !important; } }
              `}</style>

              {/* Text side */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  marginBottom: 16,
                  background: `${color}12`, border: `1px solid ${color}28`,
                  borderRadius: 30, padding: '6px 16px',
                  fontSize: 11, fontWeight: 700, letterSpacing: '.18em',
                  textTransform: 'uppercase', color,
                }}>
                  <i className={`bi ${icon}`} />
                  {title}
                </div>

                <h3 style={{
                  fontSize: 'clamp(20px, 2.4vw, 28px)', fontWeight: 800,
                  color: '#0C1535', lineHeight: 1.2, marginBottom: 10,
                }}>
                  {tagline}
                </h3>

                <p style={{ fontSize: 15, lineHeight: 1.78, color: '#4A5473', marginBottom: 24 }}>
                  {description}
                </p>

                <ul style={{ padding: 0, margin: '0 0 28px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {bullets.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#4A5473' }}>
                      <i className="bi bi-check-circle-fill" style={{ color, fontSize: 16, flexShrink: 0, marginTop: 1 }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <a href={MAILTO} className="btn-red" style={{ padding: '12px 28px', fontSize: 13.5 }}>
                  Request {title} <i className="bi bi-arrow-up-right" />
                </a>
              </div>

              {/* Icon panel */}
              <div style={{
                order: i % 2 === 0 ? 1 : 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `linear-gradient(135deg, ${color}10, ${color}05)`,
                borderRadius: 16, minHeight: 220,
                border: `1px solid ${color}18`,
              }}>
                <i className={`bi ${icon}`} style={{
                  fontSize: 80, color,
                  opacity: .18,
                }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}