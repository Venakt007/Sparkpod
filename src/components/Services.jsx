const SERVICES = [
  {
    icon: 'bi-file-earmark-person',
    title: 'Contract Staffing',
    desc: 'On-demand, project-based IT professionals engaged on a fixed-term contract — providing immediate capacity without long-term overhead. Ideal for time-sensitive initiatives and technology transformations.',
    grad: ['#D42020', '#A8181B'],
    tag: 'Most Popular',
  },
  {
    icon: 'bi-arrow-repeat',
    title: 'Contract-to-Hire',
    desc: 'Evaluate a consultant\'s performance and cultural fit during a contract engagement before extending a full-time offer — minimising hiring risk while ensuring the right long-term match.',
    grad: ['#1B2F7A', '#0D1B4A'],
    tag: '',
  },
  {
    icon: 'bi-person-badge-fill',
    title: 'Full-Time / Permanent Hiring',
    desc: 'End-to-end permanent recruitment for senior engineers, architects, and technology leaders. We handle sourcing, screening, technical assessment, and offer management for direct hires.',
    grad: ['#6B5BA8', '#4E4280'],
    tag: '',
  },
  {
    icon: 'bi-wifi',
    title: 'Remote & Hybrid Staffing',
    desc: 'Access high-calibre IT professionals regardless of geography. Our remote and hybrid staffing solutions deliver flexible, distributed teams that integrate seamlessly with your existing workflows.',
    grad: ['#E8782A', '#C0601E'],
    tag: '',
  },
  {
    icon: 'bi-diagram-3-fill',
    title: 'Vendor Management Support',
    desc: 'Comprehensive vendor and MSP programme support — including rate negotiation, compliance management, consolidated reporting, and SLA monitoring to streamline your contingent workforce operations.',
    grad: ['#3D6AB5', '#1B2F7A'],
    tag: '',
  },
  {
    icon: 'bi-megaphone-fill',
    title: 'Bench Sales & Consultant Marketing',
    desc: 'Proactive bench sales services that market your available IT consultants to a wide network of direct clients, prime vendors, and implementation partners — reducing bench time and maximising utilisation.',
    grad: ['#D42020', '#6B5BA8'],
    tag: '',
  },
]

export default function Services() {
  return (
    <section className="section" style={{ background: '#fff' }} id="services">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="sec-label">03 — Our Services</span>
          <h2 className="sec-heading">
            End-to-end IT staffing{' '}
            <span className="grad-red">solutions</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            From urgent contract placements to strategic permanent hires and bench marketing —
            SparkPod Technologies provides the full spectrum of IT workforce solutions tailored to your business needs.
          </p>
        </div>

        <div className="row">
          {SERVICES.map(({ icon, title, desc, grad, tag }, i) => (
            <div className={`col-3 fade-up delay-${(i % 3) + 1}`} key={title}>
              <div style={{
                background: '#fff', border: '1.5px solid #E2E5F0', borderRadius: 20,
                padding: '40px 28px', textAlign: 'center', height: '100%',
                position: 'relative',
                transition: 'transform .25s, box-shadow .25s, border-color .25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(13,27,74,.14)'
                  e.currentTarget.style.borderColor = grad[0]
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = ''
                  e.currentTarget.style.boxShadow = ''
                  e.currentTarget.style.borderColor = '#E2E5F0'
                }}>
                {tag && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: '#D42020', color: '#fff',
                    fontSize: 10, fontWeight: 700, letterSpacing: '.15em', textTransform: 'uppercase',
                    padding: '4px 14px', borderRadius: 20,
                  }}>{tag}</div>
                )}
                <div style={{
                  width: 76, height: 76, borderRadius: '50%', margin: '0 auto 24px',
                  background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, color: '#fff',
                  boxShadow: `0 8px 28px ${grad[0]}44`,
                }}>
                  <i className={`bi ${icon}`}></i>
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, color: '#0C1535', marginBottom: 12 }}>{title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.72, color: '#4A5473', margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ marginTop: 60, textAlign: 'center' }} className="fade-up delay-2">
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8A93B2', marginBottom: 18 }}>
            Technologies We Recruit For
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', maxWidth: 820, margin: '0 auto' }}>
            {['Java', '.NET', 'Python', 'DevOps', 'Cloud (AWS/Azure/GCP)', 'Data Engineering', 'QA Automation', 'Cybersecurity', 'SAP', 'Salesforce', 'AI / ML', 'Business Analysis', 'Scrum / Agile', 'React / Angular', 'Node.js', 'Kubernetes', 'Terraform'].map(t => (
              <span key={t} style={{
                fontSize: 12.5, fontWeight: 600, color: '#4A5473',
                background: '#F5F6FA', border: '1px solid #E2E5F0',
                padding: '6px 14px', borderRadius: 20,
                transition: 'border-color .2s, color .2s',
                cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D42020'; e.currentTarget.style.color = '#D42020' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E5F0'; e.currentTarget.style.color = '#4A5473' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
