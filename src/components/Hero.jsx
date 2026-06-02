import sIconImg from '../assets/logo-icon-transparent.png'
import heroBanner from '../assets/hero.png'

const MAILTO = `mailto:jake@sparkpodtech.com?subject=IT%20Staffing%20Requirement%20%E2%80%94%20SparkPod%20Technologies&cc=jake@sparkpodtech.com&body=Hello%20SparkPod%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20an%20IT%20staffing%20requirement.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%2FSkill%20Required%3A%20%0ALocation%2FRemote%3A%20%0AStart%20Date%3A%20%0A%0AThank%20you%2C`

export default function Hero() {
  return (
    <section
      aria-label="SparkPod Technologies — IT Staffing Agency in Austin TX"
      style={{ minHeight: '100vh', paddingTop: 68, display: 'grid', gridTemplateColumns: '1fr 1fr' }}
      className="hero-grid"
    >
      <style>{`
        @keyframes spin       { to { transform: rotate(360deg); } }
        @keyframes float      { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes glowPulse  { 0%,100% { opacity:.25; } 50% { opacity:.5; } }
        @keyframes float3D    {
          0%   { transform: translate(-50%,-50%) perspective(500px) rotateY(-12deg) rotateX(6deg) translateY(0px); }
          25%  { transform: translate(-50%,-50%) perspective(500px) rotateY(12deg)  rotateX(-4deg) translateY(-10px); }
          50%  { transform: translate(-50%,-50%) perspective(500px) rotateY(18deg)  rotateX(8deg)  translateY(-16px); }
          75%  { transform: translate(-50%,-50%) perspective(500px) rotateY(-8deg)  rotateX(-6deg) translateY(-8px); }
          100% { transform: translate(-50%,-50%) perspective(500px) rotateY(-12deg) rotateX(6deg)  translateY(0px); }
        }
        @keyframes glowShift  {
          0%,100% { box-shadow: 0 0 60px 20px rgba(212,32,32,.25), 0 0 120px 40px rgba(27,47,122,.15); }
          50%     { box-shadow: 0 0 80px 30px rgba(232,120,42,.3),  0 0 140px 50px rgba(212,32,32,.2); }
        }
        .hero-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 900px) {
          .hero-grid     { grid-template-columns: 1fr !important; }
          .hero-lp       { padding: 60px 24px 52px !important; }
          .hero-rp       { min-height: 540px !important; }
        }
        @media (max-width: 540px) {
          .hero-h1       { font-size: 28px !important; }
          .hero-stat-row { gap: 16px !important; flex-wrap: wrap; }
        }
      `}</style>

      {/* ── LEFT ── */}
      <div className="hero-lp" style={{
        padding: '80px 60px 80px 72px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: 'linear-gradient(150deg,#fff 0%,#fff8f8 55%,#fff0f0 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -140, right: -140, width: 480, height: 480, borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(212,32,32,.055) 0%,transparent 70%)', pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', bottom: 24, right: -10, opacity: .06,
          animation: 'spin 32s linear infinite', pointerEvents: 'none',
        }}>
          <svg width="200" height="200" viewBox="0 0 200 200">
            <ellipse cx="100" cy="100" rx="90" ry="36" fill="none" stroke="#D42020" strokeWidth="2"
              transform="rotate(-30 100 100)" strokeDasharray="8 6"/>
            <circle cx="100" cy="10" r="6" fill="#D42020"/>
          </svg>
        </div>

        <div className="fade-up">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
            fontSize: 11, fontWeight: 700, letterSpacing: '.22em', textTransform: 'uppercase',
            color: '#D42020', background: 'rgba(212,32,32,.07)',
            border: '1px solid rgba(212,32,32,.2)', borderRadius: 30,
            padding: '6px 16px', width: 'fit-content',
          }}>
            <i className="bi bi-person-check-fill"/> US IT Staffing & Recruitment
          </div>

          <h1 className="hero-h1" style={{
            fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900,
            lineHeight: 1.09, letterSpacing: '-.025em', color: '#0C1535', marginBottom: 22,
          }}>
            Connecting{' '}
            <span style={{ fontFamily:"'DM Serif Display',Georgia,serif", fontStyle:'italic', color:'#D42020' }}>
              top IT talent
            </span>
            <br/>with the right opportunity.
          </h1>

          <p style={{ fontSize: 16, lineHeight: 1.78, color: '#4A5473', maxWidth: 460, marginBottom: 38 }}>
            SparkPod Technologies is an Austin-based IT staffing firm delivering pre-screened,
            compliance-ready professionals for contract, contract-to-hire, and full-time roles
            across the United States — with an average shortlist turnaround of{' '}
            <strong style={{ color:'#D42020' }}>48 hours</strong>.
          </p>

          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom: 52 }}>
            <a href="#services" className="btn-red" style={{ padding:'14px 30px', fontSize:14 }}>
              Our Services <i className="bi bi-arrow-right"/>
            </a>
            <a href={MAILTO} className="btn-outline" style={{ padding:'13px 28px', fontSize:14 }}>
              <i className="bi bi-briefcase"/> Request Talent
            </a>
          </div>

          <div className="hero-stat-row" style={{
            display:'flex', gap:32, paddingTop:28, borderTop:'1px solid #E2E5F0',
          }}>
            {[['500+','Placements Made'],['50+','Active Clients'],['48h','Avg. Shortlist'],['35+','US States']].map(([n,l]) => (
              <div key={l}>
                <strong style={{ display:'block', fontSize:22, fontWeight:900, color:'#0C1535', letterSpacing:'-.02em' }}>{n}</strong>
                <span style={{ fontSize:10.5, fontWeight:600, letterSpacing:'.14em', textTransform:'uppercase', color:'#8A93B2' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT — hero banner + floating logo ── */}
      <div className="hero-rp" style={{
        position: 'relative', overflow: 'hidden', minHeight: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Hero banner background image */}
        <img
          src={heroBanner}
          alt="SparkPod Technologies IT staffing team — Austin TX"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />
        {/* Dark overlay so text is readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(140deg,rgba(8,14,40,.88) 0%,rgba(27,47,122,.82) 55%,rgba(11,22,64,.9) 100%)',
        }}/>

        {/* Soft glow behind logo */}
        <div style={{
          position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
          width:420, height:420, borderRadius:'50%',
          background:'radial-gradient(circle,rgba(212,32,32,.18) 0%,rgba(27,47,122,.12) 50%,transparent 75%)',
          animation:'glowPulse 4s ease-in-out infinite', pointerEvents:'none',
        }}/>

        {/* ── Centred content ── */}
        <div style={{
          position:'relative', zIndex:2,
          display:'flex', flexDirection:'column', alignItems:'center',
          textAlign:'center', padding:'64px 44px',
        }} className="fade-up delay-1">

          {/* Logo — large, clean, floating */}
          <div style={{
            marginBottom: 28,
            animation: 'float 5s ease-in-out infinite',
            filter: 'drop-shadow(0 16px 48px rgba(212,32,32,.55)) drop-shadow(0 4px 16px rgba(0,0,0,.7))',
          }}>
            <img
              src={sIconImg}
              alt="SparkPod Technologies"
              style={{ width: 300, height: 'auto' }}
            />
          </div>

          {/* Location badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:8, marginBottom:18,
            fontSize:11, fontWeight:700, letterSpacing:'.2em', textTransform:'uppercase',
            color:'rgba(255,255,255,.85)',
            background:'rgba(255,255,255,.09)', border:'1px solid rgba(255,255,255,.18)',
            borderRadius:30, padding:'6px 16px',
          }}>
            <i className="bi bi-geo-alt-fill" style={{ color:'#FF7070' }}/>
            Austin, TX · Serving All 50 US States
          </div>

          <h2 style={{
            fontSize:'clamp(22px,2.6vw,36px)', fontWeight:800,
            color:'#fff', lineHeight:1.12, letterSpacing:'-.02em', marginBottom:12,
          }}>
            Your trusted partner in{' '}
            <span style={{ fontFamily:"'DM Serif Display',Georgia,serif", fontStyle:'italic', color:'#F5A060' }}>
              IT staffing.
            </span>
          </h2>

          <p style={{ fontSize:14, lineHeight:1.75, color:'rgba(255,255,255,.58)', maxWidth:320, margin:'0 auto 26px' }}>
            Contract · Contract-to-Hire · Permanent Hiring<br/>
            Remote & Hybrid · Bench Sales · Vendor Management
          </p>

          <div style={{ display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap', marginBottom:32 }}>
            <a href="#services" className="btn-red" style={{ padding:'11px 22px', fontSize:13.5 }}>
              Our Services <i className="bi bi-arrow-right"/>
            </a>
            <a href={MAILTO} className="btn-ghost-white" style={{ padding:'10px 22px', fontSize:13.5 }}>
              Hire Now
            </a>
          </div>

          <div style={{
            display:'flex', gap:22, justifyContent:'center',
            paddingTop:22, borderTop:'1px solid rgba(255,255,255,.1)', flexWrap:'wrap',
          }}>
            {[['500+','Placements'],['48h','Shortlist'],['40+','Tech Domains']].map(([n,l]) => (
              <div key={l} style={{ textAlign:'center' }}>
                <strong style={{ display:'block', fontSize:18, fontWeight:900, color:'#fff' }}>{n}</strong>
                <span style={{ fontSize:10, fontWeight:600, letterSpacing:'.15em', textTransform:'uppercase', color:'rgba(255,255,255,.4)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
