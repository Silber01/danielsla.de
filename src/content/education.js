import '../App.css'
import React, { useRef, useState, useEffect } from 'react';
function Education() {
    const classesRef = useRef(null);
    const dropdownBtnRef = useRef(null)
    const [classes, setClasses] = useState(null)
    const [classExp, setClassExp] = useState(false);
    const [dropDownBtn, setDropDownBtn] = useState(null);
    
    useEffect(() => {
        setClasses(classesRef.current)
        setDropDownBtn(dropdownBtnRef.current)
        dropdownBtnRef.current.style.transform = `rotate(-90deg)`;
        classesRef.current.style.maxHeight = 0;
    }, [])
    function toggleClasses()
    {
        setClassExp(!classExp);
        if (classExp)
        {
            classes.style.maxHeight = 0;
            dropDownBtn.style.transform = `rotate(-90deg)`
        }
        else
        {
            dropDownBtn.style.transform = `rotate(0deg)`
            classes.style.maxHeight = `100vh`
        }
    }
    function getClassContent()
    {
        const classesList = ["CS146 - Data Structures and Algorithms"
                        , "CS151 - Object Oriented Design"
                        , "CS157A - Intro to Database Management Systems"
                        , "CS166 - Information Security"
                        , "CS149 - Operating Systems"
                        , "CMPE131 - Software Engineering I"
                        , "CMPE133 - Software Engineering II"
                        , "CMPE102 - Assembly Language Programming"
                        , "CMPE120 - Computer Organization and Architecture"
                        , "CMPE148 - Computer Networks I"
                        , "CMPE187 - Software Quality Engineering"
                        , "CMPE185 - Autonomous Mobile Robots"
                        , "CMPE195E - Senior Design Project I"
                        , "ISE164 - Human Computer Interaction"
                    ]
        return (
            <ul>
            {classesList.map((c) => {
                return (
                    <li key={c}>{c}</li>
                )
            })}
            </ul>
        )
    }
    return (
        <div>
            
            <h1>Education</h1>
            <img className="rightImage" id="sjsu" src={require("../images/sjsu.png")} alt="Tower Hall at SJSU"/>
            <p><b>University:</b> San Jose State University</p>
            <p><b>Major:</b> B.S. Software Engineering</p>
            <p><b>Anticipated Graduation:</b> May 2023</p>
            <p><b>GPA:</b> 3.86</p>
            <p><b>Awards: </b>President's Scholar, Spring 2021 and Spring 2022</p>
            <p className="classExpandBtn" onClick={toggleClasses}><b>Classes Taken</b> {' '}
            <img className="dropdown" src={require("../images/dropdown.png")} ref={dropdownBtnRef} alt=""/>
            </p>
                <div className="accordion" ref={classesRef}>
                    <header>{getClassContent()}</header>
                </div>
            <hr></hr>
            <h2>Clubs</h2>
            <img className="rightImage" id="sce" src={require("../images/sce.png")} alt="SCE Logo"/>
            <p>Since March 2022, I have been a proud member of the Software and Computer Engineering Society (SCE).
                To be more specific, I am a Development Team Officer, Event Planner, and Public Relations Officer for SCE.
                I spent the first few months meeting fellow club members and studying for the development team that I signed up to join,
                the AI and Machine Learning team. During this time, I also joined the Event Planning and Public Relations team and earned the opportunity
                to lead a project myself.</p>
                <p>Currently, I am working on two projects for SCE. With my AI and Machine Learning team, we are designing an AI algorithm
                capable of playing chess, and, with the team I am leading, we are creating a chatbot for the social media application "Discord" that
                challenges users to solve a daily LeetCode problem in order to earn points with the goal of obtaining the highest score.
                 Though both of these projects are in their early stages of development, I am excited to use my knowledge
                and learn from my peers in order to create software that amazes others as well as ourselves. I enjoy my time at SCE, 
                and I look forward to seeing what skills, connections, and friendships I gain and strengthen during my time in this club.
            </p>
        </div>
    )
}

export default Education;