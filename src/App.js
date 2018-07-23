import React from 'react'
import { connect } from 'react-redux'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Header from './components/Header'
import Footer from './components/Footer'
import BlogList from './components/BlogList'
import initializeLogin from './config/loginInitialization'
import { actionBlogInit } from './actions/blogActions'
import { actionUsersInit } from './actions/userActions'
import { actionUserFromStorage } from './actions/loginActions'
import containerStyle from './styles/containerStyle'

class App extends React.Component {
  componentDidMount = async () => {
    await this.props.actionBlogInit()
    await this.props.actionUsersInit()

    const user = initializeLogin()
    if (user) { this.props.actionUserFromStorage(user) }

  }

  render () {
    var loading = !this.props.users || !this.props.blogs
    if(loading) {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )
    } else {
      return (
        <div>
          <Header />
          <Container style={containerStyle}>
            
            <BlogList />
            <Footer />
          </Container>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
    users: state.users
  }
}

export default connect(mapStateToProps, { actionUsersInit, actionBlogInit, actionUserFromStorage })(App)