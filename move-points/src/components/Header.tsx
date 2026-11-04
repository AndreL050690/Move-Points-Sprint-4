import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../navigation'

const linkBase =
  'font-titulo font-semibold text-sm tracking-wide px-4 py-2 rounded-lg transition-all duration-150 text-texto-suave hover:text-texto hover:bg-card max-md:text-xl max-md:px-8 max-md:py-3'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function aoRolar() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? 'text-acento bg-card' : ''}`

  return (
    <header
      className={`fixed top-0 left-0 right-0 h-[72px] z-[1000] transition-all duration-300 ${
        scrolled ? 'bg-[rgba(10,10,15,0.9)] backdrop-blur-xl border-b border-borda' : ''
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        <NavLink
          to="/"
          className="font-titulo font-extrabold text-2xl text-texto tracking-tight transition-colors hover:text-acento-hover"
        >
          Move<span className="text-acento">Points</span>
        </NavLink>

        <button
          className="hidden max-md:flex flex-col gap-[5px] cursor-pointer p-2 rounded-lg bg-transparent border-none hover:bg-card transition-colors"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span
            className={`block w-6 h-0.5 bg-texto rounded-sm transition-all duration-300 ${
              menuAberto ? 'translate-y-[7px] rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-texto rounded-sm transition-all duration-300 ${
              menuAberto ? 'opacity-0 scale-x-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-texto rounded-sm transition-all duration-300 ${
              menuAberto ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          ></span>
        </button>

        <nav
          className={`flex items-center gap-1 max-md:fixed max-md:top-[72px] max-md:left-0 max-md:w-full max-md:h-[calc(100vh-72px)] max-md:overflow-y-auto max-md:bg-[rgba(10,10,15,0.98)] max-md:backdrop-blur-xl max-md:flex-col max-md:justify-center max-md:gap-4 max-md:transition-transform max-md:duration-300 ${
            menuAberto ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'
          }`}
        >
          {navigationItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass} onClick={() => setMenuAberto(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
