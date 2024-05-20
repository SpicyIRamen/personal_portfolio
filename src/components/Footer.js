import React from 'react';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ResumeIcon from '@mui/icons-material/ContactPage';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import '../styles/Footer.css';

import pdf from '../assets/Resume.pdf';

const onButtonClick = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Tooltip title="LinkedIn">
                    <Link href="https://www.linkedin.com/in/seánwerner" target="_blank">
                        <LinkedInIcon />
                    </Link>
                </Tooltip>
                <Tooltip title="Github">
                    <Link href="https://github.com/SpicyIRamen" target="_blank">
                        <GithubIcon />
                    </Link>
                </Tooltip>
                <Tooltip title="Email">
                    <Link href="mailto:seanchristofferwerner@gmail.com">
                        <EmailIcon />
                    </Link>
                </Tooltip>
                <Tooltip title="Download Resume">
                    <Link href="/experience" onClick={onButtonClick}>
                        <ResumeIcon />
                    </Link>
                </Tooltip>
            </div>
            <p><b>seanchristofferwerner@gmail.com</b></p>
            <p>&copy; 2024 seanwerner.tech</p>
        </div>
    )
}

export default Footer;