import React from 'react'
import Header from '../components/Header';

const email = 'noahthorn2@gmail.com'
const twitter = 'https://www.twitter.com/noah_k_t'

export default function Contact() {
    return (
        <div style={divStyle}>
            <Header />
            <h1>Contact Information</h1>
            <p>Email: <a href="mailto:noahthorn2@gmail.com" target="_top">{email}</a></p>
            <p>Twitter: <a href={twitter} target="_blank" rel="noopener noreferrer">@noah_k_t</a></p>
        </div>
    )
}

const divStyle = {
    textAlign: "center"
}
