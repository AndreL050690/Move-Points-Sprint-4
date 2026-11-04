import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import type { ContatoFormData } from '../types'
import { btnPrimario, btnSecundario, card, container, labelTag, pageHero, secao, secaoTitulo, textoGradiente } from '../styles/ui'

const campoLabel = 'block font-titulo font-semibold text-[0.85rem] text-texto-suave uppercase tracking-wide mb-2'

const inputBase =
  'w-full bg-primaria border rounded-xl text-texto font-corpo text-base px-4 py-3.5 outline-none transition-colors duration-300 appearance-none focus:border-acento focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]'

function inputClass(temErro?: boolean) {
  return `${inputBase} ${temErro ? 'border-destaque' : 'border-borda'}`
}

function Contato() {
  const [enviado, setEnviado] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContatoFormData>()

  function onSubmit(data: ContatoFormData) {
    // Sem consumo de API nesta Sprint — apenas simula o envio
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Formulário enviado:', data)
        setEnviado(true)
        resolve()
      }, 800)
    })
  }

  function enviarOutra() {
    reset()
    setEnviado(false)
  }

  return (
    <>
      <section className={pageHero} aria-labelledby="contato-titulo">
        <div className={container}>
          <span className={`${labelTag} animate-fade-in-up`}>📬 Fale conosco</span>
          <h1 id="contato-titulo" className="mb-4 animate-fade-in-up [animation-delay:0.1s]">
            Entre em<br />
            <span className={textoGradiente}>Contato</span>
          </h1>
          <p className="text-[1.15rem] max-w-[600px] mt-4 animate-fade-in-up [animation-delay:0.2s]">
            Tem alguma dúvida, sugestão ou quer saber mais sobre o projeto?
            Envie uma mensagem para a equipe DevWarrior.
          </p>
        </div>
      </section>

      <section className={secao} aria-labelledby="contato-conteudo-titulo">
        <div className={container}>
          <h2 id="contato-conteudo-titulo" className="sr-only">Formulário de contato e informações</h2>
          <div className="grid grid-cols-[1fr_1.5fr] max-md:grid-cols-1 gap-16 items-start">
            <aside aria-label="Informações de contato">
              <h3 className="text-[1.4rem] mb-4">Fale com a equipe</h3>
              <p className="mb-10">
                Estamos disponíveis para tirar dúvidas sobre o projeto,
                receber feedbacks e colaborações.
              </p>
              <div className="flex items-start gap-4 py-6 border-b border-borda">
                <div className="w-11 h-11 rounded-[10px] bg-[rgba(108,99,255,0.12)] flex items-center justify-center text-xl shrink-0 border border-[rgba(108,99,255,0.2)]" aria-hidden="true">📧</div>
                <div>
                  <strong className="font-titulo text-[0.9rem] block mb-1">E-mail</strong>
                  <p className="text-[0.9rem]">devwarrior87@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 py-6 border-b border-borda">
                <div className="w-11 h-11 rounded-[10px] bg-[rgba(108,99,255,0.12)] flex items-center justify-center text-xl shrink-0 border border-[rgba(108,99,255,0.2)]" aria-hidden="true">🏫</div>
                <div>
                  <strong className="font-titulo text-[0.9rem] block mb-1">Instituição</strong>
                  <a href="https://maps.app.goo.gl/j6DCfKc9sanNFzoH6" target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-acento">
                    FIAP Paulista — Bela Vista
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 py-6">
                <div className="w-11 h-11 rounded-[10px] bg-[rgba(108,99,255,0.12)] flex items-center justify-center text-xl shrink-0 border border-[rgba(108,99,255,0.2)]" aria-hidden="true">💻</div>
                <div>
                  <strong className="font-titulo text-[0.9rem] block mb-1">GitHub</strong>
                  <a href="https://github.com/DevWarrior-Organization" target="_blank" rel="noopener noreferrer" className="text-[0.9rem] text-acento">
                    github.com/Dev-Warriors
                  </a>
                </div>
              </div>
              <div className="mt-10 p-6 bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.2)] rounded-xl">
                <p className="text-[0.9rem] text-texto">
                  💡 <strong>Dica:</strong> para dúvidas frequentes, confira nossa{' '}
                  <Link to="/faq">página de FAQ</Link> — pode ser que a resposta já esteja lá!
                </p>
              </div>
            </aside>

            <div className="bg-card border border-borda rounded-3xl p-16 max-md:p-6 animate-fade-in-up">
              {!enviado ? (
                <>
                  <h3 className="text-[1.3rem] mb-10">Envie sua mensagem</h3>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulário de contato">
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
                      <div className="mb-6">
                        <label className={campoLabel} htmlFor="nome">Nome *</label>
                        <input
                          type="text"
                          id="nome"
                          placeholder="Seu nome completo"
                          autoComplete="name"
                          className={inputClass(!!errors.nome)}
                          {...register('nome', {
                            required: 'Informe seu nome.',
                            minLength: { value: 3, message: 'O nome precisa ter pelo menos 3 letras.' },
                          })}
                        />
                        <span className="block min-h-[1.1rem] text-destaque text-[0.8rem] mt-1.5" role="alert">{errors.nome?.message}</span>
                      </div>
                      <div className="mb-6">
                        <label className={campoLabel} htmlFor="email">E-mail *</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="seu@email.com"
                          autoComplete="email"
                          className={inputClass(!!errors.email)}
                          {...register('email', {
                            required: 'Informe seu e-mail.',
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Informe um e-mail válido.' },
                          })}
                        />
                        <span className="block min-h-[1.1rem] text-destaque text-[0.8rem] mt-1.5" role="alert">{errors.email?.message}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className={campoLabel} htmlFor="assunto">Assunto *</label>
                      <select
                        id="assunto"
                        defaultValue=""
                        className={inputClass(!!errors.assunto)}
                        {...register('assunto', { required: 'Selecione um assunto.' })}
                      >
                        <option value="" disabled>Selecione um assunto</option>
                        <option value="duvida">Dúvida sobre o projeto</option>
                        <option value="feedback">Feedback</option>
                        <option value="colaboracao">Proposta de colaboração</option>
                        <option value="imprensa">Imprensa / Divulgação</option>
                        <option value="outro">Outro</option>
                      </select>
                      <span className="block min-h-[1.1rem] text-destaque text-[0.8rem] mt-1.5" role="alert">{errors.assunto?.message}</span>
                    </div>

                    <div className="mb-6">
                      <label className={campoLabel} htmlFor="mensagem">Mensagem *</label>
                      <textarea
                        id="mensagem"
                        placeholder="Escreva sua mensagem aqui..."
                        rows={5}
                        className={`${inputClass(!!errors.mensagem)} resize-y min-h-[130px]`}
                        {...register('mensagem', {
                          required: 'Escreva sua mensagem.',
                          minLength: { value: 20, message: 'A mensagem precisa ter pelo menos 20 caracteres.' },
                        })}
                      />
                      <span className="block min-h-[1.1rem] text-destaque text-[0.8rem] mt-1.5" role="alert">{errors.mensagem?.message}</span>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-[18px] h-[18px] mt-0.5 accent-acento shrink-0"
                          {...register('aceite', { required: 'É necessário aceitar para enviar.' })}
                        />
                        <span className="text-[0.9rem] text-texto-suave font-corpo font-normal">
                          Concordo que os meus dados sejam utilizados para responder esta mensagem.
                        </span>
                      </label>
                      <span className="block min-h-[1.1rem] text-destaque text-[0.8rem] mt-1.5" role="alert">{errors.aceite?.message}</span>
                    </div>

                    <button type="submit" className={`${btnPrimario} w-full justify-center`} disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar mensagem ✉️'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-16" role="alert">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="mb-2">Mensagem enviada!</h3>
                  <p>Obrigado pelo contato. Retornaremos o mais breve possível.</p>
                  <button className={`${btnSecundario} mt-6`} onClick={enviarOutra}>
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={secao} aria-labelledby="local-titulo">
        <div className={container}>
          <div className={secaoTitulo}>
            <span className={labelTag}>Onde estamos</span>
            <h2 id="local-titulo">FIAP — São Paulo, Brasil</h2>
          </div>
          <div className={`${card} text-center p-16 max-md:p-6`}>
            <div className="text-5xl mb-4" aria-hidden="true">📍</div>
            <h3 className="mb-2">Av. Paulista, 1106 - Bela Vista</h3>
            <p className="mb-6">Paulista, São Paulo — SP, 01311-000</p>
            <a href="https://maps.app.goo.gl/j6DCfKc9sanNFzoH6" target="_blank" rel="noopener noreferrer" className={btnSecundario}>
              Ver no Google Maps ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contato
