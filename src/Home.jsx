import myimg from "../public/myImg.jpeg";
import {Link} from "react-router-dom";
import "./assets/css/home.css";
import python from "../public/python.png";
import js from "../public/js.png";
import react from "../public/react.png";
import nodejs from "../public/nodejs.png";
import html from "../public/html.png";
import css from "../public/css.png";
import mySql from "../public/mysql.png";
import mongodb from "../public/mongoDb.png";

function Home(){
    return (
        <>
            <div className="Home-main">
                <h4>
                    i'M <span className="my-name">Manan Korpe</span> <br/>
                    Mern Stack Developer <br/>
                    <Link to="/contact"><button>Contact Me</button></Link>
                </h4>
                <img src={myimg} alt="image not found"></img>
            </div>
            <div className="about-main">
                <h1>About My Self</h1>
                <p>Hi, I'm a recent graduate with a Bachelor's degree in Computer Applications (BCA). I have learned a lot about programming, databases, and Web development during my studies.

                    I know how to code in languages like JavaScript, Python, PHP, C and C++. I have worked on several projects that helped me improve my skills and work well in teams.

                    I am very interested in web development . I always try to learn new things and keep up with the latest trends in technology. My goal is to work on exciting projects and help create great solutions.

                 </p>
            </div>
            <div className="skill-main-1">
                <h1>My Skills</h1>
                <div className="skill-main">
                    <MySkill img={python} name={"Python"}/>
                    <MySkill img={js} name={"JavaScript"}/>
                    <MySkill img={react} name={"ReactJs"}/>
                    <MySkill img={nodejs} name={"NodeJs"}/>
                    <MySkill img={html} name={"Html"}/>
                    <MySkill img={css} name={"Css"}/>
                    <MySkill img={mySql} name={"Mysql"}/>
                    <MySkill img={mongodb} name={"MongoDb"}/>
                    
                </div>
            </div>
            
        </>
    )
}

function MySkill({img,name}){
    return(
        <div className="skill-cont">   
            <img src={img}></img>
            <h3>{name}</h3>
        </div>
    )
}
export default Home