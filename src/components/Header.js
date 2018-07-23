import React from 'react'
import { Header as UiHeader } from 'semantic-ui-react'
import headerStyle from '../styles/headerStyle'

class Header extends React.Component {
  render () {
    return (
      <UiHeader as='h1' style={headerStyle}>
        Blog App
      </UiHeader>
    )
  }
}

export default Header