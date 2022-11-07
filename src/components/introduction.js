import React from 'react';
import './style/introduction.css';

import {useEffect} from 'react';

const Introduce = ()=>{
    useEffect(()=>{
        console.log("HEllo World!")
        });
        
    return(
        <div>
            <nav>
                <a href='/about'>ABOUT US</a>
            </nav>
        <div>Hi, I am Daniel. <span>I will be working on Hooks!</span>
        <h1>USE STATE HOOK DONE</h1>
        <div>
           
        </div>
        
        
        </div>
        </div>
    )
}

export default Introduce;