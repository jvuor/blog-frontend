// integrated test for the app.
// api connection is mocked with mock services.

import React from 'react'
import { mount } from 'enzyme'
import App from '../App'
import { Provider } from 'react-redux'
import store from '../config/store'
jest.mock('../services/blogs')
jest.mock('../services/users')
import blogService from '../services/blogs'
import userService from '../services/users'
import mockBlogData from './blogTestData'
import mockUserData from './userTestData'

describe('integration tests', () => {
  test('integration test for fetching and displaying the blog data correctly', async (done) => {
    blogService.getAll.mockImplementation(() => Promise.resolve(mockBlogData))
    userService.getAll.mockImplementation(() => Promise.resolve(mockUserData))

    let app = mount(<Provider store={store}>
      <App />
    </Provider>)

    // using the timeout to wait for the redux state to propagate
    setTimeout(() => {
      app.update()
      const content = app.text()

      // renders sidebar:
      expect(content).toContain('github.com/jvuor')

      // renders header:
      expect(content).toContain('Jussin Blogi')

      // renders footer:
      expect(content).toContain('Blog App by Jussi Vuorinen.')

      // renders blog titles:
      mockBlogData.forEach(blog => {
        expect(content).toContain(blog.title)
      })

      // lets check out the content of a specific post
      const testPost = mockBlogData[3]

      // it should not render at first because the content is truncated from the main view
      expect(content).not.toContain(testPost.content)

      // then we click to open the full post
      app
        .find('a')
        .findWhere(e => e.text() === testPost.title)
        .first()
        .simulate('click', { button: 0 })

      // now we should see the full content
      expect(app.text()).toContain(testPost.content)

      done()
    }, 1000)
  })
})
