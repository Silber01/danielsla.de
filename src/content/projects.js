import '../App.css'
function Projects() {
        
    return (
        <div>  
            <h1>Projects</h1>
            <div className="projectsHolder">
            <div className='proj'>
                    <div className="nameDate">
                            <h2>ColorLearn</h2>
                            <p>Fall 2022</p>
                    </div>
                    <img className="projImage" src={require("../images/colorlearn.png")} alt="ColorLearn"/>
                    <p>
                       ColorLearn is a machine learning application that learns how to categorize colors. Either the user provides a color or a random color is generated
                        and the algorithm attempts to guess what color it is based on the colors it has seen before. This was my first project that involved machine
                       learning in a worthwhile capacity, and was also my first application that uses a REST API to communicate between front-end and back-end. The project was made
                       in Python and is usable either via its built-in GUI made with Tkinter or via its webpage which communicates to its REST API made with Flask.
                       
                       Go to <a href="https://www.danielsla.de/#/colorLearn" target="_blank" rel="noreferrer noopener">this link</a> to check
                       it out!
                    </p>
                    <p><b>GitHub: </b><a href="https://github.com/Silber01/learnColor" target="_blank" rel="noreferrer noopener">https://github.com/Silber01/learnColor</a></p>
                    <p><b>Tools used: </b>Python, MatPlotLib, Tkinter, Flask, REST, HTML, CSS, JavaScript, ReactJS, Node.js</p>
                </div>
                <div className='proj'>
                    <div className="nameDate">
                        <h2>danielsla.de</h2>
                        <p>Fall 2022</p>
                    </div>
                    <div>
                        <img className="projImage" src={require("../images/portfolio.png")} alt="danielsla.de"/>
                        <p>
                            This website was made entirely from scratch using only HTML, CSS, JavaScript, Node.JS, and React.js. All formatting, visuals, and interactivity was made by me.
                            When making the website, I decided instead of using libraries such as Bootstrap, it would make a great challenge to see if I can make the
                            website purely from my own code. This website is the result, and I am quite proud of it. This is also my first major project involving web development.
                            I have other web development projects planned in the near future, so stay tuned for those!
                        </p>
                        <p><b>Github: </b><a href="https://github.com/Silber01/danielsla.de" target="_blank" rel="noreferrer noopener">https://github.com/Silber01/daniesla.de</a></p>
                        <p><b>Tools used:</b> HTML, CSS, JavaScript, ReactJS, NodeJS</p>
                    </div>
                </div>
                <div className='proj'>
                    <div className="nameDate">
                        <h2>CSIL Interpreter</h2>
                        <p>Fall 2022</p>
                    </div>
                    <div>
                        <img className="projImage" src={require("../images/csil.PNG")} alt="danielsla.de"/>
                        <p>
                            CSIL Interpreter is a programming interpreter for CSIL, a basic version of C. The language supports use of int and string variables and expressions, input, printing,
                            if statements, else statements, and while loops. This project was created in order to practice use of data structures and algorithms along with
                            memory management in C++. This also allows me to get a deeper understanding of how interpreters work and how language syntax is determined. Feel free to
                            check it out using the Github link below!
                        </p>
                        <p><b>Github: </b><a href="https://github.com/Silber01/interpreter" target="_blank" rel="noreferrer noopener">https://github.com/Silber01/interpreter</a></p>
                        <p><b>Tools used:</b> C++</p>
                    </div>
                </div>
                <div className='proj'>
                    <div className="nameDate">
                            <h2>TownyBot</h2>
                            <p>Summer 2022</p>
                    </div>
                    <img className="projImage" src={require("../images/townybot.png")} alt="TownyBot"/>
                    <p>
                        This is my largest project to date in terms of lines of code written. TownyBot is an MMORPG Discord bot that allows the user to make
                        in-game money in order to start and manage a town. Users can work jobs, create towns, invite residents, build buildings, play games, gamble,
                        become rich! This was a passion project made out of respect for a game that I played often as a child that is now gone. The code for this
                        project is designed to be scalable, readable, and expandable. If I have the time in the future, I may add some updates to this bot!

                    </p>
                    <p><b>GitHub: </b><a href="https://github.com/Silber01/TownyBot" target="_blank" rel="noreferrer noopener">https://github.com/Silber01/TownyBot</a></p>
                    <p><b>Tools used: </b>Python, Discord.py</p>
                </div>

                <div className='proj'>
                    <div className="nameDate">
                            <h2>LeetCode Bot</h2>
                            <p>2022</p>
                    </div>
                    <img className="projImage" src={require("../images/leetcodebot.png")} alt="LeetCode Bot"/>
                    <p>
                        I made this bot because I wanted to learn Python. I was interested in Discord bots, and learned that there is a framework called "discord.py"
                        that allows people to make Discord bots using Python. So, I decided to make this bot in order to learn Python in a trial by fire. The bot picks
                        a random LeetCode problem once a day, and challenges users to solve it. Those who solve it earn points based on the problem's difficulty. The players
                        with the most points obtain a higher position on the bot's leaderboard. </p>
                        <p>The bot communicates with LeetCode's GraphQL API to detect if a player actually
                        completed a problem. This bot was also created to help me get in the habit of practicing LeetCode problems,
                        which it was very successful at doing so. Though this bot is functional, it was made hastily in a language I was not familiar with. Because of this,
                        a total redesign with my team from the Software and Computer Engineering Society is in the works, which will be open source, scalable, and include new features!

                    </p>
                    <p><b>Tools used: </b>Python, GraphQL, Discord.py</p>
                </div>

                <div className='proj'>
                    <div className="nameDate">
                            <h2>Task Arcade</h2>
                            <p>Spring 2021</p>
                    </div>
                    <img className="projImage" src={require("../images/taskarcade.png")} alt="Task Arcade"/>
                    <p>
                       This project was created for my "CMPE131 - Software Engineering I" class. Task Arcade is a gameified to-do list that tracks how many hours
                       a user has spent doing various real life tasks, and rewards time taken being productive with tokens. The tokens are used in the arcade,
                       where users can play one of three provided games. The only way to be able to play these games is to earn tokens, and the only way to earn
                       tokens is to be productive. So, the games act as a direct reward for the user's real-life hard work! This project was created using Unity, which I 
                       learned in order to create this project.
                    </p>
                    <p><b>GitHub: </b><a href="https://www.github.com/Silber01/Task-Arcade-Prototype" target="_blank" rel="noreferrer noopener">https://www.github.com/Silber01/TownyBot</a></p>
                    <p><b>Tools used: </b>C#, Unity</p>
                </div>

                <div className='proj'>
                    <div className="nameDate">
                            <h2>OptiNote</h2>
                            <p>Fall 2021</p>
                    </div>
                    <img className="projImage" src={require("../images/optinote.png")} alt="OptiNote"/>
                    <p>
                       This project was created for my "CMPE133 - Software Engineering II" class. OptiNote is a notes tracking application that stores and organizes user
                       notes. The app then allows the user to search their notes for information given keywords and organized by specificity, and automatically generates flash cards
                       based on the user's notes. This project was designed to be a challenge to see what Unity is capable of. I essentiallly had to program a text editor nearly
                       from scratch, capable of editing and highlighting documents. This, along with relatively complex features such as a simple search engine and an algorithm to
                       detect how information should be converted to flash cards, made this a rather large challenge.
                    </p>
                    <p><b>Tools used: </b>C#, Unity</p>
                </div>

                
                
            
            </div>
        </div>
    )
}

export default Projects;