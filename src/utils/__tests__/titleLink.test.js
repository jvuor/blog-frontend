import titleLink from '../titleLink'

describe ('titleLink unit test', () => {
  test('empty arguments returns expected result', () => {
    const title = ''
    const id = ''
    const result = titleLink(title, id)
    expect(result).toBe('//')
  })

  test('realistic arguments returns expected result', () => {
    const title = 'A Test Title'
    const id = 'abcdefg'
    const result = titleLink(title, id)
    expect(result).toBe('/abcdefg/A-Test-Title')
  })
})