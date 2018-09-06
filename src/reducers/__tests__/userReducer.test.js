import userReducer from '../userReducer'
import deepFreeze from 'deep-freeze'

describe('userReducer unit tests', () => {
  const initialState = [{
    username: 'testuser',
    name: 'Test User',
    id: 1,
    blogs: []
  }]

  test('return an empty state on an unrelated action', () =>{
    const state = []
    const action = { type: 'TEST_ACTION' }
    deepFreeze(state)
    const newState = userReducer(state, action)

    expect(newState).toEqual(state)
  })

  test('USERINIT returns the correct state', () => {
    const state = []
    const action = { type: 'USERINIT', data: initialState }
    deepFreeze(state)

    const newState = userReducer(state, action)

    expect(newState).toEqual(initialState)
  })
})
