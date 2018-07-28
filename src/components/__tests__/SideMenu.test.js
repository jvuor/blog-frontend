import React from 'react'
import { SideMenu } from '../SideMenu'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import blogTestData from './blogTestData'

describe('SideMenu component unit tests', () =>{
  test('fails on empty react state', () =>{
    const blogs = null
    const wrapper = shallow(
      <MemoryRouter>
        <SideMenu blogs={blogs} />
      </MemoryRouter>
    )

    expect(() => wrapper.html()).toThrow(TypeError)
  })

  test('snapshot test', () => {
    const blogs = blogTestData
    const wrapper = shallow(
      <MemoryRouter>
        <SideMenu blogs={blogs} />
      </MemoryRouter>
    )
    const content = wrapper.html()

    expect(content).toMatchSnapshot()
  })

  test('displays expected data given a valid state', () => {
    const blogs = blogTestData
    const wrapper = shallow(
      <MemoryRouter>
        <SideMenu blogs={blogs} />
      </MemoryRouter>
    )
    const content = wrapper.html()

    expect(content).toContain('Test Post')
    expect(content).toContain('Important posts')
  })

  test('does not display sticky post menu if there are none', () => {
    const blogs = blogTestData.filter(blog => !blog.sticky)
    const wrapper = shallow(
      <MemoryRouter>
        <SideMenu blogs={blogs} />
      </MemoryRouter>
    )
    const content = wrapper.html()

    expect(content).not.toContain('Important posts')
  })
})