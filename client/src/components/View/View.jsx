import React from 'react'
import '../Static/View.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const View = () => {

    const [car, setCar] =  useState([])
    const {id} = useParams()

    useEffect(() =>{
        axios.get("http://localhost:8000/api/car/" + id)
            .then(res => {
                console.log("===========",res.data); 
                setCar(res.data)})
                
            .catch(err => console.log(err));
    },[]);


    
    return (
    <div>
        <div className='navbar d-flex'>
            <h1 className='text-white margin-left-nav-view nav-h1-text'>Now Viewing {car.brand} , {car.model}</h1>
            <Link className='margin-left-link-nav-view nav-link button' to={'/home'}>Main Page</Link>
        </div>
        
        <div className='container d-flex'>
            <div className='Left-box-create'>
                <img className='car-image-position car-image-size image-hover' src={car.image} alt='car' />
            </div>

            <div className='Right-box-create'>
                <h3 className='margin-top-box'>Brand: {car.brand}</h3>                
                <h3 className='margin-top-box'>Model: {car.model}</h3>
                <h3 className='margin-top-box'>Year: {car.year}</h3>
                <h3 className='margin-top-box'>Price: {car.price}</h3>
                <h3 className='margin-top-box'>Mileage: {car.mileage}</h3>
                <h3 className='margin-top-box'>Color: {car.color}</h3>
                <Link className='button2' to={'/purchase/' + car._id}>Purchase</Link>
            </div>
        </div>
    
    </div>
    )
}

export default View