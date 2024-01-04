jest.setTimeout(600000)

const runTests = require('./build.helper.js').runTests

test('ow:electron:build', async () => {
  await runTests()
})
