jest.mock('axios')
import axios from 'axios'
import blogService from '../blogs'

describe('blogService unit tests', () => {
  test('blogService .getAll uses axios.get, returns result', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { test: 'test OK' }
      })
    )

    const response = await blogService.getAll()
    expect(Object.keys(response).length).toBe(1)
    expect(response.test).toBe('test OK')
  })
})
