import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2>Hi, my name is Se&aacute;n Werner</h2>
                <div className="prompt">
                    <p>I am a full-stack developer who loves tech.</p>
                    <Link href="https://www.linkedin.com/in/seánwerner" target="_blank">
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://github.com/SpicyIRamen" target="_blank">
                        <GithubIcon />
                    </Link>
                    <Link href="mailto:seanchristofferwerner@gmail.com">
                        <EmailIcon />
                    </Link>
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Front-End</h2>
                        <span>ReactJS, JavaScript, NPM, HTML, CSS, MaterialUI</span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>Java Spring, .Net, MySQL, MS SQL, Node.js, MongoDB</span>
                    </li>
                    <li className="item">
                        <h2>Tools</h2>
                        <span>Unity, UE 4 & 5, Git, GitHub, Gitlab, VS Code, Visual Studio, Eclipse, IntelliJ</span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>Java, JavaScript, C#, C++, Python</span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;