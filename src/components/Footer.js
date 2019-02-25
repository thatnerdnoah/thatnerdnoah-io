import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div style={footerStyle}>
        <footer>© Copyright 2019 All rights reserved</footer>
      </div>
    )
  }
}


const footerStyle = {
  background: "#696969",
  color: "#fff",
  padding: "5px"
 
}


export default Footer