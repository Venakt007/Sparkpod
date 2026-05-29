const STEPS = [
  {
    icon: 'bi-clipboard2-pulse',
    num: '01', title: 'Understand the Requirement',
    desc: 'We conduct an in-depth discovery call with your hiring team to fully understand the technical stack, project context, cultural fit requirements, compensation benchmarks, and urgency — ensuring every submission is precisely targeted.',
    grad: ['#D42020', '#A8181B'],
  },
  {
    icon: 'bi-search-heart',
    num: '02', title: 'Source & Screen',
    desc: 'Our specialised recruiters leverage proprietary talent pools, LinkedIn Recruiter, job boards, and referral networks to source candidates. Each profile undergoes rigorous technical screening, communication assessment, and reference validation before submission.',
    grad: ['#6B5BA8', '#4E4280'],
  },
  {
    icon: 'bi-person-check',
    num: '03', title: 'Interview & Select',
    desc: 'We coordinate and facilitate client interviews, provide detailed candidate profiles, and act as a liaison between your hiring managers and candidates — streamlining the decision-making process for a frictionless experience.',
    grad: ['#3D6AB5', '#1B2F7A'],
  },
  {
    icon: 'bi-rocket-takeoff',
    num: '04', title: 'Onboard & Support',
    desc: 'Once selected, we manage offer letters, background checks, I-9 verification, compliance documentation, and onboarding coordination. Post-placement, our team remains actively engaged to ensure consultant success and client satisfaction.',
    grad: ['#E8782A', '#D42020'],
  },
]

export default function Process() {
  return (
    <section className="section section-dark" id="process" style={{ position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 700px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Orbital bg decorations */}
      {[{ sz: 800, dur: 45, c: '#D42020', opacity: .05, rev: false }, { sz: 560, dur: 60, c: '#1B2F7A', opacity: .04, rev: true }].map(({ sz, dur, c, opacity, rev }, i) => (
        <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}>
          <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`} opacity={opacity}
            style={{ animation: `spin ${dur}s linear infinite ${rev ? 'reverse' : ''}` }}>
            <ellipse cx={sz / 2} cy={sz / 2} rx={sz / 2 - 10} ry={sz / 4 - 10}
              fill="none" stroke={c} strokeWidth="2" transform={`rotate(-15 ${sz / 2} ${sz / 2})`} />
            <circle cx={sz / 2} cy={10} r={10} fill={c} />
          </svg>
        </div>
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 68 }} className="fade-up">
          <span className="sec-label-white">05 — Our Staffing Process</span>
          <h2 className="sec-heading-white">
            From requirement to{' '}
            <span className="serif-italic" style={{ color: '#F5A060' }}>onboarding</span> — in days.
          </h2>
          <p className="sec-sub" style={{ margin: '0 auto', textAlign: 'center', color: 'rgba(255,255,255,.5)' }}>
            A disciplined, four-stage methodology designed to eliminate guesswork,
            minimise time-to-fill, and ensure every placement sticks.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28 }}>
          {STEPS.map(({ icon, num, title, desc, grad }, i) => (
            <div key={title} className={`fade-up delay-${i + 1}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: '.22em', color: grad[0], marginBottom: 12, display: 'block' }}>{num}</span>
              <div style={{
                width: 76, height: 76, borderRadius: '50%', marginBottom: 20,
                background: `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26, color: '#fff', boxShadow: `0 8px 28px ${grad[0]}55`,
                transition: 'transform .22s, box-shadow .22s', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = `0 16px 40px ${grad[0]}66` }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = `0 8px 28px ${grad[0]}55` }}>
                <i className={`bi ${icon}`}></i>
              </div>
              <h4 style={{ fontSize: 15.5, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{title}</h4>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,.48)', maxWidth: 200, margin: '0 auto' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
