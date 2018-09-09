const data = [
  {
    id: '5b50cb8ca769d33c18087f81',
    username: 'testuser',
    name: 'Test User',
    blogs: [ ] // should add this data too but lacking it shouldn't be a problem 
  }
]
 

describe('checking the test data', () => {
  test('user data test', () => {
    expect(data.length).toBe(1)
    expect(data[0].username).toBe('testuser')
  })
})

export default data
