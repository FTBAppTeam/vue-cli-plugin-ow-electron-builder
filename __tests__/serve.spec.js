jest.setTimeout(100000)

const runTests = require('./serve.helper.js').runTests
test('ow:electron:serve', async () => {
  await runTests()
})
