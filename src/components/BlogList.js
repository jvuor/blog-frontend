import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Item, Icon } from 'semantic-ui-react'
import Moment from 'moment'

const truncateContent = (content) => {
  try {
    if (content.length > 200) {
      return content.split(' ', 30).concat('(...)').join(' ')
    } else {
      return content
    }
  } catch (e) {
    return content
  }
}

const titleLink = (title, id) => {
  return `/${id}/${title.split(' ').join('-')}`
}

class BlogList extends React.Component {
  render () {
    return (
      <Item.Group>
        {this.props.blogs.map(blog => 
          <Item key={blog.id}>
            <Icon name='envelope open outline' />
            <Item.Content>
              <Link to={titleLink(blog.title, blog.id)}>
                <Item.Header>{blog.title}</Item.Header>
              </Link>
              <Item.Description>
                {truncateContent(blog.content)}
              </Item.Description>
              <Item.Extra>
                Written by {blog.user.name} {Moment(blog.created).fromNow()}
              </Item.Extra>
            </Item.Content>
          </Item>
        )}
      </Item.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(mapStateToProps, null)(BlogList)