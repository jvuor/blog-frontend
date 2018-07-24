import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Container, Dimmer, Loader, Grid } from 'semantic-ui-react'
import Header from './components/Header'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu'
import BlogList from './components/BlogList'
import BlogView from './components/BlogView'
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
        <Router>
          <div>
            <Header />
            <Container style={containerStyle}>
              <Grid>
                <Grid.Column mobile={16} tablet={11} computer={12}>
                  <Switch>
                    <Route exact path='/' render={() => <BlogList />} />
                    <Route path='/:id/:title' render={({match}) => <BlogView blogId={match.params.id} />} />
                    <Redirect to='/' />
                  </Switch>
                  <Footer />
                </Grid.Column>
                <Grid.Column tablet={5} computer={4} only='tablet computer'>
                  <SideMenu />
                </Grid.Column>
                <Grid.Row only='mobile'>
                  <Grid.Column>
                    <SideMenu />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </div>
        </Router>
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