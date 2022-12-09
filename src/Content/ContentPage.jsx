import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './ContentPage.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react';
import contentsDefault from './contents';


const ContentPage = () => {
    const [contents, setContents] = useState(contentsDefault);
    const  navigate  = useNavigate();


    let { id } = useParams();
    //on page load
    useEffect(() => {
        contents.forEach(x => {
            fetch(x.import)
                .then(response => response.text())
                .then(text => {
                    console.log(text);
                    setContents(contents.map(y => {
                        if (y.id === x.id) {
                            y.content = text;
                        }
                        return y;
                    }))
                })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    return (
        <div className='App-header'>

            <div className='contentBackgroundColumn'>
                
                <ReactMarkdown className='markdownText' remarkPlugins={[remarkGfm]} children={String(contents.find(x => x.id === id).content)} />
                
            </div>
            
            <h className='headerBarText' >
                <div className='headerBarText2' onClick={() => { navigate(`/home`); console.log('clicked!') }}>
                    Bennett Hermanoff 
                </div>
                <a class='headerBarLink' href='https://github.com/xpsking' >github</a>
            </h>
            
        </div>
    )

}



export { ContentPage , contentsDefault}