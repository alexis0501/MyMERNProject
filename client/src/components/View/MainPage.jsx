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
        
        <nav className='navbar bg-secondary'>
            <h1>Car wiki</h1>
            <Link className='btn btn-outline-dark' to={'/home'}>Home</Link>
            <Link className='btn btn-outline-dark' to={'/create'}>Create Car Post</Link>
        </nav>  
        
        <h1 className='text-center mt-1'>Car Community Posts</h1>
        <div className='container d-flex f-wrap justify-content-between'>
            {
                car.map((cars) =>{
                    return ( <div className='card con-max mt-3 p-3 rounded' style={{ border: "2px solid" , borderColor: cars.color }} key={cars._id}>
                                <div className='card-body' >
                                    <img className=' image-hover' id='image-size' src={cars.image} alt='car' ></img>
                                    <br/>
                                    <h5 className='card-title mt-2' style={{color: cars.color}} >{cars.brand} {cars.model}</h5>
                                    <p className='card-text'>Miles:{cars.mileage}</p>
                                    <p className='card-text'>Year:{cars.year}</p>
                                    <Link className='btn' to={'/view/' + cars._id} style={{backgroundColor: cars.color}}>View More</Link>
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