import { useState, useEffect } from "react";
function Clock() {
    const [currentClockTime, setclockState] = useState();
    const options = 
    {
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    }
    const currentDate = new Date().toLocaleDateString(undefined,options);

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setclockState(date.toLocaleTimeString('en-GB'));
        },1000);
        }, []);
    return (
        <div style={{display:"inline-flex",flexDirection:'column'}}>
        <div style={{textAlign:'center',fontWeight:'bold'}}> 
            {currentClockTime}
        </div>
        <div style={{fontSize:'0.8rem',padding:'15px', color:'rgb(207 147 147)',marginLeft:'25px'}}>
            {currentDate}
        </div>
        </div>
       
    )
}

export default Clock
