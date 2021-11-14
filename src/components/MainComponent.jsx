import Clock from "./Clock"
function MainComponent() {
    return (
        <div className='Background'>
           <div className='clockBackground'>
            <div className='clockLabel'>
               <p>Digital Clock</p>
            </div>
            <div className='clockBase'>
            <div className='clock'>
                <Clock/>
            </div>
            </div>
           
           <div className='bottomSection'>
                
                    <p
                    style={{textAlign:'center',fontSize:'1.1rem'}}>
                        <p style={{fontSize:'1.8rem',fontWeight:'bold'}}>
                            Preview
                        </p>
                           
                        This is what we are going to create today
                    </p>
                
           </div>
           </div>
        </div>
    )
}

export default MainComponent
