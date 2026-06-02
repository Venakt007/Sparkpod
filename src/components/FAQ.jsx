import { useState } from 'react'

const FAQS = [
  {
    q: 'What IT staffing services does SparkPod Technologies offer?',
    a: 'SparkPod Technologies offers six core IT staffing services: contract staffing, contract-to-hire, full-time permanent recruitment, remote and hybrid staffing, vendor management support, and bench sales and consultant marketing. We serve clients across all 50 US states with a focus on technology roles including software engineering, cloud, DevOps, data, cybersecurity, SAP, and Salesforce.',
  },
  {
    q: 'How quickly can SparkPod Technologies deliver a shortlist of IT candidates?',
    a: 'We guarantee a shortlist of pre-screened, compliance-ready IT candidates within 48 hours of receiving your staffing requirement. Our extensive pre-built talent pools across 40+ technology domains allow us to respond rapidly without sacrificing quality or compliance.',
  },
  {
    q: 'What is the difference between contract staffing and contract-to-hire IT staffing?',
    a: 'Contract staffing is a fixed-term engagement where a technology professional works for a defined period (e.g., 3–12 months) with no obligation to convert to a permanent role. Contract-to-hire is a trial model where the consultant works on contract initially — typically 30 to 90 days — with the option to convert to a full-time employee at the end of the trial period. SparkPod Technologies offers both models with full compliance and payroll management.',
  },
  {
    q: 'Which US cities and states does SparkPod Technologies serve?',
    a: 'Headquartered in Austin, Texas, SparkPod Technologies places IT professionals across all 50 US states. We have deep placement activity in Austin, Dallas, Houston, New York, Chicago, Atlanta, Seattle, and the San Francisco Bay Area — plus nationwide remote and hybrid roles for distributed teams.',
  },
  {
    q: 'What technology domains and roles does SparkPod Technologies recruit for?',
    a: 'We recruit across 40+ IT disciplines including Java, .NET, Python, DevOps, Cloud (AWS, Azure, GCP), Data Engineering, QA Automation, Cybersecurity, SAP, Salesforce, AI/ML, Business Analysis, React, Angular, Node.js, Kubernetes, and Terraform. Our specialised recruiters have deep domain knowledge — not just keyword matching.',
  },
  {
    q: 'How do I submit an IT staffing requirement to SparkPod Technologies?',
    a: 'You can submit a staffing requirement by emailing jake@sparkpodtech.com or calling +1 (732) 232-6540. Include the role title, required skill set, location preference (on-site, hybrid, or remote), start date, and engagement type (contract, contract-to-hire, or permanent). Our team will respond with a qualified shortlist within 48 hours.',
  },
  {
    q: 'Does SparkPod Technologies handle compliance and payroll for contractors?',
    a: 'Yes. SparkPod Technologies manages all employer-of-record responsibilities for contract placements, including I-9 verification, background checks, W2 payroll, state tax compliance, workers\' compensation, and benefits administration across all US jurisdictions. Clients receive one clean invoice with zero compliance burden.',
  },
  {
    q: 'What industries does SparkPod Technologies specialise in for IT staffing?',
    a: 'We serve IT staffing needs across Information Technology, Healthcare IT, Finance and Banking, Telecommunications, Insurance and InsurTech, Retail and E-Commerce, Cybersecurity, Government and Federal, and Engineering and Manufacturing. Our industry-aligned recruiters understand sector-specific compliance, tooling, and culture requirements.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      className="section section-gray"
      id="faq"
      aria-label="Frequently asked questions about SparkPod Technologies IT staffing services"
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="fade-up">
          <span className="sec-label">Got Questions?</span>
          <h2 className="sec-heading">
            Frequently asked questions about{' '}
            <span className="grad-red">IT staffing</span>
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center' }}>
            Everything you need to know about working with SparkPod Technologies —
            from how we source candidates to how compliance and payroll are handled.
          </p>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }} className="fade-up delay-1">
          {FAQS.map(({ q, a }, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: open === i ? '1.5px solid #D42020' : '1.5px solid #E2E5F0',
                borderRadius: 14,
                overflow: 'hidden',
                transition: 'border-color .2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', textAlign: 'left', gap: 16,
                }}
                aria-expanded={open === i}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: '#0C1535', lineHeight: 1.4 }}>{q}</span>
                <i
                  className={`bi bi-chevron-${open === i ? 'up' : 'down'}`}
                  style={{ color: '#D42020', fontSize: 14, flexShrink: 0, transition: 'transform .2s' }}
                />
              </button>

              {open === i && (
                <div style={{ padding: '0 24px 22px' }}>
                  <p style={{ fontSize: 14.5, lineHeight: 1.75, color: '#4A5473', margin: 0 }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }} className="fade-up delay-2">
          <p style={{ fontSize: 14, color: '#8A93B2', marginBottom: 16 }}>
            Still have questions? We're happy to help.
          </p>
          <a href="mailto:jake@sparkpodtech.com" className="btn-outline" style={{ padding: '12px 28px', fontSize: 14 }}>
            <i className="bi bi-envelope" /> Email Our Team
          </a>
        </div>
      </div>
    </section>
  )
}