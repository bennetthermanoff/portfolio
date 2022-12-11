import cardReader from './markdown/cardReader.md'
import makerspaceCardReaderHeader from './markdown/images/makerspaceCardReaderHeader.JPG'

import fightStick from './markdown/fightStick.md'
import fightStickImg from './markdown/images/fightstick.JPG'

import resume from './markdown/resume.md'
import resumeImg from './markdown/images/headshot.jpeg'
const contents= [
    {
        title: 'Makerspace Card Reader System',
        id: 'cardReader',
        import: cardReader,
        content: '',
        description: 'Open source react/node app for controlling access to makerspace tools and equipment.',
        previewImg:makerspaceCardReaderHeader
    },
    {
        title:'fightStick',
        id: 'fightStick',
        import: fightStick,
        content: '',
        description: 'A custom arcade fight stick built with an ESP32 and a 3D printed case.',
        previewImg: fightStickImg
    },
    {
        title:'Resume',
        id: 'resume',
        import: resume,
        content: '',
        description: 'learn more about me and my experience as a software engineer and maker.',
        previewImg: resumeImg
    },

]
export default contents