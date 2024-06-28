import cardReader from './markdown/cardReader.md'
import makerspaceCardReaderHeader from './markdown/images/makerspaceCardReaderHeader.JPG'

import moire from './markdown/moire.md'
import moireImg from './markdown/images/moireExploded.jpg'
import moireSVG from './markdown/images/moire.svg';

// import makerPass from './markdown/makerPass.md'
import makerPassImg from './markdown/images/mpswitches.jpg'
import makerPassTitle from './markdown/images/mpbanner-dark.png'
import makerPass from './markdown/makerPass.md'

import fightStick from './markdown/fightStick.md'
import fightStickImg from './markdown/images/fightstick.JPG'

import chocBoard from './markdown/chocBoard.md'
import chocBoardImg from './markdown/images/chocBoardCover.jpeg'

import resume from './markdown/resume.md'
import resumeImg from './markdown/images/headshot.jpeg'
import resumeImgPreview from './markdown/images/headshotB.jpg'


import current from './markdown/current.md'
import currentImg from './markdown/images/the3sensors.jpeg'

const contents= [
    {
        title: 'Moiré',
        id: 'moire',
        import: moire,
        description: 'Long Range Sensor Network for Reforestation Monitoring',
        previewImg: moireImg,
        customTitle:<img src={moireSVG} alt='moire' style={{width:'80%', paddingTop:'10%'}}/>
    },
    {
        title: 'MakerPass',
        id: 'makerPass',
        import: makerPass,
        description: 'iOS and Android app with self-hostable server for controlling access to makerspace tools and equipment.',
        previewImg: makerPassImg,
        customTitle:  <img src={makerPassTitle} alt='makerPass' style={{width:'90%', paddingTop:'10%'}}/>,

    },
    
    {
        title:'chocBoard',
        id: 'chocBoard',
        import: chocBoard,
        content: '',
        description: 'Custom truly wireless ergonomic split keyboard powered by Zephyr.',
        previewImg: chocBoardImg,
        titleCSS: {fontFamily:'georgia',letterSpacing:-4}
    },
    {
        title: 'Makerspace Card Reader System',
        id: 'cardReader',
        import: cardReader,
        content: '',
        description: 'MakerPass Predecessor, a react/node app for controlling access to makerspace tools and equipment.',
        previewImg:makerspaceCardReaderHeader
    },
    {
        title:'fightStick',
        id: 'fightStick',
        import: fightStick,
        content: '',
        description: 'A custom arcade fight stick built with an ESP32 and a 3D printed case.',
        previewImg: fightStickImg,
        titleCSS: {fontFamily:'georgia',letterSpacing:-4}
    },
    {
        title:'Current',
        id: 'current',
        import: current,
        content: '',
        description: 'Moiré predecessor, water sensors to monitor flooding on a city scale.',
        previewImg: currentImg
    },
    {
        title:'Resume',
        id: 'resume',
        import: resume,
        content: '',
        description: 'learn more about me and my experience as a software engineer and maker.',
        previewImg: resumeImgPreview,
        contentImg: resumeImg
    },
    


]
export default contents