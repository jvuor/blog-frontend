import { actionBlogInit, actionBlogAdd, actionBlogDelete } from '../blogActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import blogService from '../../services/blogs'
jest.mock('../../services/blogs')

const mockStore = configureMockStore([thunk])

describe ('blogActions unit tests', () => {
  const initialState = {}

  test('actionBlogInit retrieves data and sends the correct action', async () => {
    const store = mockStore(initialState)
    await store.dispatch(actionBlogInit())
    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0]).toEqual({ type: 'BLOGINIT', data: { test: 'test' }})
  })

  test('actionBlogAdd sends correct action', async () => {
    const store = mockStore(initialState)
    await store.dispatch(actionBlogAdd())
    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0]).toEqual({ type: 'BLOGNEW', data: { test: 'test' } })
  })

  test('actionBlogDelete calls the right function and sends correct action', async () => {
    const store = mockStore(initialState)
    await store.dispatch(actionBlogDelete(1))
    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0]).toEqual({ type: 'BLOGDELETE', id: 1 })
    expect(blogService.deleteBlog.mock.calls.length).toBe(1)
    expect(blogService.deleteBlog.mock.calls[0][0]).toBe(1)
  })
})
