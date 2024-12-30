import project1 from "../public/project1.png";
import "./assets/css/project.css";
import {Link} from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Project(){
    return(
        <>
            <div className="project-main">
                <div className="project-main-inner">
                    <div className="description">
                        <h1>Ecommerce Project</h1>
                        <ul>    
                            <li>
                            Tech stack :- HTML, CSS, JAVASCIPT, PYTHON, DJANGO, MYSQL<br/>
                            </li>
                            <li>
                            It will offer an extensive selection of plants and gardening products with detailed information, care guides, and user reviews to assist customers in making informed choices.
                            </li>
                            <li>
                            The purchasing process will be streamlined, ensuring security and convenience for transactions.
                            </li>
                            <li>
                            the website will provide a feature for users to book gardeners for professional assistance.
                            </li>
                            <li>
                            dedicated section for articles and resources where users can access valuable gardening tips, advice, and in-depth articles on various plant-related topics.
                            </li>
                        </ul>
                        <br/>
                        <Link className="github-link" to={'https://github.com/manan-korpe/ecommerce-website'}>GitHub</Link>
                    </div>
                    <img src={project1}>
                    </img>
                </div>
            </div>
        </>
    )
}

export default Project;