import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Header } from 'semantic-ui-react'

class SideMenu extends React.Component {

  stickyMenuItem = (blog) =>
    <Menu.Item
      as={Link}
      to={`/${blog.id}/${blog.title}.split(' ').join('-')`}
      key={`${blog.title}-sm`}
      name={`${blog.title}-sm`}
      content={blog.title}
      active={true}
    />

  recentMenuItem = (blog) =>
    <Menu.Item
      as={Link}
      to={`/${blog.id}/${blog.title.split(' ').join('-')}`}
      key={`${blog.title}-rm`}
      name={`${blog.title}-rm`}
      content={blog.title}
      active={true}
    />
  
  render () {
    const stickiedPosts = this.props.blogs.filter(blog => blog.sticky)

    const recentPosts = this.props.blogs.slice(0,5)

    return (
      <Menu vertical>
        <Menu.Item>
          <Header>Jussi Vuorinen</Header>
          <p>Hi, my name is Jussi and I want to be a developer.</p>
        </Menu.Item>      
        {stickiedPosts.length > 0?
          <Menu.Item>
            <Menu.Header>Important posts</Menu.Header>
            <Menu.Menu>
              {stickiedPosts.map(blog => this.stickyMenuItem(blog))}
            </Menu.Menu>
          </Menu.Item>:
          null}
        <Menu.Item>
          <Menu.Header>Recent posts</Menu.Header>
        </Menu.Item>
        <Menu.Menu>
          {recentPosts.map(blog => this.recentMenuItem(blog))}
        </Menu.Menu>
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(SideMenu)