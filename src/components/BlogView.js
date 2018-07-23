import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Icon, Segment, Header } from 'semantic-ui-react'
import Moment from 'moment'

class BlogView extends React.Component {
  render () {
    const blog = this.props.blogs.find(m => m.id === this.props.blogId)
    return (
      <div>
        <Link to='/'>
          <h6><Icon name='angle double left' />Back</h6>
        </Link>
        <Header icon textAlign='center'>
          <Icon name='envelope open outline' circular /><br />
          <Header.Content>
            {blog.title}
          </Header.Content>
        </Header>
        <p>{blog.content}</p>
        <Segment compact>
          <Icon name='pencil' />
          Written by {blog.user.name} {Moment(blog.created).fromNow()}
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(BlogView)