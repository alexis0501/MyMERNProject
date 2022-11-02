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
        <nav className='navbar bg-secondary'>
            <h1>Car wiki</h1>
            <Link className='btn btn-outline-dark' to={'/home'}>Home</Link>
            <Link className='btn btn-outline-dark' to={'/create'}>Create Car Post</Link>
        </nav>
        
        <h1 className='text-center text-capitalize'>Now viewing, <span style={{color: car.color}}>{car.brand}, {car.model}</span> </h1>
        <div className='container mt-5'>
            <div>
                <img className='car-image-position car-image-size image-hover' src={car.image} alt='car' />
            </div>

            <div>
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