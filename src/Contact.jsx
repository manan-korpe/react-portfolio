import "./assets/css/contact.css";
import {Link} from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contact(){
    return(
        <>
        <div className="contact-main">
            <Link className="contact-link" to={"mailto:manankorpe7@gmail.com"}>
                    <FaEnvelope className="icon"/>
                    Email
            </Link>
            <Link className="contact-link" to={'https://www.linkedin.com/in/manan-korpe-2a5716281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'}>
                    <FaLinkedin/>
                    Linkedin
            </Link>
        
            <Link className="contact-link" to={'https://github.com/manan-korpe'}>
                    <FaGithub />
                    GitHub
            </Link>
        </div>
        </>
    )
}

export default Contact