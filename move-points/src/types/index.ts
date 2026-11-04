// Tipos compartilhados do projeto MovePoints

export interface Integrante {
  nome: string
  rm: string
  turma: string
  cargos: string[]
  foto: string
  linkedin: string
  github: string
}

export type CategoriaRecompensa = 'alimentacao' | 'transporte' | 'lazer' | 'saude'

export interface Recompensa {
  id: string
  categoria: CategoriaRecompensa
  icone: string
  nome: string
  descricao: string
  pontos: number
}

export interface ContatoFormData {
  nome: string
  email: string
  assunto: string
  mensagem: string
  aceite: boolean
}
