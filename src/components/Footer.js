import React from 'react'
import { Divider, Popup, Icon } from 'semantic-ui-react'
import footerStyle from '../styles/footerStyle'

const Footer = () => (
  <div style={footerStyle}>
    <Divider />
    <p>
      <b>Blog App</b> by&#8201;
      <Popup 
        trigger={<a href='http://www.github.com/jvuor' target='parent'>Jussi Vuorinen</a>}
        hoverable>
        <Icon name='mail' /><a href='mailto:jussi.vuorinen@gmail.com'>jussi.vuorinen@gmail.com</a><br />
        <Icon name='github' /><a href='http://www.github.com/jvuor' target='parent'>github.com/jvuor</a>
      </Popup>.
    
      Visit&#8201;
      <Popup
        trigger={<a href='https://github.com/jvuor/blog-frontend' target='parent'>Github</a>}
        hoverable>
        front end: <a href='https://github.com/jvuor/blog-frontend' target='parent'> github.com/jvuor/blog-frontend </a><br />
        back end: <a href='https://github.com/jvuor/blog-backend' target='parent'> github.com/jvuor/blog-backend </a>
      </Popup>&#8201;
      for source.
    </p>
  </div>
)

export default Footer