import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { BlogList } from '../BlogList'
import { shallow } from 'enzyme'
import blogTestData from './blogTestData'

describe('BlogList component unit tests', () => {
  test('fails on empty redux state', () => {
    const blogs = null
    expect(() => shallow(<BlogList blogs={blogs} />)).toThrow()
  })

  test('displays all the correct data when given a valid state', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <BlogList blogs={blogTestData} />
      </MemoryRouter>
    )
    const content = wrapper.html()

    blogTestData.forEach(blog => {
      expect(content).toContain(blog.title)
      expect(content).toContain(blog.user.name)
    })

    expect(content).toContain('<a href="/5b58dce799f2274cc85b0933/Markdown-Test">')
  })

  test('snapshot test', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <BlogList blogs={blogTestData} />
      </MemoryRouter>
    )
    const content = wrapper.html()
    expect(content).toMatchSnapshot()
  })
})