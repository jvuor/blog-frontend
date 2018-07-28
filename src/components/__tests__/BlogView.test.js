import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { BlogView } from '../BlogView'
import { shallow } from 'enzyme'
import blogTestData from './blogTestData'

describe('BlogList component unit tests', () => {
  test('breaks on an empty redux state', () => {
    const blogs = null
    const blogId = null
    const result = shallow(
      <MemoryRouter>
        <BlogView blogs={blogs} blogId={blogId} />
      </MemoryRouter>
    )

    expect(() => result.html()).toThrow(TypeError)
  })

  test('shows expected data when given a proper state', () => {
    const blogs = blogTestData
    const blogId = '5b58dce799f2274cc85b0933'
    const wrapper = shallow(
      <MemoryRouter>
        <BlogView blogs={blogs} blogId={blogId} />
      </MemoryRouter>
    )

    const content = wrapper.html()

    expect(content).toContain('Markdown Test')
    expect(content).toContain('Test User')
    //check for no markup
    expect(content).not.toContain('#')
    expect(content).not.toContain('*')
  })

  test('snapshot test', () => {
    const blogs = blogTestData
    const blogId = '5b58dce799f2274cc85b0933'
    const wrapper = shallow(
      <MemoryRouter>
        <BlogView blogs={blogs} blogId={blogId} />
      </MemoryRouter>
    )
    const content = wrapper.html()

    expect(content).toMatchSnapshot()
  })
})