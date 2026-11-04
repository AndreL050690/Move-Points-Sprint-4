# 🚀 MovePoints

Projeto acadêmico desenvolvido pela equipe **DevWarrior** para a disciplina de Front-End Design Engineering (FIAP — Sprint 03 + integração da Sprint 04).

O MovePoints é uma solução que transforma o uso do transporte público em uma experiência interativa e recompensadora: o usuário acumula pontos a cada quilômetro percorrido em ônibus, metrô ou trem, e troca esses pontos por descontos e benefícios reais, incentivando a mobilidade sustentável e a redução da emissão de carbono.

Nesta etapa (Sprint 03), o projeto foi migrado do modelo tradicional em HTML/CSS/JS para uma **Single Page Application (SPA)** construída com **React, Vite e TypeScript**, com toda a interface estilizada em **Tailwind CSS**.

## 🖥️ Páginas

- **Início** — apresentação do projeto, destaques e roadmap de desenvolvimento.
- **Integrantes** — quem somos, a equipe DevWarrior.
- **Sobre** — o contexto, o problema e a solução proposta pelo MovePoints.
- **Como Funciona** — a jornada do usuário, o sistema de pontuação e um simulador interativo.
- **Recompensas** — catálogo de recompensas, níveis de progressão e ranking da comunidade.
- **FAQ** — perguntas frequentes sobre o projeto, a tecnologia e a equipe.
- **Contato** — formulário de contato validado e informações da equipe.
- **Painel API** — integração com a API Java para cadastrar usuários, registrar viagens e consultar ranking.

A navegação é configurada em `move-points/src/navigation.ts` e reutilizada pelo
`Header` e pelo `Footer`. As rotas são declaradas em uma única configuração no
`App.tsx`, com página de fallback para endereços inexistentes.

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) — biblioteca para interface e componentização.
- [Vite](https://vite.dev/) — build tool e servidor de desenvolvimento.
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática em todo o código.
- [Tailwind CSS](https://tailwindcss.com/) — estilização de toda a interface via classes utilitárias.
- [React Router DOM](https://reactrouter.com/) — navegação entre páginas (SPA).
- [React Hook Form](https://react-hook-form.com/) — validação do formulário de contato.
- [Git & GitHub](https://github.com/) — versionamento e histórico de desenvolvimento.

## 📁 Estrutura de pastas

```
move-points/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/            # Imagens (fotos da equipe, logo)
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx     # Layout base (Header + Outlet + Footer)
│   │   └── Modal.tsx
│   ├── pages/              # Uma página por rota
│   │   ├── Home.tsx
│   │   ├── Integrantes.tsx
│   │   ├── Sobre.tsx
│   │   ├── Funcionamento.tsx
│   │   ├── Recompensas.tsx
│   │   ├── Faq.tsx
│   │   ├── Contato.tsx
│   │   ├── Painel.tsx       # Integração com a API Java
│   │   ├── NotFound.tsx
│   │   ├── contador.tsx    # Contador animado extraído da Home
│   │   └── Simulador.tsx   # Simulador interativo extraído de Funcionamento
│   ├── services/
│   │   └── api.ts           # Cliente HTTP tipado da API Java
│   ├── navigation.ts       # Fonte única dos links do menu e rodapé
│   ├── styles/
│   │   └── ui.ts          # Combinações de classes Tailwind reaproveitadas
│   ├── types/
│   │   └── index.ts       # Tipos TypeScript compartilhados
│   ├── App.tsx             # Rotas dinâmicas com React Router
│   ├── main.tsx            # Ponto de entrada da aplicação
│   └── index.css           # Import do Tailwind + tema (@theme) do projeto
├── index.html
├── package.json
├── tailwind (via @tailwindcss/vite, configurado em vite.config.ts)
└── vite.config.ts
```

## ▶️ Como Usar

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
# 1. Clone o repositório
git clone https://github.com/DevWarrior-Organization/Move-Points-Vite.git

# 2. Entre na pasta do projeto
cd Move-Points-Vite/move-points

# 3. Instale as dependências
npm install

# 4. (Opcional) configure a URL da API Java
# copie env.example para .env.local e ajuste VITE_API_URL se necessário

# 5. Rode o projeto em modo desenvolvimento
npm run dev

# 6. Acesse no navegador
# http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Antes de entregar uma alteração, valide o projeto com:

```bash
npm run lint
npm run build
```

## 🧭 Rotas disponíveis

| Caminho | Página |
|---|---|
| `/` | Início |
| `/integrantes` | Integrantes |
| `/sobre` | Sobre |
| `/funcionamento` | Como funciona |
| `/recompensas` | Recompensas |
| `/recompensas/:id` | Detalhe dinâmico de uma recompensa |
| `/faq` | FAQ |
| `/contato` | Contato |
| qualquer outro caminho | Página não encontrada |

## Integração com a API Java

O painel /painel consome a API Spring Boot do arquivo Java fornecido no desafio.

- URL padrão local: http://localhost:8080
- Variável opcional do front: VITE_API_URL
- GET /ranking e GET /viagens/fatores carregam os dados da comunidade.
- POST /usuarios cadastra usuários.
- POST /viagens registra viagens e recebe os pontos calculados pelo Java.
- A camada src/services/api.ts também possui operações tipadas de PUT e DELETE.

Para rodar a integração localmente, inicie o projeto Java com o Maven Wrapper na pasta que contém o pom.xml:

.\mvnw.cmd spring-boot:run

A API depende das credenciais do Oracle configuradas pelas variáveis DB_HOST, DB_USER e DB_PASSWORD.
Se a API estiver desligada, o front continua navegável e o Painel API mostra uma mensagem de conexão, sem quebrar as outras páginas.
## 📬 Contato

Para falar com a equipe, utilize o formulário da página `/contato` ou os perfis
de GitHub e LinkedIn disponíveis na página de integrantes da aplicação.

## 🔗 Repositório GitHub

[https://github.com/DevWarrior-Organization/Move-Points-Vite](https://github.com/DevWarrior-Organization/Move-Points-Vite)

## 👥 Integrantes — Equipe DevWarrior

| Nome | RM | Turma |
|---|---|---|
| Fabricio Haine | 573332 | 1TDSPY · FIAP 2026 |
| Leonardo Neto | 571960 | 1TDSPY · FIAP 2026 |
| Guilherme Alves | 571683 | 1TDSPI · FIAP 2026 |
| Andre Luiz Ramos Forastieri | 572203 | 1TDSPH · FIAP 2026 |

---

Projeto desenvolvido para fins acadêmicos — FIAP, 2026.
