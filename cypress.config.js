/*const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    setupNodeEvents(on, config) {},
  },
})*/

const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
  e2e: {
    specPattern: './cypress/integration/*.spec.js', // substitua este padrão pelo caminho real dos seus arquivos de teste
    video: true,
    setupNodeEvents(on, config) {},
  },
})

