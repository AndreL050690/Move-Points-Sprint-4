import { NavLink } from 'react-router-dom'
import { navigationItems } from '../navigation'

const linkFooter =
  'text-texto-suave text-[0.95rem] transition-colors duration-150 hover:text-acento'

function Footer() {
  return (
    <footer className="relative z-10 bg-secundaria border-t border-borda pt-16 pb-6">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr] max-md:grid-cols-1 max-lg:grid-cols-2 gap-16 max-md:gap-10 mb-16">
          <div className="max-lg:col-span-2 max-md:col-span-1">
            <NavLink to="/" className="block font-titulo font-extrabold text-2xl text-texto tracking-tight mb-4">
              Move<span className="text-acento">Points</span>
            </NavLink>
            <p className="max-w-[320px]">
              Plataforma desenvolvida por estudantes da FIAP para incentivar e recompensar a mobilidade sustentável.
            </p>
          </div>

          <div>
            <p className="font-titulo text-[0.85rem] font-bold uppercase tracking-widest text-texto-suave mb-4">Páginas</p>
            <ul className="space-y-2">
              {navigationItems.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink to={to} end={end} className={linkFooter}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-titulo text-[0.85rem] font-bold uppercase tracking-widest text-texto-suave mb-4">Links</p>
            <ul className="space-y-2">
              <li>
                <a
                  className={linkFooter}
                  href="https://github.com/DevWarrior-Organization/Move-Points-Vite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub do Projeto
                </a>
              </li>
              <li>
                <a className={linkFooter} href="https://fiap.com.br" target="_blank" rel="noopener noreferrer">
                  FIAP
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between max-md:flex-col max-md:gap-4 max-md:text-center pt-6 border-t border-borda">
          <p className="text-texto-suave text-[0.85rem]">© 2026 MovePoints — Projeto FIAP. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
