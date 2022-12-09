import './Content.css';
import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router';
const Content = ({ content }) => {
    const navigate = useNavigate();
    
    
    const ContentBox = styled.div`
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
        filter: blur(5px);
    }
        /* transform: translate3d(0, 0, 0); */
        position: relative;
        width: 95%;
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
    }
    &:hover:before{
        filter: blur(0px);
    }
    `

    return (
        <ContentBox img={content.previewImg} onClick={() => { navigate(`/content/${content.id}`) }}>
            <div className="contentboxtext">
                <h1>{content.title}</h1>
                <p>{content.description}

                </p>
            </div>
        </ContentBox>
        
    )
}
export { Content };