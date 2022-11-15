import '../App.css'
import React, { useRef, useState, useEffect } from 'react';
function AboutMe() {
    return (
        <div>  
            <h1>About Me</h1>
            <img className="rightImage" id="pfp" src={require("../images/pfp.jpg")}/>
            <p>Hello! I'm Daniel.</p>
            <p>
                I'm a Software Engineering student at San Jose State University. 
                My ambition is to solve real world problems using software as my tool and artform. 
                I have experience in machine learning and AI, server architecture, full-stack development, 
                database management, effective applications of data structures and algorithms, and several other software practices.
                I enjoy sharpening my skills by challenging myself to step out of my comfort zone in order to accomplish goals and make products I can be proud of.  
                Additionally, I'm a development team and public relations officer and an event planner for the Software and Computer Engineering Society at SJSU. 
            </p>
            <h2>Skills</h2>
            <p><b>Tools: </b> Git/Github, Unity, PyCharm, IntelliJ, CLion, VSCode, Visual Studio, Figma</p>
            <p><b>Languages/Frameworks: </b>Python, Java, C, C++, HTML/CSS, JavaScript, React.js, Node.js, SQL, Bash</p>
            <p><b>Technical: </b>Data Structures and Algorithms, Linux Server Architecture, Internet Networks, AI/ML</p>
            <p><b>Soft: </b>Leadership, Problem Solving, Adapting to New Environments</p>
            

            
        </div>
    )
}

export default AboutMe;