import styled from 'styled-components';
import './WelcomeBar.css'

const WelcomeBar = ({isOpen}) => {
    
    
    return (
        <div className='welcomeBar'>
            
            <h className='welcomeBarText'>
                let's build
            </h>
            {isOpen? <div className='anything'>
               
               anything.
           
            </div>:null}


           
        </div>
    )



}
export default WelcomeBar;