import './App.css'
import Splash from './Splash.js';
import Content from './Content';
import React, { useRef, useState, useEffect } from 'react';
function MainScreen() {
    return (
        <div>  
            <Splash />
            <Content />
        </div>
    )
}

export default MainScreen;