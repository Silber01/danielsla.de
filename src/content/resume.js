import '../App.css'
import resume from '../images/resume.png'
import resumePDF from "../resume.pdf"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import React, { useRef, useState, useEffect } from 'react';
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