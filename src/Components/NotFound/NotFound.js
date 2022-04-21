import React from 'react';
import './goBack'
import { goBack } from './goBack';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src="https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1" alt="" />
            <button onClick={()=>goBack()}>Go Back</button>
        </div>
    );
};

export default NotFound;