import React, { useState } from "react"
import "./Room.css"
import ON from "./assets/on.jpg";
import OFF from "./assets/off.jpg";

function Room(){

    const [lit,setLit] = useState(true);
    const [temp,setTemp] = useState(72);

    return(
        <div className={`room ${lit?'lit':'dark'}`}>
<div>

    <h1>React Bulb Switch</h1>
           {lit?<img src={ON} alt="Bulb ON" style={{marginTop: 50}}/>:<img src={OFF} alt="Bulb OFF" style={{marginTop: 50}}/>}
           <br />
            <button onClick={()=>{setLit(true)}}>ON</button>
            <button onClick={()=>{setLit(false)}}>OFF</button>
            </div>

            <div>
                <h2>Room Temperature {temp}</h2>
                <button onClick={()=>{setTemp(temp+1)}}>Increase</button>
                <button onClick={()=>{setTemp(temp-1)}}>Decrease</button>

            </div>
        </div>
    );
}

export default Room;
