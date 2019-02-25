import React, { Component } from 'react'
import Header from '../components/Header';
import profilePicture from '../img/IMG_1390.jpg'
// import Footer from '../components/Footer';

class Home extends Component {

    render() {
        return (
            <div style={divStyle}>
                <Header />
                <img src={profilePicture} alt="Profile" style={imgStyles} />
                <h1>ThatNerdNoah's Portfolio</h1>
                <p>Coming up with new ideas to take development and the world to the next level.</p>
                {/* <Footer /> */}
            </div >
        )
    }
}

export default Home

const imgStyles = {
    width: window.screen.width > 480 ? "27%" : "75%",
    height: "auto",
    margin: "auto",
    display: "block",
    paddingTop: "5px",
    position: "relative"
}

const divStyle = {
    textAlign: "center",
    marginBottom: "10px"
}
