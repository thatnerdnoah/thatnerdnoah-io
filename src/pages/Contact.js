import React from 'react'
import Header from '../components/Header';

const email = 'noahthorn2@gmail.com'

export default function Contact() {
    return (
        <div style={divStyle}>
            <Header />
            <h1>Contact Information</h1>
            <p>Email: <a href="mailto:noahthorn2@gmail.com" target="_top">{email}</a></p>
        </div>
    )
}

const divStyle = {
    textAlign: "center"
}
