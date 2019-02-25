import React, { Component } from 'react'

const githubAPI = 'https://api.github.com/'

export default class GithubProjects extends Component {

    constructor() {
        super();
        this.getGithubInfo();
        this.getRepos();
    }

    state = {
        data: {}
    }

    getGithubInfo = async () => {
        try {
            const response = await fetch(`${githubAPI}users/thatnerdnoah`);
            const data = await response.json();
            this.setState({ data });
            console.log(data);
        } catch(err) {
            console.error(err);
        }
    }

    getRepos = async () => {
        try {
            const response = await fetch(`${githubAPI}users/thatnerdnoah/repos`);
            const data = response.json();
            console.log(data);
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <a href={data.linkToProfile} target="_blank" rel="noopener noreferrer"><img src={data.avatar_url} alt="Profile" width={200} height={200} /></a>
                <p>Click the above image to go to my Github Profile</p>
            </div>
        )
    }

}
