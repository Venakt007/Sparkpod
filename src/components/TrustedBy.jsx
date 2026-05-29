const ITEMS = [
  'Direct Clients', '·', 'Prime Vendors', '·', 'MSP Programmes', '·',
  'Implementation Partners', '·', 'Fortune 500 Companies', '·',
  'Technology Startups', '·', 'Federal Contractors', '·',
  'Healthcare Systems', '·', 'Financial Institutions', '·',
  'Direct Clients', '·', 'Prime Vendors', '·', 'MSP Programmes', '·',
  'Implementation Partners', '·', 'Fortune 500 Companies', '·',
  'Technology Startups', '·', 'Federal Contractors', '·',
  'Healthcare Systems', '·', 'Financial Institutions',
]

export default function TrustedBy() {
  return (
    <div style={{
      background: '#F5F6FA',
      borderTop: '1px solid #E2E5F0', borderBottom: '1px solid #E2E5F0',
      padding: '26px 0', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .mq { animation: marquee 36s linear infinite; display: flex; gap: 40px; width: max-content; align-items: center; }
        .mq:hover { animation-play-state: paused; }
      `}</style>
      <p style={{
        textAlign: 'center', fontSize: 10.5, fontWeight: 700, letterSpacing: '.28em',
        textTransform: 'uppercase', color: '#8A93B2', marginBottom: 16,
      }}>
        Serving direct clients, prime vendors & MSPs across all 50 US states
      </p>
      <div className="mq">
        {ITEMS.map((item, i) => (
          <span key={i} style={{
            fontSize: 12.5, fontWeight: item === '·' ? 400 : 700,
            color: item === '·' ? '#D0D4E4' : '#4A5473',
            opacity: item === '·' ? .5 : .65, whiteSpace: 'nowrap',
            letterSpacing: item === '·' ? 0 : '.03em',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
