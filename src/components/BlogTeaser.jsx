const ARTICLES = [
  {
    category: 'IT Staffing Guide',
    title: 'Contract vs. Contract-to-Hire vs. Permanent IT Staffing: Which is Right for Your Business?',
    excerpt: 'Understanding the differences between contract, contract-to-hire, and permanent IT staffing models can save your company time, money, and costly mis-hires. We break down the pros, cons, and ideal use cases for each engagement type.',
    readTime: '5 min read',
    icon: 'bi-file-earmark-text',
    color: '#D42020',
    slug: 'contract-vs-permanent-it-staffing',
  },
  {
    category: 'Hiring in Austin TX',
    title: 'How to Hire a Java Developer in Austin, TX: Salaries, Market Trends & Timelines',
    excerpt: 'Austin\'s technology job market is competitive. This guide covers 2025 Java developer salary benchmarks in Austin, average time-to-hire, and how partnering with a local IT staffing agency cuts your search from weeks to 48 hours.',
    readTime: '6 min read',
    icon: 'bi-laptop',
    color: '#1B2F7A',
    slug: 'hire-java-developer-austin-tx',
  },
  {
    category: 'Cloud & DevOps',
    title: 'Top 10 DevOps Skills Employers Are Looking for in 2025 (and How to Find Them Fast)',
    excerpt: 'Kubernetes, Terraform, CI/CD pipelines, and cloud-native expertise top the list of in-demand DevOps competencies. Learn what skills to prioritise when staffing your DevOps team and how to shortlist qualified candidates quickly.',
    readTime: '4 min read',
    icon: 'bi-gear-wide-connected',
    color: '#6B5BA8',
    slug: 'top-devops-skills-2025',
  },
  {
    category: 'Compliance & Payroll',
    title: 'IT Staffing Compliance in the USA: W2, C2C, 1099 — What Every Employer Must Know',
    excerpt: 'Worker misclassification is one of the most expensive IT staffing mistakes a business can make. This guide explains the legal differences between W2, C2C, and 1099 engagements and how SparkPod Technologies eliminates your compliance risk.',
    readTime: '7 min read',
    icon: 'bi-shield-check',
    color: '#E8782A',
    slug: 'it-staffing-compliance-w2-c2c-1099',
  },
]

export default function BlogTeaser() {
  return (
    <section
      className="section"
      id="resources"
      aria-label="IT staffing resources, guides, and hiring insights from SparkPod Technologies"
      style={{ background: '#fff' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="sec-label">Resources & Insights</span>
          <h2 className="sec-heading">
            IT staffing guides and{' '}
            <span className="grad-red">hiring intelligence</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Practical guides from our recruiting experts on IT hiring trends, salary benchmarks,
            compliance, and technology staffing strategies across the United States.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="blog-grid fade-up delay-1">
          <style>{`
            @media (max-width: 760px) { .blog-grid { grid-template-columns: 1fr !important; } }
          `}</style>

          {ARTICLES.map(({ category, title, excerpt, readTime, icon, color, slug }) => (
            <article
              key={slug}
              style={{
                background: '#F5F6FA',
                border: '1.5px solid #E2E5F0',
                borderRadius: 18, overflow: 'hidden',
                transition: 'transform .22s, box-shadow .22s, border-color .22s',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 18px 48px rgba(13,27,74,.12)'
                e.currentTarget.style.borderColor = color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = '#E2E5F0'
              }}
            >
              {/* Header strip */}
              <div style={{
                background: `linear-gradient(135deg, ${color}18, ${color}06)`,
                borderBottom: `1px solid ${color}20`,
                padding: '24px 28px 20px',
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: `linear-gradient(135deg, ${color}, ${color}bb)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, color: '#fff',
                }}>
                  <i className={`bi ${icon}`} />
                </div>
                <span style={{
                  fontSize: 10.5, fontWeight: 700, letterSpacing: '.18em',
                  textTransform: 'uppercase', color,
                }}>{category}</span>
              </div>

              {/* Body */}
              <div style={{ padding: '24px 28px 28px' }}>
                <h3 style={{
                  fontSize: 16.5, fontWeight: 700, color: '#0C1535',
                  lineHeight: 1.4, marginBottom: 12,
                }}>
                  {title}
                </h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.7, color: '#4A5473', marginBottom: 20 }}>
                  {excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 11.5, color: '#8A93B2', fontWeight: 600 }}>
                    <i className="bi bi-clock" style={{ marginRight: 5 }} />{readTime}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color, display: 'flex', alignItems: 'center', gap: 5 }}>
                    Read Article <i className="bi bi-arrow-right" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }} className="fade-up delay-2">
          <p style={{ fontSize: 13.5, color: '#8A93B2', marginBottom: 0 }}>
            More hiring guides coming soon — or{' '}
            <a href="mailto:jake@sparkpodtech.com" style={{ color: '#D42020', fontWeight: 700, textDecoration: 'none' }}>
              ask our recruiters directly
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}