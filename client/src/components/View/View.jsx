import React from 'react'
import '../Static/View.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";

const View = () => {

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
        .then(res => {
            console.log(res.data);
            navigate("/home")
        })
        .catch(err => console.log(err))
    }
    
    return (
    <div>
        <nav className='navbar bg-secondary'>
            <h1>Car wiki</h1>
            <Link className='btn btn-outline-dark' to={'/home'}>Home</Link>
            <Link className='btn btn-outline-dark' to={'/create'}>Create Car Post</Link>
        </nav>
        
        <h1 className='text-center text-capitalize'>Now viewing, <span style={{color: car.color}}>{car.brand}, {car.model}</span> </h1>
        
        <div className="container con-max rounded p-2" style={{ border: "2px solid" , borderColor: car.color }}>
            <img className='image-hover' src={car.image} alt='car' />
            <div className='container'>
                <h3 className='text-capitalize mt-3'>Brand: {car.brand}</h3>                
                <h3 className='text-capitalize'>Model: {car.model}</h3>
                <h3 className=' mt-3'>Year: {car.year}</h3>
                <h3 className=' mt-3'>Price: {car.price}</h3>
                <h3 className=' mt-3'>Mileage: {car.mileage}</h3>
                <h3 className='text-capitalize mt-3'>Car Color: <span style={{color: car.color}}>{car.color}</span> </h3>
                <button className='btn' onClick={() => deleteCar(car._id)} style={{backgroundColor: car.color}}>Delete</button>
            </div>
        </div>
    </div>
    )
}

export default View