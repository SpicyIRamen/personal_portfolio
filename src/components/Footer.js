import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import '../styles/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link href="https://github.com/SpicyIRamen" target="_blank">
                    <GithubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/seánwerner" target="_blank">
                    <LinkedInIcon />
                </Link>
                <Link href="mailto:seanchristofferwerner@gmail.com">
                    <EmailIcon />
                </Link>
            </div>
            <p><b>seanchristofferwerner@gmail.com</b></p>
            <p>&copy; 2024 seanwerner.tech</p>
        </div>
    )
}

export default Footer;