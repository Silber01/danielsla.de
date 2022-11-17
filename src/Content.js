import './Content.css'
import './Descriptions.css'
import React, { useRef, useEffect } from 'react';
import AboutMe from './content/aboutme.js'
import Education from './content/education.js'
import Experience from './content/experience.js'
import Projects from './content/projects.js'
import Resume from './content/resume.js'

let navbar = null;
let description = null;
let content = null;
let isAtTop = null;
let showContacts = null;
let selected = null;

let abtMe = null;
let education = null;
let experience = null;
let projects = null;
let resume = null;
let abtMeBckgrnd = null;
let educationBckgrnd = null;
let experienceBckgrnd = null;
let projectsBckgrnd = null;
let resumeBckgrnd = null;

let abtMeDesc = null;
let educationDesc = null;
let experienceDesc = null;
let projectsDesc = null;
let resumeDesc = null;

let contacts = null;


function Content() {
    const navbarRef = useRef(null);
    const descriptionRef = useRef(null);
    const contentRef = useRef(null);
    const abtMeRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const resumeRef = useRef(null);
    const abtMeBckgrndRef = useRef(null);
    const educationBckgrndRef = useRef(null);
    const experienceBckgrndRef = useRef(null);
    const projectsBckgrndRef = useRef(null);
    const resumeBckgrndRef = useRef(null);
    const abtMeDescRef = useRef(null);
    const educationDescRef = useRef(null);
    const experienceDescRef = useRef(null);
    const projectsDescRef = useRef(null);
    const resumeDescRef = useRef(null);
    const contactsRef = useRef(null);
    
    useEffect( () => {
        isAtTop = true;
        showContacts = false;
        window.addEventListener('scroll', onScroll);
        navbar = navbarRef.current;
        description = descriptionRef.current;
        content = contentRef.current;

        abtMe = abtMeRef.current;
        education = educationRef.current;
        experience = experienceRef.current;
        projects = projectsRef.current;
        resume = resumeRef.current;
        abtMeBckgrnd = abtMeBckgrndRef.current;
        educationBckgrnd = educationBckgrndRef.current;
        experienceBckgrnd = experienceBckgrndRef.current;
        projectsBckgrnd = projectsBckgrndRef.current;
        resumeBckgrnd = resumeBckgrndRef.current;

        abtMeDesc = abtMeDescRef.current;
        educationDesc = educationDescRef.current;
        experienceDesc = experienceDescRef.current;
        projectsDesc = projectsDescRef.current;
        resumeDesc = resumeDescRef.current;

        contacts = contactsRef.current;

        abtMeBckgrnd.style.opacity = 1;
        educationBckgrnd.style.opacity = 0;
        experienceBckgrnd.style.opacity = 0;
        projectsBckgrnd.style.opacity = 0;
        resumeBckgrnd.style.opacity = 0;

        abtMeDesc.style.display = "block";
        educationDesc.style.display = "none";
        experienceDesc.style.display = "none";
        projectsDesc.style.display = "none";
        resumeDesc.style.display = "none";

        abtMeDesc.style.opacity = 1;
        educationDesc.style.opacity = 0;
        experienceDesc.style.opacity = 0;
        projectsDesc.style.opacity = 0;
        resumeDesc.style.opacity = 0;

        contacts.style.opacity = 0;
        setTimeout(() =>
        {
            contacts.style.display = `block`;
            contacts.style.opacity = 0;
            onScroll();
        }, 500)

        window.addEventListener('resize', () => {
            resizeAll();  
        })
        window.addEventListener('load', () => {
            resizeAll();  
        })
        setInterval(() => {
            resizeAll();
        }, 100);
        

        
    }
    , [])
    function onScroll() {
        let scrollPos = window.pageYOffset;
        
        // console.log(window.pageYOffset);
        if (scrollPos !== 0)
        {
            if (isAtTop)
            {
                isAtTop = false;
                
                setTimeout(() => {
                    navbar.style.borderBottomLeftRadius = `2vw`;
                    navbar.style.borderBottomRightRadius = `2vw`;
                    
                }, 250);
            }
            
        }
        else
        {
            if (!isAtTop)
            {
                isAtTop = true;
                navbar.style.borderBottomLeftRadius = `0`;
                navbar.style.borderBottomRightRadius = `0`;
            }
            
        }
        if (scrollPos > navbar.clientHeight + (window.innerHeight / 10))
        {
            contacts.style.display = 'block'
            setTimeout(() => {
                contacts.style.opacity = 1;
            }, 10)
            showContacts = true;
            
        }
        else
        {
            if (showContacts)
            {
                showContacts = false;
                contacts.style.opacity = 0;
                setTimeout(() => {
                    contacts.style.display = 'none'
                }, 500)
            }
            
        }
    }
    
    function testChange(page)
    {
        abtMeBckgrnd.style.opacity = 0;
        educationBckgrnd.style.opacity = 0;
        experienceBckgrnd.style.opacity = 0;
        projectsBckgrnd.style.opacity = 0;
        resumeBckgrnd.style.opacity = 0;
        abtMe.style.textDecoration = 'none';
        education.style.textDecoration = 'none';
        experience.style.textDecoration = 'none';
        projects.style.textDecoration = 'none';
        resume.style.textDecoration = 'none';
        content.scrollIntoView({behavior: 'smooth'});
        selected = page;
        abtMeDesc.style.opacity = 0;
        educationDesc.style.opacity = 0;
        experienceDesc.style.opacity = 0;
        projectsDesc.style.opacity = 0;
        resumeDesc.style.opacity = 0;
        switch(page)
        {
            
            case "abtMe":
                abtMe.style.textDecoration = 'underline';
                abtMeBckgrnd.style.opacity = 1;
                setTimeout(() => {
                    abtMeDesc.style.display = "block";
                    educationDesc.style.display = "none";
                    experienceDesc.style.display = "none";
                    projectsDesc.style.display = "none";
                    resumeDesc.style.display = "none";
                    setTimeout(() => {
                        abtMeDesc.style.opacity = 1;
                        resizeAll();
                    }, 50)
                }, 500);
                
                break;
            case "education":
                education.style.textDecoration = 'underline';
                educationBckgrnd.style.opacity = 1;
                setTimeout(() => {
                    abtMeDesc.style.display = "none";
                    educationDesc.style.display = "block";
                    experienceDesc.style.display = "none";
                    projectsDesc.style.display = "none";
                    resumeDesc.style.display = "none";
                    setTimeout(() => {
                        educationDesc.style.opacity = 1;
                        resizeAll();
                    }, 50)
                }, 500);
                
                break;
            case "experience":
                experience.style.textDecoration = 'underline';
                experienceBckgrnd.style.opacity = 1;
                setTimeout(() => {
                    abtMeDesc.style.display = "none";
                    educationDesc.style.display = "none";
                    experienceDesc.style.display = "block";
                    projectsDesc.style.display = "none";
                    resumeDesc.style.display = "none";
                    setTimeout(() => {
                        experienceDesc.style.opacity = 1;
                        resizeAll();
                    }, 50)
                }, 500);
                break;
            case "projects":
                projects.style.textDecoration = 'underline';
                projectsBckgrnd.style.opacity = 1;
                setTimeout(() => {
                    abtMeDesc.style.display = "none";
                    educationDesc.style.display = "none";
                    experienceDesc.style.display = "none";
                    projectsDesc.style.display = "block";
                    resumeDesc.style.display = "none";
                    setTimeout(() => {
                        projectsDesc.style.opacity = 1;
                        resizeAll();
                    }, 50)
                }, 500);
                break;
            case "resume":
                resume.style.textDecoration = 'underline';
                resumeBckgrnd.style.opacity = 1;
                setTimeout(() => {
                    abtMeDesc.style.display = "none";
                    educationDesc.style.display = "none";
                    experienceDesc.style.display = "none";
                    projectsDesc.style.display = "none";
                    resumeDesc.style.display = "block";
                    setTimeout(() => {
                        resumeDesc.style.opacity = 1;
                        resizeAll();
                    }, 50)
                }, 500);
                break;
            default:
                break;
        }
        
    }
    
    function resizeAll()
    {
        const newHeight = `calc(${description.clientHeight + navbar.clientHeight}px + 20vh)`
        abtMeBckgrnd.style.height = `${newHeight}`;
        educationBckgrnd.style.height = `${newHeight}`;
        experienceBckgrnd.style.height = `${newHeight}`;
        projectsBckgrnd.style.height = `${newHeight}`;
        resumeBckgrnd.style.height = `${newHeight}`;
    }
    return (
        <div className="content" ref={contentRef}>
            <div className="background abtMeBckgrnd" ref={abtMeBckgrndRef}></div>
            <div className="background educationBckgrnd" ref={educationBckgrndRef}></div>
            <div className="background experienceBckgrnd" ref={experienceBckgrndRef}></div>
            <div className="background projectsBckgrnd" ref={projectsBckgrndRef}></div>
            <div className="background resumeBckgrnd" ref={resumeBckgrndRef}></div>

            <div className="navbar" ref={navbarRef}>
                <button className="abtMeBtn" 
                    ref={abtMeRef} 
                    onMouseEnter={() => { abtMe.style.textDecoration = 'underline'}}
                    onMouseLeave={() => {if (selected !== "abtMe") abtMe.style.textDecoration = 'none'}}
                    onClick={() => {testChange("abtMe")}}>About Me
                </button>
                <button className="educationBtn"
                    ref={educationRef} 
                    onMouseEnter={() => { education.style.textDecoration = 'underline'}}
                    onMouseLeave={() => {if (selected !== "education") education.style.textDecoration = 'none'}}
                    onClick={() => {testChange("education")}}>Education</button>
                <button className="experienceBtn" 
                    ref={experienceRef}
                    onMouseEnter={() => { experience.style.textDecoration = 'underline'}}
                    onMouseLeave={() => {if (selected !== "experience") experience.style.textDecoration = 'none'}}
                    onClick={() => {testChange("experience")}}>Experience</button>
                <button className="projectsBtn" 
                    ref={projectsRef}
                    onMouseEnter={() => { projects.style.textDecoration = 'underline'}}
                    onMouseLeave={() => {if (selected !== "projects") projects.style.textDecoration = 'none'}}
                    onClick={() => {testChange("projects")}}>Projects</button>
                <button className="resumeBtn" 
                    ref={resumeRef}
                    onMouseEnter={() => { resume.style.textDecoration = 'underline'}}
                    onMouseLeave={() => {if (selected !== "resume") resume.style.textDecoration = 'none'}}
                    onClick={() => {testChange("resume")}}>Resume</button>
            </div>
            <div className="contentContacts" ref={contactsRef}>
                <a href="https://www.linkedin.com/in/danielslade01//" target="_blank" rel="noreferrer noopener">
                    <img className="icon contentIcon" id="linkedin" src={require("./icons/linkedin.png")} alt="linkedin"/>
                </a>
                
                <a href="https://github.com/Silber01/" target="_blank" rel="noreferrer noopener">
                    <img className="icon contentIcon" id="github" src={require("./icons/github.png")} alt="github"/>
                </a>
                <a href="https://leetcode.com/Silver01/" target="_blank" rel="noreferrer noopener">
                    <img className="icon contentIcon" id="leetcode" src={require("./icons/leetcode.png")} alt="linkedin"/>
                </a>
                <a href="mailto:danielgrantslade@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img className="icon contentIcon" id="email" src={require("./icons/mail.png")} alt="email"/>
                </a>
            </div>
            
            <div className="descriptions" ref={descriptionRef}>
                <div className="desc abtMeDesc" ref={abtMeDescRef}>
                    <AboutMe/>
                </div>
                <div className="desc educationDesc" ref={educationDescRef}>
                    <Education/>
                </div>
                <div className="desc experienceDesc" ref={experienceDescRef}>
                    <Experience />
                </div>
                <div className="desc projectsDesc" ref={projectsDescRef}>
                    <Projects />
                </div>
                <div className="desc resumeDesc" ref={resumeDescRef}>
                    <Resume />
                </div>
            </div>
        </div>
    );
}
export default Content;