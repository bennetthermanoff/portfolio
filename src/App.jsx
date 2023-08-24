import './App.css';
import { useEffect, useState } from 'react';
import React, {memo} from 'react'
import { useHistory } from 'react-router-dom';
import { Content } from './Content/Content';
import { contentsDefault } from './Content/ContentPage';
import WelcomeBar from './WelcomeBar';
function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

const AppBar = () => {
  const history = useHistory();
  useEffect(() => {
    window.onpopstate = () => {
      history.push(`/home`);
    }

  }, [history]);
  return (
    <h className='headerBarText' >
      <div className='headerBarText2' onClick={() => { history.push(`/home`); }}>
        Bennett Hermanoff
      </div>
      <a class='headerBarLink' href='https://github.com/bennetthermanoff' >github</a>
    </h>)
}


const App = ({isNavigated}) => {

  const [scrollPosition, setScrollPosition] = useState(isNavigated ? 256 : 0);
  const handleScroll = () => {
    if (scrollPosition <11) { 
      setScrollPosition(11);
    }


  };
  window.addEventListener('wheel', handleScroll, { passive: true });

  timeout(1000).then(async () => {
    if (scrollPosition === 0) {
      setScrollPosition(12);

    }
    if (scrollPosition === 12) {
      setScrollPosition(256);
    }
  });

  const MemoizedContents = memo( ()=> contentsDefault.map((content) => 
     <Content content={content} />
  ), (prevProps, nextProps) => prevProps.content[0].title === nextProps.content[0].title);
  
  timeout(1500).then( () => {
    if (setScrollPosition<255){
      setScrollPosition(256);
    }

  });
  
  const topStyle = {
    //animate to position 0
    transform: scrollPosition < 10 ? `rotate(-15deg) translate(${scrollPosition * -1 - 70}vw,${scrollPosition * -7.8 + 16.5}vh) ` : `rotate(-15deg) translate(${12 * -1 - 70}vw,${12 * -7.8 + 16.5}vh) `,
    transition: 'transform .6s ease-in',
    max_height: '100vh',
    width: '200vw',
    background: 'linear-gradient(-45deg, #52d4ee,  #5ff397, #25fad3,#3c92e7)',
    // transform: 'rotate(-15deg)',
    paddingTop: '100vh',
    marginTop: '-100vh',
    overflow: 'hidden',
    pointerEvents: 'fill',
    filter: scrollPosition === 256 ? 'opacity(0)' : 'opacity(1)',
    // borderTop: '3000px solid #3c92e7',
  }
  const bottomStyle = {
    //animate to position 0
    transform: scrollPosition < 10 ? `rotate(-15deg) translate(${scrollPosition * 1 - 45}vw,${scrollPosition * 7.8 + 20}vh) ` : `rotate(-15deg) translate(${12 * 1 - 45}vw,${12 * 7.8 + 20}vh)  `,
    transition: 'transform .6s ease-in',
    max_height: '10vh',
    width: '200vw',
    background: 'linear-gradient(-45deg, #52d4ee, #3c92e7, #5ff397, #25fad3)',
    paddingBottom: '100vh',
    marginBottom: '-100vh',
    pointerEvents: 'fill',
    filter: scrollPosition === 256 ? 'opacity(0)' : 'opacity(1)',
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='window'>
          <div className="topBanner" >
           <WelcomeBar isOpen={scrollPosition>10}/>
          </div>
          <div className="contentWrapper">
            <div className='contentBackground'>
              <MemoizedContents />
            </div>
          </div>
          

        </div>
        <div className='loadscreen'>
          <div style={topStyle}>
            <div className='textMoveTop'>
              <p className='nameBennett'>
                Bennett

              </p>
            </div>
            <div className='colorBar'>
            </div>
            <hr className='nameBreakLineTop'>
            </hr>

          </div>

          <div style={bottomStyle}>
            <hr className='nameBreakLineBottom'>
            </hr>
            <div className='textMoveBottom'>

              <p className='nameHermanoff'>
                Hermanoff
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
export { AppBar };
