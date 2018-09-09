const setToken = jest.fn(() => Promise.resolve({ test: 'test' }))

const getAll = jest.fn(() => Promise.resolve({ test: 'test' }))

const postBlog = jest.fn(() => Promise.resolve({ test: 'test' }))

const deleteBlog = jest.fn()

export default { getAll, setToken, postBlog, deleteBlog }
