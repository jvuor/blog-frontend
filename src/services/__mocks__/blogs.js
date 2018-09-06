
const setToken = (newToken) => {
  console.log('mock token ', newToken)
}

const getAll = () => {
  return Promise.resolve({ test: 'test' })
}

const postBlog = () => {
  return Promise.resolve({ test2: 'test2'})
}

const deleteBlog = jest.fn()

export default { getAll, setToken, postBlog, deleteBlog }
