import { Link } from 'react-router-dom'
import { btnPrimario, container, pageHero, textoGradiente } from '../styles/ui'

function NotFound() {
  return (
    <section className={pageHero} aria-labelledby="not-found-titulo">
      <div className={`${container} text-center`}>
        <span className="text-6xl" aria-hidden="true">🧭</span>
        <h1 id="not-found-titulo" className="mt-6 mb-4">
          Página <span className={textoGradiente}>não encontrada</span>
        </h1>
        <p className="max-w-[560px] mx-auto mb-8">
          O endereço acessado não existe ou foi movido. Volte para a página inicial
          e continue explorando o MovePoints.
        </p>
        <Link to="/" className={btnPrimario}>Voltar ao início</Link>
      </div>
    </section>
  )
}

export default NotFound
