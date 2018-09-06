import { actionUsersInit } from '../userActions'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
//import userService from '../../services/users'
jest.mock('../../services/users')

const mockStore = configureMockStore([thunk])

describe('blogActions unit tests', () =>{
  test('actionUserInit calls the service and dispatches the correct action', async () =>{
    const store = mockStore({})
    await store.dispatch(actionUsersInit())
    const actions = store.getActions()
    expect(actions.length).toBe(1)
    expect(actions[0]).toEqual({ type: 'USERINIT', data: { test: 'test' }})
  })
})
