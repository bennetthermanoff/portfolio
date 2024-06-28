import './Content.css';
import React from 'react'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
const Content = ({ content }) => {
    const history = useHistory();
    const [isHovered, setIsHovered] = React.useState(false);

    

    return (
        <ContentBox img={content.previewImg} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={async () => {
            await new Promise((resolve) => setTimeout(resolve, 200));
            history.push(`/content/${content.id}`);
            
        }}>
            <div className="contentboxtext">
                
                {content.customTitle?
                content.customTitle:
                <h1 style={content.titleCSS}>{content.title}</h1>
                }

                {content.customDescription? 
                content.customDescription:
                <Description style={{...content.descriptionCSS, opacity:isHovered?0:1, textShadow: '1px 1px 4px #000000' 

                }}>{content.description}</Description>}
                
            </div>
        </ContentBox>

    )
}
export { Content };

export const ContentBox = styled.div`
&:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    /* transition: all .5s; */
    width: 100%;
    height: 100%;
    background-image: url(${props => props.img}) ;
    background-size: cover;
    background-position-y: 40%;
    filter: blur(5px) brightness(0.7);
}
    /* transform: translate3d(0, 0, 0); */
    position: relative;
    width: 95%;
    max-width: 800px;
    border: 2px solid #000000;
    border-radius: 5px;
    margin: 5px;
    flex: 1 1 auto;
    transition: all .5s;
   /* margin-left: 60px; */
   
&:hover{
    transform: scale(1.02);
    border: 2px solid #ffffff;
    cursor: pointer;
    *{
        text-shadow: 1px 1px 4px #000000;
    }
   

    
    
   
}
&:hover:before{
    filter: blur(0px);
}
`
export const Description = styled.p`
    transition: all .5s;

    `