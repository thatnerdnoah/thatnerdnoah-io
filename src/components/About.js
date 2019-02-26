import React, { Component } from 'react'
import Header from './Header'
// import profilePicture from '../img/IMG_1390.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <div style={{
                    padding: "15px"
                }}>
                    <h1>About Me</h1>
                    <h4>General Information</h4>
                    <ul>
                        <li>Age: 21</li>
                        <li>Hobbies: Fortnite, Nintendo Enthusiast, Twitch Viewer/Moderator</li>
                        <li>Interested in creating an idea that can change the world</li>
                        <li>Graduate from Harford Community College
                            <ul>
                                <li>Computer Information Systems AAS</li>
                                <li>Computer Information Systems Programming Certificate</li>
                            </ul>
                        </li>

                        <li>Information Technology Student at Towson University</li>
                    </ul>

                    <h4>Programming Languages &amp; Frameworks</h4>
                    <ul>
                        <li>Java</li>
                        <li>C/C++</li>
                        <li>HTML/CSS/Javascript</li>
                        <li>React.js Framework</li>
                    </ul>
                    <h4>Future Endeavors</h4>
                    <ul>
                        <li>R Programming Language</li>
                        <li>Unity</li>
                        <li>Azure</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default About