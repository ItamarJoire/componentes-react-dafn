# {{Nome do sistema por extenso}} ({{SIGLA}})

> {{Uma frase: o que o sistema faz e que valor entrega à instituição.}}

![Versão](https://badgen.net/badge/Versao/{{vX.Y.Z}}/orange?icon=gitlab)

<!--
  Atualize a versão do badge a cada release.
  Alternativa que se atualiza sozinha a partir das releases do GitLab:
  ![Release](https://git.iti.gov.br/GRUPO/REPOSITORIO/-/badges/release.svg)
-->

<!-- Situação: Em desenvolvimento · Em homologação · Em produção · Descontinuado -->

|                         |                                                                                  |
| ----------------------- | -------------------------------------------------------------------------------- |
| **Área responsável**    | {{Diretoria}} / {{Coordenação}}                                                  |
| **Responsável técnico** | {{Nome}} ({{nome.sobrenome}}@iti.gov.br)                                         |
| **Dono do produto**     | {{Nome}} ({{nome.sobrenome}}@iti.gov.br)                                         |
| **Situação**            | {{Situação}}                                                                     |
| **Wiki**                | [Wiki do sistema](https://git.iti.gov.br/{{grupo}}/{{repositorio}}/-/wikis/home) |

---

## Sumário

- [Visão geral](#visão-geral)
  - [Problema que resolve](#problema-que-resolve)
  - [Principais funcionalidades](#principais-funcionalidades)
  - [Quem usa](#quem-usa)
  - [Stack](#stack)
- [Setup rápido](#setup-rápido)
  - [Pré-requisitos](#pré-requisitos)
  - [Subindo o ambiente](#subindo-o-ambiente)
  - [Estrutura de pastas](#estrutura-de-pastas)
- [Documentação complementar](#documentação-complementar)
- [Suporte](#suporte)

---

## Visão geral

### Problema que resolve

<!--
  1 a 2 parágrafos, escritos para quem acabou de chegar no time:
  - qual dor existia antes do sistema;
  - o que ele centraliza, automatiza ou controla;
  - para quem (áreas, perfis).
  Detalhes de regra de negócio vão para a Wiki, não aqui.
-->

{{Parágrafo 1: a dor e o que o sistema centraliza ou automatiza.}}

{{Parágrafo 2 (opcional): recursos de apoio, como painel administrativo, notificações e integrações.}}

### Principais funcionalidades

<!--
  4 a 10 itens. Formato: **Nome curto**: Permite <verbo> <o quê>.
  Ordene do mais usado para o menos usado.
-->

- **{{Funcionalidade}}**: Permite {{...}}.
- **{{Funcionalidade}}**: Permite {{...}}.
- **{{Funcionalidade}}**: Permite {{...}}.

### Quem usa

<!--
  Perfis de acesso e o que cada um pode fazer.
  - Se o sistema usa o Login Universal, use os mesmos nomes de perfil
    configurados lá (ex.: Master, Admin, Padrão, Leitura).
  - Sistema sem usuário final (pipeline, job, API interna)? Troque a
    tabela por "Quem consome": sistemas ou áreas que dependem dos dados.
-->

| Perfil     | O que faz no sistema         |
| ---------- | ---------------------------- |
| {{Perfil}} | {{O que pode ver e alterar}} |
| {{Perfil}} | {{O que pode ver e alterar}} |

### Stack

<!--
  Uma linha por camada. Remova as que não se aplicam e adicione as que
  faltam (fila, cache, orquestrador, servidor web...).
  "Versão" é a versão da tecnologia DAQUELA linha, conferida no
  package.json / pom.xml / Dockerfile. Ex.: Spring Boot 3.2.5 em uma
  linha e Java 17 em outra, nunca "Spring Boot 17 ou superior".
-->

| Camada         | Tecnologia                    | Versão    |
| -------------- | ----------------------------- | --------- |
| Front-end      | {{React + TypeScript (Vite)}} | {{x.y.z}} |
| Back-end       | {{Spring Boot}}               | {{x.y.z}} |
| Runtime        | {{Java}}                      | {{xx}}    |
| Banco de dados | {{PostgreSQL}}                | {{x.y}}   |

---

## Setup rápido

### Pré-requisitos

<!-- Só o que precisa estar instalado na máquina onde os comandos rodam. -->

| Ferramenta     | Versão mínima | Verificar com            |
| -------------- | ------------- | ------------------------ |
| Git            | 2.40          | `git --version`          |
| Docker         | 24            | `docker --version`       |
| Docker Compose | v2            | `docker compose version` |
| {{Ferramenta}} | {{versão}}    | `{{comando}}`            |

**Acessos necessários antes de começar:**

<!--
  Tudo o que depende de outra pessoa liberar. Diga A QUEM pedir, não só
  o quê: é aqui que o novo membro do time costuma travar no primeiro dia.
-->

- VPN / rede interna do ITI.
- Perfil no Login Universal para o {{SIGLA}}: solicite a {{quem tem perfil Admin}}.
- Acesso à máquina de desenvolvimento (`{{IP}}`) via MobaXterm: solicite a {{quem}}.
- {{Outros acessos: banco, cofre de senhas, API externa...}}

### Subindo o ambiente

#### Quadro de ambientes

<!--
  Uma linha por endereço que alguém precisa conhecer. Remova as linhas
  que não se aplicam. Login Universal e SMTP de homologação/produção já
  vêm preenchidos porque são compartilhados entre os sistemas.
  Mais de um ambiente de dev (ex.: HTTP e HTTPS)? Adicione a coluna no
  cabeçalho E em todas as linhas.
-->

|                                 | Desenvolvimento                            | Homologação                              | Produção                               |
| ------------------------------- | ------------------------------------------ | ---------------------------------------- | -------------------------------------- |
| **Branch**                      | `{{dev}}`                                  | `{{homologacao}}`                        | `{{main}}`                             |
| **{{Front-end}} (porta {{N}})** | `{{url}}`                                  | `{{url}}`                                | `{{url}}`                              |
| **{{Back-end}} (porta {{N}})**  | `{{url}}`                                  | `{{url}}`                                | `{{url}}`                              |
| **Login Universal**             | `https://dev-loginuniversal.in.iti.gov.br` | `https://h-loginuniversal.in.iti.gov.br` | `https://loginuniversal.in.iti.gov.br` |
| **Servidor de e-mail**          | `{{host}}:{{porta}}`                       | `smtp-relay.iti.gov.br:25`               | `smtp-relay.iti.gov.br:25`             |

---

#### Passo 1 - Clonar a branch do ambiente

```bash
git clone -b <BRANCH> https://git.iti.gov.br/{{grupo}}/{{repositorio}}.git
cd {{repositorio}}
```

Valores por ambiente:

| Variável               | Desenvolvimento           | Homologação | Produção    |
| ---------------------- | ------------------------- | ----------- | ----------- |
| `DATABASE_URL`         | `{{host}}:5432/{{banco}}` | `{{valor}}` | `{{valor}}` |
| `DATABASE_USER`        | 🔒                        | 🔒          | 🔒          |
| `DATABASE_PASSWORD`    | 🔒                        | 🔒          | 🔒          |
| `{{NOME_DA_VARIAVEL}}` | `{{valor}}`               | `{{valor}}` | `{{valor}}` |

> 🔒 **Valor sigiloso: não fica no README, nem o de desenvolvimento.** Solicite a {{pessoa ou área responsável}} ou consulte {{cofre de senhas / local seguro}}.

### Estrutura de pastas

<!--
  Só os 2 ou 3 primeiros níveis. Explique o que NÃO é óbvio, como regra
  de organização, onde ficam as migrations e o que é gerado
  automaticamente. Pastas autoexplicativas podem ficar sem comentário.
-->

```text
{{repositorio}}/
├── {{frontend}}/                  # {{ex.: SPA React + TypeScript}}
│   └── src/
│       ├── {{pasta}}/             # {{o que tem e quando mexer}}
│       ├── {{pasta}}/             # {{...}}
│       └── {{arquivo}}            # {{...}}
├── {{backend}}/                   # {{ex.: API Spring Boot}}
│   └── src/main/
│       ├── java/{{pacote}}/       # {{...}}
│       └── resources/             # {{ex.: application.yml, migrations Flyway}}
├── {{.gitlab-ci.yml}}             # {{pipeline de CI/CD}}
└── README.md
```

---

## Documentação complementar

<!--
  O que é profundo demais para o README fica na Wiki. Mantenha só as
  linhas que já existem: link para página vazia frustra mais do que a
  falta do link.
-->

| Documento                                                 | Onde                                                                  |
| --------------------------------------------------------- | --------------------------------------------------------------------- |
| Wiki do sistema (onboarding, regras de negócio, operação) | [Wiki](https://git.iti.gov.br/{{grupo}}/{{repositorio}}/-/wikis/home) |
| Arquitetura (C4: contexto, contêineres, componentes)      | [Wiki › Arquitetura]({{link}})                                        |
| Decisões de arquitetura (ADRs)                            | [{{docs/adr/}}]({{link}})                                             |
| Documentação da API (OpenAPI / Swagger)                   | `{{url do swagger-ui}}`                                               |
| Normativos aplicáveis                                     | {{ex.: DOC-ICP-xx, IN ITI nº xx/AAAA}}                                |

## Suporte

<!-- [OPCIONAL] A linha "Incidentes em produção" pode ser removida. -->

- **Dúvidas técnicas:** {{Nome}} ({{nome.sobrenome}}@iti.gov.br)
- **Dúvidas de negócio e regras:** {{Nome do dono do produto}} ({{nome.sobrenome}}@iti.gov.br)
- **Incidentes em produção:** {{canal, fila ou pessoa}}

<sub>Uso interno do ITI.</sub>

<!-- readme-template-iti v1.0 (2026-10). Não remova: indica qual versão do template este README segue. -->
