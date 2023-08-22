import React from 'react'
import { useParams } from 'react-router-dom';
import './ContentPage.css'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react';
import contentsDefault from './contents';


const ContentPage = () => {
    const [contents, setContents] = useState(contentsDefault);



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

        
            <div className='content'>
                
                    <img className='headerImg' src={contents.find(x=>x.id===id).contentImg? contents.find(x => x.id === id).contentImg:contents.find(x => x.id === id).previewImg } alt={contents.find(x => x.id === id).title} />
                
                <div className='contentBackgroundColumn'>

                    <ReactMarkdown className='markdownText' remarkPlugins={[remarkGfm]} children={String(contents.find(x => x.id === id).content)} />

                </div>
           


        </div>
    )

}



export { ContentPage, contentsDefault }