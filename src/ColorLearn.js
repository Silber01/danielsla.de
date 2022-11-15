import './ColorLearn.css'
import React, { useRef, useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';

function ColorLearn() {
    const [color, setColor] = useState("#ffffff");
    const [category, setCategory] = useState("None")
    const [confidence, setConfidence] = useState({"PURPLE":0,"PINK":0,"RED":0,"BLUE":0,"BROWN":0,"DARK GRAY":0,"ORANGE":0,"GREEN":0,"LIGHT GRAY":0,"YELLOW":0,"WHITE":0,"BLACK":0})
    const [genTimer, setGenTimer] = useState(0)
    const [usePicker, setUsePicker] = useState(true)
    const colorPickerRef = useRef(null)

    useEffect(() =>{
        colorPickerRef.current.style.backgroundColor = color;
    }, [color])
    useEffect(() =>{
        setRandomColor()
        window.addEventListener('resize', () => {
            
            if (window.innerWidth < 600)
            {
                setUsePicker(false)
            }
            else if (window.innerWidth >= 600)
            {
                setUsePicker(true)
            }
        })
    }, [])
    useEffect(() => {
        console.log(usePicker)
    }, [usePicker])
    useEffect(() =>{
        if (genTimer > 0)
        {
            console.log(genTimer)
            setTimeout(() => {
                setGenTimer(genTimer - 1)
                
            }, 1000) 
        }
        else
        {
            console.log("ready!")
        }
        
    }, [genTimer])
    
    function setRandomColor()
    {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        setColor("#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1))
    }
    function getGuessText()
    {
        if (genTimer == 0)
            return "Guess"
        else if (genTimer == 1)
            return `Guess (Ready in ${genTimer} Second)`
        else
            return `Guess (Ready in ${genTimer} Seconds)`
            
    }
    function getColorPicker()
    {
        if (usePicker)
        {
            return (
                <ChromePicker color={ color } onChange={ (color) => {setColor(color.hex)} }/>
            )
        }
        else
        {
            return (
                <input type="color" onChange={(e) => { setColor(e.target.value)}}></input>
            )
        }
    }
    function getGuess()
    {
        if (genTimer > 0)
        {
            console.log("not ready!")
            return
        }
        let r = Number("0x" + color.slice(1, 3))
        let g = Number("0x" + color.slice(3, 5))
        let b = Number("0x" + color.slice(5, 7))
        let url = 'http://45.79.47.62/getBestFit/' + r + "/" + g + "/" + b
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            
            console.log(JSON.stringify(data))
            setCategory(data["color"])
            setGenTimer(1);
            setConfidence(data["confidence"])
                
        })
        .catch((err) => {
           console.log(err.message);
        })
    }
    return (
        <div>
            <div className='clbackground' />
            <div className='colorLearnCentererCenterer'>
                <h1 className='clTitle'>ColorLearn</h1>
                
                    <div className='container'>
                        <div className='colorLearnCenterer'>
                            
                            <p>Confidence:</p>
                            <div className='chart'>
                                <div className='bar' style={{backgroundColor: `red`, height: `${confidence["RED"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `orange`, height: `${confidence["ORANGE"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `yellow`, height: `${confidence["YELLOW"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `green`, height: `${confidence["GREEN"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `blue`, height: `${confidence["BLUE"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `purple`, height: `${confidence["PURPLE"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `pink`, height: `${confidence["PINK"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `brown`, height: `${confidence["BROWN"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `white`, height: `${confidence["WHITE"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `lightgray`, height: `${confidence["LIGHT GRAY"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `darkgray`, height: `${confidence["DARK GRAY"]}%`}}></div>
                                <div className='bar' style={{backgroundColor: `black`, height: `${confidence["BLACK"]}%`}}></div>
                            </div> 
                            <div className='guess'>
                                <h2>My guess is: {category}</h2>
                            </div>
                        </div>
                        <div className="colorLearnCenterer">
                                <div className="colorView" ref={colorPickerRef}></div>
                                    <p>Pick a color</p>
                                    <div className="colorPicker">
                                        {getColorPicker()}
                                    </div>
                                    <p>Or, get a random color</p>
                                    
                            </div>
                            
                            <div className='subcontainer'>
                                <div className="colorLearnCenterer">
                                    <button className="guessButton" onClick={() => { getGuess() }}>{getGuessText()}</button>
                                </div>
                                <div className="colorLearnCenterer">
                                    <button className="randomize" onClick={() => { setRandomColor() }}>Randomize</button>
                                </div>
                            </div>
                          </div>
                    </div>
                    <div className='colorLearnCentererCenterer'>
                
                        <div className='howItWorks'>
                            <div className='colorLearnCenterer'>
                                <h1 className="hwTitle">How does it work?</h1>
                            </div>
                            <img className="rightImage" src={require("./images/colorlearn.png")}></img>
                            <p>ColorLearn is a machine learning algorithm that is designed to categorize colors. Though this is an
                                easy task for humans, computers lack the natural ability to do this. So, ColorLearn learns
                                what colors are which by letting humans teach it!
                            </p>
                            <p>The core algorithm that ColorLearn uses is a blend of a 'K Nearest Neighbors' and 'K-Means Clustering' algorithm.
                                The figure on the right represents the "knowledge" that ColorLearn has. Computers register colors as values of
                                red, green, and blue values. So, ColorLearn takes these values and plots them on a 3D graph with red, green, and
                                blue axes. Then, it looks at every other point that it has learned before, which contain their own position and color
                                category. For each category, it finds the three closest points that fit within that category and takes the mean of the
                                distances between itself and those points. Once it does this for every color, the color with the lowest mean distance wins! 
                            </p>
                            <p>Though the algorithm is relatively simple, careful planning went into creating it. With other potential algorithms,
                                there are problems that arise. For example, simply choosing the closest color will quickly have more common colors such
                                as blue, green, and purple dominate over rarely shown colors such as pink since their expansion in the graph will simply
                                grow faster. This is why the distance from a point to all other points are calculated in order to give every color a fair
                                chance. Secondly, ColorLearn uses the three closest points instead of one or all for separate reasons. If it chose the closest
                                singular color of each category, an outlier (e.g. a pink color mislabeled as orange in the data) can create spots in the graph
                                near that mislabeled data that remains mislabeled. If it chose the mean of all colors, it would unfairly treat colors that have
                                a wider range, such as blue. Choosing three points was a compromise to avoid either of these outcomes.
                            </p>
                            <p>Now that the algorithm is explained, one question that remains was how did ColorLearn inherit its knowledge? The answer is
                                that it learned from humans! More specifically, it learned from supervised training, then from reinforced learning. The training
                                started by having humans be shown a color, and asked to select what color they percieve it as. ColorLearn would take the
                                category and RGB values of these colors and store it in its knowledge. After it had some experience with colors, it was put to the
                                test. The learning process switched to reinforced learning, having ColorLearn see a color and guess what color it was. If it is correct,
                                the knowledge was simply unaffected as it was already sufficient for this color. If it is incorrect, ColorLearn is taught what the correct
                                color was, storing it in its knowledge. Though a seemingly similar process, this allowed ColorLearn to only remember new information if it
                                is deemed important to avoid mistakes.
                            </p>
                            <p>If you would like to try training your own version of ColorLearn, check out its <a href="https://github.com/Silber01/learnColor" target="_blank" rel="noreferrer noopener">GitHub page</a>!</p>
                        </div>
                    </div>
                    
                        
                    
                </div>
            
    )
}

export default ColorLearn;