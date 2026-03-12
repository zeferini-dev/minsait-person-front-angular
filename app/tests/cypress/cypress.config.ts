import { defineConfig } from 'cypress';

// Paths relativos ao diretório do config (tests/cypress)
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    supportFile: 'support/e2e.ts',
    specPattern: 'e2e/**/*.cy.ts',
    videosFolder: 'videos',
    screenshotsFolder: 'screenshots',
    downloadsFolder: 'downloads',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
  },
});
