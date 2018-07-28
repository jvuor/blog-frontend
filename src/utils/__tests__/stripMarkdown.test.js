import stripMarkdown from '../stripMarkdown/'

describe('stripMarkdown unit test', () => {
  test('empty string returns an empty string', () => {
    const testString = ''
    const result = stripMarkdown(testString)
    expect(result).toBe('')
  })

  test('string with markdown returns the same string without markdown', () => {
    const testString = '### Header \n * List Item \n * List Item'
    const result = stripMarkdown(testString)
    expect(result).toBe(' Header \n  List Item \n  List Item')
  })
})