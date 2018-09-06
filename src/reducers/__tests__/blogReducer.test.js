import blogReducer from '../blogReducer'
import deepFreeze from 'deep-freeze'

describe('blog reducer unit tests', () => {
  const initialState = [{
    title: 'test 1',
    id: 1
  },
  {
    title: 'test 2',
    id: 2
  },
  {
    title: 'test 3',
    id: 3
  }]

  test('return empty state on unhandled action', () => {
    const emptyState = []
    const action = { type: 'TEST_ACTION' }
    deepFreeze(emptyState)
    const newState = blogReducer(emptyState, action)
    expect(newState).toEqual(emptyState)
  })

  test('BLOGINIT initializes the state correctly', () =>{
    const state = []
    const action = { type: 'BLOGINIT', data: initialState }
    deepFreeze(state)
    const newState = blogReducer(state, action)
    expect(newState).toEqual(initialState)

    expect(Array.isArray(newState)).toBe(true)
    expect(newState[0].title).toBe('test 1')
    expect(newState[0].id).toBe(1)
    expect(newState.length).toBe(3)
  })

  test('BLOGDELETE removes correct entry', () => {
    const state = initialState
    const action = {
      type: 'BLOGDELETE',
      id: 2
    }
    deepFreeze(state)
    const newState = blogReducer(state, action)

    expect(Array.isArray(newState)).toBe(true)
    expect(newState).not.toEqual(initialState)
    expect(newState[1].title).toBe('test 3')
    expect(newState[1].id).toBe(3)
    expect(newState.length).toBe(2)
  })

  test('BLOGNEW creates a new blog entry', () => {
    const state = initialState
    const action = {
      type : 'BLOGNEW',
      data : {
        id: 4,
        title: 'test 4'
      }
    }
    deepFreeze(state)
    const newState = blogReducer(state, action)

    expect(Array.isArray(newState)).toBe(true)
    expect(newState).not.toEqual(initialState)
    expect(newState.length).toBe(4)
    expect(newState[3].id).toBe(4)
    expect(newState[3].title).toBe('test 4')
  })
})
