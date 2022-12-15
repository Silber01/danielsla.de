import '../App.css'
import resume from '../images/resume12_15_22.png'
import resumePDF from "../resume12_15_22.pdf"
function Resume() {
    return (
        <div>  
            <h1>Resume</h1>
            <div className="resumeCenterer">
            <img className="resumePNG" src={resume} alt={"resume"}></img>
            <p className="resumeDownload">Click <a href={resumePDF} target="_blank" rel="noreferrer noopener">here</a> to view as PDF</p>
            </div >
        </div>
        
    )
}

export default Resume;