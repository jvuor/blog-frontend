import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu, Header, Icon } from 'semantic-ui-react'
import titleLink from '../utils/titleLink'

export class SideMenu extends React.Component {
  stickyMenuItem = (blog) =>
    <Menu.Item
      as={Link}
      to={titleLink(blog.title, blog.id)}
      key={`${blog.title}-sm`}
      name={`${blog.title}-sm`}
      content={blog.title}
      active={true}
    />

  recentMenuItem = (blog) =>
    <Menu.Item
      as={Link}
      to={titleLink(blog.title, blog.id)}
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
          <p>Hi, my name is Jussi and I&apos;m a coder.<br />
            <Icon name='mail' /><a href='mailto:jussi.vuorinen@gmail.com'>email me!</a><br />
            <Icon name='github' /><a href='http://www.github.com/jvuor' target='parent'>github.com/jvuor</a><br />
            <Icon name='address book outline' /><a href='https://www.dropbox.com/s/89c5q6athfwnfqx/CV.pdf?dl=0' target='parent'>My  CV</a>
          </p>
        </Menu.Item>      
        {stickiedPosts.length > 0?
          <Menu.Item>
            <Menu.Header>Important posts</Menu.Header>
            <Menu.Menu>
              {stickiedPosts.map(blog => this.recentMenuItem(blog))}
            </Menu.Menu>
          </Menu.Item>:
          null }
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