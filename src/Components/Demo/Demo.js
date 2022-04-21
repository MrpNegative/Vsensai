import React from 'react';
import './Demo.css'

const Demo = () => {
    return (
        <>
        <h1 className='fw-bold text-center'>Demo Video</h1>
        <hr />
        <div className='demo-container'>
            <div className='demo-video'>
            <iframe   src="https://www.youtube.com/embed/umWJCOh_oE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
            </div>
            <div className='demo-info'>
                <h1>Best <span>Beginner</span> Tips <br /> You  Will Ever Get</h1>
            </div>
        </div>
        </>
    );
};

export default Demo;