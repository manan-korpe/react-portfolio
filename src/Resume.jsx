import resume from "../public/resume.png";
import "./assets/css/resume.css";

function Resume(){
    const DownloadSPdf = () =>{
        const pdfUrl = resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <>
            <div className="resume-main">
                <h1>My Resume</h1>
                <img src={resume} alt="resume not Found"></img>
                <button onClick={DownloadSPdf} className="downlaod-resume">Download Resume</button>
            </div>
        </>
    )
}

export default Resume;