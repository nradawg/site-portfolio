import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import config from '../../user_config.json'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--secondary)] text-[var(--primary)]">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight">
            {config.site_name}<span className="text-[var(--accent)]">.</span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-gray-500 hover:text-gray-900'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${isActive ? 'text-[var(--accent)]' : 'text-gray-500'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {config.site_name}</p>
          <div className="flex gap-5">
            {Object.entries(config.social)
              .filter(([, url]) => url)
              .map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noopener" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm capitalize">
                  {name}
                </a>
              ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
