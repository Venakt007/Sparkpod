import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '+', duration = 1800 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

const TESTIMONIAL = {
  quote: "SparkPod Technologies filled three critical DevOps roles for us within 72 hours. The candidates were technically strong, culturally aligned, and compliant from day one. They've become our go-to staffing partner.",
  name: 'VP of Engineering',
  company: 'Fortune 500 Financial Services Firm',
}

export default function Stats() {
  return (
    <section className="section section-red-tint" id="numbers">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="stats-grid">
          <style>{`@media (max-width: 860px) { .stats-grid { grid-template-columns: 1fr !important; } }`}</style>

          <div className="fade-up">
            <span className="sec-label">06 — By The Numbers</span>
            <h2 className="sec-heading">
              Proven delivery across<br />
              <span className="grad-red">hundreds of engagements.</span>
            </h2>
            <p className="sec-sub" style={{ marginBottom: 32 }}>
              Our track record reflects our commitment to speed, quality, and lasting partnerships.
              Every metric here represents a real professional placed and a real business problem solved.
            </p>

            {/* Testimonial mini */}
            <div style={{
              background: '#fff', border: '1.5px solid #E2E5F0',
              borderLeft: '4px solid #D42020', borderRadius: 12,
              padding: '20px 24px', marginTop: 8,
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: '#4A5473', marginBottom: 12, fontStyle: 'italic' }}>
                "{TESTIMONIAL.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg,#D42020,#1B2F7A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className="bi bi-person-fill" style={{ color: '#fff', fontSize: 16 }}></i>
                </div>
                <div>
                  <strong style={{ fontSize: 13, color: '#0C1535', display: 'block' }}>{TESTIMONIAL.name}</strong>
                  <span style={{ fontSize: 11.5, color: '#8A93B2' }}>{TESTIMONIAL.company}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up delay-2">
            <div style={{
              background: 'linear-gradient(135deg, #D42020, #A8181B)',
              borderRadius: 20, padding: '40px 32px',
              boxShadow: '0 20px 60px rgba(212,32,32,.3)',
            }}>
              {[
                { target: 500, suffix: '+', label: 'Successful Placements' },
                { target: 50, suffix: '+', label: 'Active Client Partners' },
                { target: 48, suffix: 'h', label: 'Average Shortlist Time' },
                { target: 98, suffix: '%', label: 'Client Satisfaction Rate' },
              ].map(({ target, suffix, label }, i) => (
                <div key={label} style={{
                  textAlign: 'center', padding: '16px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,.18)' : 'none',
                }}>
                  <div style={{ fontSize: 48, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-.03em', marginBottom: 6 }}>
                    <Counter target={target} suffix={suffix} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
