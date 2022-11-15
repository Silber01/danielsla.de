import '../App.css'
import React, { useRef, useState, useEffect } from 'react';
function Experience() {
    return (
        <div className>  
            <h1>Experience</h1>
            <div className="nameDate">
                <h2>Silver Creek Academy</h2>
                <p>Tutor, September 2021 - Present</p>
            </div>
            <p>
                At Silver Creek Academy, I've tutored several high school and middle school students to help them with their math classes.
                The subjects I have tutored at this academy range from the fundamentals of arithmetic to AP Calculus and Statistics.
            </p>
            <p style={{marginBottom: (window.innerHeight * 0.005),  textDecoration: `underline`}}>My accomplishments at Silver Creek Academy include:</p>
            <ul>
                <li>Aquiring exhaustive knowledge of several high school subjects simultaneously to cater to several students at once</li>
                <li>Consistently improving student performance and confidence in mathmematics</li>
                <li>Teaching classes of high school students for SAT math preparation</li>
            </ul>
            <div className="nameDate">
                <h2>Freelance</h2>
                <p>Tutor, 2018 - 2022</p>
            </div>
            <p>
                Before tutoring at an official academy, I did freelance tutoring. During this time, I tutored students in high school math and college level computer science.
            </p>
            <p style={{marginBottom: (window.innerHeight * 0.005),  textDecoration: `underline`}}>My accomplishments while freelance tutoring include:</p>
            <ul>
                <li>Tutoring difficult classes, such as "CS146 - Data Structures and Algorithms" and "CS149 - Operating Systems"</li>
                <li>Connecting with, scheduling, and coordinating tutoring sessions with various students in my school with no outside help</li>
                <li>Discovering and utilizing effective methods to teach, both for in-person and online classes</li>
            </ul>
            <div className="nameDate">
                <h2>Happy Hollow Park and Zoo</h2>
                <p>Ride Operator, 2017 - 2021</p>
            </div>
            <p>
                Happy Hollow was my first job, starting when I was only 16. I operated the various rides that Happy Hollow had to offer while
                doing everything in my ability to provide the best experience to guests as possible.
            </p>
            <p style={{marginBottom: (window.innerHeight * 0.005),  textDecoration: `underline`}}>My accomplishments at Happy Hollow Park and Zoo include:</p>
            <ul>
                <li>Developing effective communication abilities in order to coordinate large groups to optimize efficiency and safety</li>
                <li>Utilizing multitasking abilities to ensure guest safety and entertainment while operating rides</li>
                <li>Resolving situations where guests are upset or endangered quickly and effectively</li>
            </ul>
        </div>
    )
}

export default Experience;