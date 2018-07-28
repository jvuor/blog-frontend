import truncateContent from '../truncateContent'

describe('truncateContent unit test', () => {
  test('empty string returns empty string', () => {
    const content = ''
    const result = truncateContent(content)
    expect(result).toBe('')
  })

  test('short content should not be truncated', () => {
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    const result = truncateContent(content)
    expect(result).toBe(content)
  })

  test('long content gets truncated', () => {
    const content ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const result = truncateContent(content)
    expect(result.length).toBeLessThan(202)
    expect(result).toContain('(...)')
  })
})