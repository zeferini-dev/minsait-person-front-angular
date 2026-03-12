# Guia de Testes - Minsait Person Front Angular

Este projeto utiliza quatro frameworks de teste:

## 1. Vitest (Unit/Component Tests) - Principal

Testes unitários e de componentes Angular. Executado via Angular CLI.

```bash
# Executar testes
npm run test
# ou
npm run test:vitest

# Modo watch (re-executa ao alterar arquivos)
npm run test:vitest:watch

# Com cobertura
npm run test:vitest:coverage
```

**Arquivos:** `src/**/*.spec.ts` (exclui `*.jest.spec.ts`)

---

## 2. Jest (Unit Tests - Modelos e Lógica Pura)

Testes de modelos e lógica sem dependências Angular.

```bash
# Executar testes Jest
npm run test:jest

# Modo watch
npm run test:jest:watch
```

**Arquivos:** `tests/jest/**/*.jest.spec.ts`

> **Nota:** Jest está configurado com ts-jest para compatibilidade com Angular 21. Use Vitest para testes de componentes e serviços Angular.

---

## 3. Cypress (E2E)

Testes end-to-end interativos.

```bash
# Abrir Cypress (modo interativo) - inicie o app antes em outro terminal
npm run start   # terminal 1
npm run e2e:cypress   # terminal 2

# Executar em modo headless (app deve estar rodando)
npm run e2e:cypress:run

# Executar em modo CI (inicia o app automaticamente)
npm run e2e:cypress:run:ci
```

**Arquivos:** `tests/cypress/e2e/**/*.cy.ts`

**Configuração:** `tests/cypress/cypress.config.ts`

---

## 4. Playwright (E2E)

Testes E2E com suporte a múltiplos browsers. Inicia o servidor automaticamente.

```bash
# Executar (inicia o app automaticamente)
npm run e2e:playwright

# Interface interativa
npm run e2e:playwright:ui

# Modo headed (ver o browser)
npm run e2e:playwright:headed
```

**Arquivos:** `tests/e2e-playwright/**/*.spec.ts`

**Configuração:** `tests/e2e-playwright/playwright.config.ts`

**Pré-requisito:** `npx playwright install` (primeira execução)

---

## Ordem Recomendada

1. **Desenvolvimento:** `npm run test:vitest:watch`
2. **CI/Pre-commit:** `npm run test && npm run test:jest`
3. **E2E local:** `npm run start` + `npm run e2e:cypress` ou `npm run e2e:playwright`
