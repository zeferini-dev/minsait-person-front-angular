# Pasta de Testes

Estrutura centralizada dos testes do projeto:

```
tests/
├── cypress/                 # Testes E2E Cypress
│   ├── cypress.config.ts    # Configuração
│   ├── e2e/                 # Specs
│   └── support/             # Suporte
├── e2e-playwright/          # Testes E2E Playwright
│   ├── playwright.config.ts # Configuração
│   └── *.spec.ts
└── jest/                    # Testes unitários Jest
    ├── jest.config.js
    ├── jest.setup.js
    └── *.jest.spec.ts
```

Veja [TESTING.md](../TESTING.md) na raiz do projeto para comandos e detalhes.
