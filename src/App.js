import './App.css';
import { useState, useEffect } from 'react';

function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}

const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {

    setScrollPosition(scrollPosition + 1);

  };
  window.addEventListener('wheel', handleScroll, { passive: true });
  useEffect(() => {

    // console.log(scrollPosition);
  }, [scrollPosition]);




  timeout(2000).then(async () => {
    if (scrollPosition === 0) {
      setScrollPosition(12);

    }
  });



  const topStyle = {
    //animate to position 0
    transform: scrollPosition < 10 ? `rotate(-15deg) translate(${scrollPosition *-1-70 }vw,${scrollPosition * -7.8+16.5}vh) ` : `rotate(-15deg) translate(${12 *-1-70 }vw,${12 * -7.8+16.5}vh) `,
    transition: 'transform .6s ease-in',
    max_height: '100vh',
    width: '200vw',
    background: 'linear-gradient(-45deg, #52d4ee,  #5ff397, #25fad3,#3c92e7)',
    // transform: 'rotate(-15deg)',
    paddingTop: '100vh',
    marginTop: '-100vh',
    overflow: 'hidden',
    pointerEvents:'fill'
    // borderTop: '3000px solid #3c92e7',
    


  }
  const bottomStyle = {
    //animate to position 0
    transform: scrollPosition < 10 ? `rotate(-15deg) translate(${scrollPosition *1 -45}vw,${scrollPosition * 7.8+20}vh) ` : `rotate(-15deg) translate(${12 *1 -45}vw,${12 * 7.8+20}vh)  `,
    transition: 'transform .6s ease-in',
    max_height: '10vh',
    width: '200vw',
    background: 'linear-gradient(-45deg, #52d4ee, #3c92e7, #5ff397, #25fad3)',
    paddingBottom: '100vh',
    marginBottom: '-100vh',
    pointerEvents:'fill'
  }

  return (
    <div className="App">
      <header className="App-header">
      <h className='headerBarText'>
          Bennett Hermanoff
        </h>
        <div className='headerBar'>

          
            <a class='headerBarLink' href='https://github.com/xpsking' >github</a>
          
        </div>
        










      {/* <div className='loadScreenWraper'> */}

      
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

              <p className='nameBennett'>
                Hermanoff
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}

      </header>
    </div>
  );
}

export default App;
