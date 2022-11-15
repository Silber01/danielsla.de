import './Splash.css'
import React, { useRef, useState, useEffect } from 'react';
function Splash() {
    const canvasRef = useRef(null);
    const nameTitleRef = useRef(null)
    const bgRef = useRef(null)
    let circles = []
    let mouseX = -1000;
    let mouseY = -1000;
    let canvasWidth = window.innerWidth / 2;
    let canvasHeight = window.innerHeight / 2;
    const [softEng, setSoftEng] = useState("Software Engineer");
    let clickCtr = 0;
    useEffect(() => {
        const canvas = canvasRef.current;
        const nameTitle = nameTitleRef.current;
        const bg = bgRef.current;
        setTimeout(() => {nameTitle.style.opacity = 1;}, 100);
        let relwidth = canvas.width / window.innerWidth;
        let relheight = canvas.height / (window.innerHeight - (canvasWidth * .12) - 10);
        document.addEventListener('mousemove', (e) => {
            mouseX = e.offsetX * relwidth;
            mouseY = e.offsetY * relheight;
        })
        
        for (let i = 0; i < 60; ++i)
        {
            
            let r = (Math.random() ** 5) * 100 + 30;
            let x = (canvas.width - 2 * r) * Math.random() + r;
            let y = (canvas.height - 2 * r) * Math.random() + r;
            let v = (10 / r) + 0.2;
            let d = (2 * Math.PI) * Math.random();
            let c = Math.random() * 200;
            let inc = false;
            circles.push({"x": x, "y": y, "r": r, "v": v, "dir": d, "color": c, "inc": inc, "accel": 0});
        }
        const render = () =>
        {
            if (canvas.width != window.innerWidth / 2 || canvas.height != window.innerHeight / 2)
            {
                canvasWidth = window.innerWidth / 2;
                canvasHeight = window.innerHeight / 2;
                canvas.width = canvasWidth;
                canvas.height = canvasHeight;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${Math.min(window.innerHeight - (canvasWidth * .12), window.innerHeight - 100)}px`;
                nameTitle.style.width = canvas.style.width;
                nameTitle.style.height = canvas.style.height;
                bg.style.width = canvas.style.width;
                bg.style.height = canvas.style.height;
                relwidth = canvas.width / window.innerWidth;
                relheight = canvas.height / (window.innerHeight - (canvasWidth * .12));
            }
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            circles.forEach(c => {
                ctx.beginPath();
                if (c["color"] == -1)
                {
                    ctx.fillStyle = `indigo`;
                }
                else
                {
                    if (c["inc"])
                        c["color"] += Math.random();
                    else
                        c["color"] -= Math.random();
                    if (c["color"] < 0)
                        c["inc"] = true;
                    if (c["color"] > 200)
                        c["inc"] = false;
                    if (Math.random() < 0.01)
                        c["inc"] = !c["inc"];
                    ctx.fillStyle = `rgb(0, 0, ${c["color"]})`;
                }
                
                ctx.arc(c["x"], c["y"] + ((10 / c["r"]) * Math.sin(c["x"]/10)), c["r"], 0, 2 * Math.PI,  false);
                if (Math.abs(mouseX - c["x"]) < (c["r"] * 1.3) && Math.abs(mouseY - c["y"]) < (c["r"] * 1.3))
                {
                    if (c["accel"] < 3)
                        c["accel"] += 0.1;
                    c["dir"] =  Math.atan((mouseY - c["y"])/(mouseX - c["x"]));
                    if (mouseX > c["x"])
                    {
                        c["dir"] += Math.PI;
                    }
                }
                else if (c["accel"] > 0)
                    c["accel"] -= 0.1;
                if (c["accel"] < 0)
                    c["accel"] = 0;
                
                
                c["x"] = (c["x"] + (c["v"] + c["accel"]) * Math.cos(c["dir"]));
                c["y"] = (c["y"] + (c["v"] + c["accel"]) * (Math.sin(c["dir"])));
                if (c["x"] < c["r"])
                {
                    c["dir"] = Math.PI - c["dir"];
                    c["x"] = c["r"];
                }
                if (c["x"] > canvas.width - c["r"])
                {
                    c["dir"] = Math.PI - c["dir"];
                    c["x"] = canvas.width - c["r"];
                }
                if (c["y"] < c["r"])
                {
                    c["dir"] = (2 * Math.PI) - c["dir"];
                    c["y"] = c["r"];
                }
                if (c["y"] > canvas.height - c["r"])
                {
                    c["dir"] = (2 * Math.PI) - c["dir"];
                    c["y"] = canvas.height - c["r"];
                }
                ctx.fill();
                
            })
            
            ctx.fill();
            requestAnimationFrame(render);
        }
        render()
        canvas.style.filter = "blur(50px)";
    }, [])
    function nameClick()
    {
        let r = (canvasWidth / 15) * Math.random() + 20;
        let x = canvasWidth / 2;
        let y = canvasHeight / 2;
        let v = (10 / r) + 0.2;
        let d = (2 * Math.PI) * Math.random();
        let c = -1;
        let inc = false;
        circles.push({"x": x, "y": y, "r": r, "v": v, "dir": d, "color": c, "inc": inc, "accel": 0});
        clickCtr += 1;
        if (clickCtr >= 30)
        {
            setSoftEng("You really like purple, don't you?");
        }
        
    }
    return (
        <div className="head">
            <div className="splashContacts">
                <div>
                    <a href="https://www.linkedin.com/in/danielslade01//" target="_blank" rel="noreferrer noopener">
                        <img className="icon splashIcon" id="linkedin" src={require("./icons/linkedin.png")}/>
                    </a>
                    
                    <a href="https://github.com/Silber01/" target="_blank" rel="noreferrer noopener">
                        <img className="icon splashIcon" id="github" src={require("./icons/github.png")} />
                    </a>
                    <a href="https://leetcode.com/Silver01/" target="_blank" rel="noreferrer noopener">
                        <img className="icon splashIcon" id="leetcode" src={require("./icons/leetcode.png")}/>
                    </a>
                    <a href="mailto:danielgrantslade@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img className="icon splashIcon" id="email" src={require("./icons/mail.png")}/>
                    </a>
                </div>
            </div>
            <div className="circles">
                <canvas id="canvas" ref={canvasRef}/>
            </div>
            <div className="nameTitle" ref={nameTitleRef}>
                <div className="nameTitleCenter">
                    <h1 onClick={nameClick}
                    >Daniel Slade</h1>
                    <h2>{softEng}</h2>
                </div>
            </div>
            <div className="bg" ref={bgRef}></div>
        </div>
        
    );
  }
  
  export default Splash;