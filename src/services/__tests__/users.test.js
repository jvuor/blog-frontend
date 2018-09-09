jest.mock('axios')
import axios from 'axios'
import userService from '../users'

describe('userService unit tests', () => {
  const expectedUrl = 'http://localhost:3003/api/users'

  test('userService.getAll sends expected request and returns the response', async () => {
    axios.get.mockImplementationOnce((url) => 
      Promise.resolve({
        data: {
          url: url
        }
      }))

    const response = await userService.getAll()
    expect(Object.keys(response).length).toBe(1)
    expect(response.url).toBe(expectedUrl)
  })
})
