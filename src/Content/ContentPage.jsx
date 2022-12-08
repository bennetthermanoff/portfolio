import React from 'react'
import { useParams } from 'react-router-dom';
import './ContentPage.css'
import t1 from './markdown/1.md'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useEffect, useState } from 'react';


const ContentPage = () => {
    const [contents, setContents] = useState(
        [
        {
            title: 'test1',
            id: '1',
            content: '',
        },
        {
            title: 'test2',
            id: '2',
            content: '',
        },
    ]
    );



    let { id } = useParams();
    //on page load
    useEffect(() => {
        contents.forEach(x => {
            fetch(t1)
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
    }, []) 
    return (
        <div className='App-header'>

            <div className='contentBackgroundColumn'>
                
                <ReactMarkdown remarkPlugins={[remarkGfm]} children={String(contents.find(x => x.id === id).content)} />
                
            </div>
            <h className='headerBarText'>
                Bennett Hermanoff
            </h>
            <div className='headerBar'>
                <a class='headerBarLink' href='https://github.com/xpsking' >github</a>
            </div>
        </div>
    )

}



export { ContentPage }