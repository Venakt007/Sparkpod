import { useState, useEffect } from 'react'
import transparentLogo from '../assets/logo-transparent.png'

const MAILTO = `mailto:jake@sparkpodtech.com?subject=IT%20Staffing%20Requirement%20%E2%80%94%20SparkPod%20Technologies&cc=jake@sparkpodtech.com&body=Hello%20SparkPod%20Team%2C%0A%0AI%20would%20like%20to%20discuss%20an%20IT%20staffing%20requirement.%0A%0AName%3A%20%0ACompany%3A%20%0ARole%2FSkill%20Required%3A%20%0ALocation%2FRemote%3A%20%0AStart%20Date%3A%20%0A%0AThank%20you%2C`

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'About Us', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['services', 'industries', 'about', 'process', 'contact']
      const current = sections.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 100 && bottom >= 100
      })
      setActive(current ? `#${current}` : '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        height: 68,
        background: scrolled ? 'rgba(255,253,245,.99)' : 'rgba(255,253,245,.96)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(27,47,122,.1)',
        boxShadow: scrolled ? '0 2px 20px rgba(27,47,122,.12)' : 'none',
        display: 'flex', alignItems: 'center', padding: '0 40px',
        transition: 'background .3s, box-shadow .3s',
        gap: 0,
      }}>
        {/* Full SparkPod Technologies logo — transparent, sits cleanly on dark navbar */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', marginRight: 'auto', textDecoration: 'none' }}>
          <img src={transparentLogo} alt="SparkPod Technologies" style={{ height: 52, width: 'auto', display: 'block' }} />
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}
          className="nav-desktop">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); handleNav(href) }}
                style={{
                  fontSize: 13.5, fontWeight: 600, color: active === href ? '#D42020' : '#0C1535',
                  padding: '6px 2px', display: 'block', margin: '0 12px',
                  textDecoration: 'none', transition: 'color .2s',
                  background: 'transparent',
                  borderBottom: active === href ? '2px solid #D42020' : '2px solid transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#D42020'}
                onMouseLeave={e => e.currentTarget.style.color = active === href ? '#D42020' : '#0C1535'}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href={MAILTO}
          className="btn-red nav-desktop"
          style={{ marginLeft: 24, padding: '10px 22px', fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Get Started <i className="bi bi-arrow-up-right"></i>
        </a>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{
            background: 'none', border: 'none', color: '#0C1535',
            fontSize: 24, cursor: 'pointer', marginLeft: 'auto', display: 'none',
          }}>
          <i className={menuOpen ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 999,
          background: 'rgba(255,253,245,.99)', backdropFilter: 'blur(20px)',
          padding: '16px 32px 24px',
          borderBottom: '1px solid rgba(27,47,122,.1)',
          boxShadow: '0 8px 24px rgba(27,47,122,.1)',
        }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={e => { e.preventDefault(); handleNav(href) }}
              style={{
                display: 'block', fontSize: 15, fontWeight: 500,
                color: '#0C1535', padding: '13px 0',
                borderBottom: '1px solid rgba(27,47,122,.08)',
                textDecoration: 'none',
              }}>
              {label}
            </a>
          ))}
          <a href={MAILTO}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              marginTop: 16, padding: '12px 24px', fontSize: 14, fontWeight: 700,
              color: '#fff', background: 'linear-gradient(135deg,#D42020,#A8181B)',
              borderRadius: 50, textDecoration: 'none',
            }}>
            Get Started <i className="bi bi-arrow-up-right"></i>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: block !important; }
        }
      `}</style>
    </>
  )
}
