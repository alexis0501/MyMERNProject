import { Link } from 'react-router-dom'
import '../Static/MainPage.css'
import { useEffect } from 'react'
import axios from 'axios'
import React, { useState } from 'react'

const MainPage = () => {

    const [car, setCar] = useState([])


    useEffect( ()=>{
        axios.get("http://localhost:8000/api/car")
        .then(res => {
        setCar(res.data)
        })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])

    return ( 
    <div>
        {/* Navbar */}
        <div className='navbar d-flex'>
            <h1 className='text-white margin-left-nav nav-h1-text'>Car Dealership</h1>
            <Link className='margin-left-link-nav nav-link button' to={'/create'}>Sell a Car</Link>
        </div>
        
        <div className='home-container'>
            
            {
                car.map((cars) =>{
                    return ( <div className='box' key={cars._id}>
                                <div className='display-car image-adj' id='displaying-car'>
                                    <img className='image-hover' id='image-size' src={cars.image} alt='car' ></img>
                                    <Link className='image-text' to={'/view/' + cars._id} style={{color: cars.color}} >{cars.brand},{cars.model}</Link>
                                    <p className='image-text2'>Miles:{cars.mileage}</p>
                                    <p className='image-text3'>Year:{cars.year}</p>
                                </div>
                            </div>
                    )
                })
            }

        </div>
    </div>
    )
}

export default MainPage