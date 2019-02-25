import React, { Component } from 'react'
import Header from "../components/Header"
import GithubProjects from '../components/GithubProjects';

export default class Projects extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={divStyle}>
                    <h1>Github Projects</h1>
                    <GithubProjects />
                    <h1>School Projects</h1>
                    <p>Coming soon!</p>
                    <h1>Other Projects</h1>
                    <p>Coming soon!</p>
                </div>
            </div>
        )
    }
}

const divStyle = {
    textAlign: "center"
}
