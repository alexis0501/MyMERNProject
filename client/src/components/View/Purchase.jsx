import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import '../Static/Purchase.css'
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
    
    const [car, setCar] =  useState([])
    const {id} = useParams()
    
    const navigate = useNavigate()

    useEffect(() =>{
        axios.get("http://localhost:8000/api/car/" + id)
            .then(res => {
                console.log("===========",res.data); 
                setCar(res.data)})
                
            .catch(err => console.log(err));
    },[]);
    
    const deleteCar = (deleteId) =>{
        console.log(deleteId); 
        axios.delete("http://localhost:8000/api/car/" + deleteId)
        .then(res =>{
            console.log(res.data);
            navigate("/home")
        })
        .catch(err => console.log(err))
    }



    return (
    <div>
        
        <div className='navbar d-flex'>
            <h1 className='text-white margin-left-nav nav-h1-text'>Purchase</h1>
            <Link className='margin-left-link-nav-create nav-link button' id='homebtn' to={'/home'}>Main Page</Link>
        </div>
        
        <div className='container d-flex'>
            <div className='Left-box-create'>
                <img className='car-image-position car-image-size image-hover' src={car.image} alt='car' />
            </div>

            <div className='Right-box-create'>
                
                <div className='card-box'>
                    <div className='top d-flex'>
                        <p className='top-card unicorn' id='bank-icon'>🦄</p>
                        <h4 className='top-card' id='bank-name'>Unicorn Bank</h4>
                    </div>
                    <div className='d-flex'>
                    </div>
                    <div>
                        <p className='input-card'>#<input className='card-input' /></p>
                        <div className='d-flex'>
                        <p id='name-p'>Name: <input id='name-txt' className='card-input'/></p>
                        <p id='date-txt'>Exp: <input type='date' className='card-input text-box-small' /></p>
                        </div>
                    </div>
                    <p>CVV:<input className='card-input text-box-small' id='m-right'  /></p>
                </div>
                <button className='btn btn-primary' onClick={() => deleteCar(car._id)}>PURCHASE</button>
            </div>
        </div>
    </div>

    )
}

export default Purchase