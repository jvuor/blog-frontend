import React from 'react'
import { connect } from 'react-redux'
import { Item, Icon } from 'semantic-ui-react'
import Moment from 'moment'

class BlogList extends React.Component {
  render () {
    return (
      <Item.Group>
        {this.props.blogs.map(blog => 
          <Item key={blog.id}>
            <Icon name='envelope open outline' />
            <Item.Content>
              <Item.Header>{blog.title}</Item.Header>
              <Item.Description>
                {blog.content}
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