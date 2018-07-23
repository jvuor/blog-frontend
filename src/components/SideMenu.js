import React from 'react'
import { Menu, Header } from 'semantic-ui-react'

class SideMenu extends React.Component {
  handleItemClick = name => this.setState({ activeItem: name })
  
  render () {
    const { activeItem } = this.state || {}

    return (
      <Menu text vertical>
        <Menu.Item active={true}>
          <Header>Jussi Vuorinen</Header>
          <p>Hi, my name is Jussi and I want to be a developer.</p>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Important posts</Menu.Header>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Recent posts</Menu.Header>
        </Menu.Item>
      </Menu>
    )
  }
}

export default SideMenu