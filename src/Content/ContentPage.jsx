import React from 'react'
import {useParams } from 'react-router-dom';
import './ContentPage.css'

const ContentPage = () => {
    let { id } = useParams();

    return (
        <div className='App-header'>

            <div className='contentBackgroundColumn'>
                hello
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