jest.mock('axios')
import axios from 'axios'
import blogService from '../blogs'

describe('blogService unit tests', () => {
  const expectedUrl = 'http://localhost:3003/api/blogs'
  blogService.setToken('tokenTest')
  const expectedConfig = { headers:  { Authorization : 'bearer tokenTest' }}

  test('blogService.getAll sends request to expected url, returns result', async () => {
    axios.get.mockImplementationOnce((url) =>
      Promise.resolve({
        data: { url: url }
      })
    )

    const response = await blogService.getAll()
    expect(Object.keys(response).length).toBe(1)
    expect(response.url).toBe(expectedUrl)
  })

  test('blogService.postBlog works', async () => {
    axios.post.mockImplementationOnce((a, b, c) => 
      Promise.resolve({ data: {
        a: a,
        b: b,
        c: c
      }})
    )

    const response = await blogService.postBlog({testObject: 'testValue'})
    expect(Object.keys(response).length).toBe(3)
    expect(response.a).toBe(expectedUrl)
    expect(response.b).toEqual({testObject: 'testValue'})
    expect(response.c).toEqual(expectedConfig)
  })

  test('blogService.deleteBlog works', async () => {
    axios.delete.mockImplementationOnce((a, b) => 
      Promise.resolve({
        data: {
          a: a,
          b: b
        }
      }))

    const id = 'testId'
    const response = await blogService.deleteBlog(id)
    expect(Object.keys(response).length).toBe(2)
    expect(response.a).toBe(`${expectedUrl}/${id}`)
    expect(response.b).toEqual(expectedConfig)
  })
  
})
 