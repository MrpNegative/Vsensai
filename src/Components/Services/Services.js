import React from 'react';
import Card from '../Card/Card';
import useServices from '../Hooks/useServices';
import './Services.css'

const Services = () => {
    const [services] = useServices()
    return (
        <div className='services'>
            <h1>Services</h1>
            <hr />
            <div className='services-container'>
            {
                services.map(items => <Card item={items} key={items.id}></Card>)
            }
            </div>
        </div>
    );
};

export default Services;