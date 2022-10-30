import React from 'react'
import { Link } from 'react-router-dom'
import '../Static/Create.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    
    const [car, setCar] = useState([])
    const [brand,setBrand] = useState("")
    const [model,setModel] = useState("")
    const [year,setYear] = useState(0)
    const [image,setImage] = useState("")    
    const [price,setPrice] = useState(0)
    const [mileage,setMileage] = useState(0)
    const [color,setColor] = useState("")
    
    const navigate = useNavigate();

    const [errors, setErrors] = useState([]); 


    useEffect( ()=>{
        axios.get("http://localhost:8000/api/car")
        .then(res => {
        setCar(res.data)
        })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])
    
    const createCar = (e) =>{
        e.preventDefault();
        console.log("SUBMIT");
        
        const newCar ={
            brand,
            model,
            year,
            image,
            setImage,
            price,
            mileage,
            color
        }
        console.log(newCar);
        
        axios.post("http://localhost:8000/api/car", newCar)

        .then(res => {
            console.log(res.data);
            navigate("/home")
        })
        .catch(err => {
            console.log(err.response);
            console.log("🚫 🚫 🚫 🚫 🚫 🚫 🚫 ");

            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }
    
    
    return (
    <div>
        {/* Navbar */}
        <div className='navbar d-flex'>
            <h1 className='text-white margin-left-nav nav-h1-text'>Sell your car here!</h1>
            <Link className='margin-left-link-nav-create nav-link button' to={'/home'}>Main Page</Link>
        </div>
        
        <form className='container d-flex' onSubmit={createCar}>
            {/* LEFT SIDE */}
                <div className='Left-box-create'>
                    <h1 className='margin-top-box'>Brand:</h1> 
                    <input className='input-box' onChange={(e) => setBrand(e.target.value)} value={brand} />
                    <h1 className='margin-top-box'>Model:</h1> 
                    <input className='input-box' onChange={(e) => setModel(e.target.value)} value={model} />
                    <h1 className='margin-top-box'>Year:</h1> 
                    <input className='input-box' onChange={(e) => setYear(e.target.value)} value={year} />
                    <h1 className='margin-top-box'>Image:</h1> 
                    <input className='input-box' onChange={(e) => setImage(e.target.value)} value={image} />
                </div>

                {/* RIGHT SIDE */}
                <div className='Right-box-create'>
                    <h1 className='margin-top-box'>Price:</h1> 
                    <input className='input-box'  type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                    <h1 className='margin-top-box'>Mileage:</h1> 
                    <input className='input-box' onChange={(e) => setMileage(e.target.value)} value={mileage} />
                    <h1 className='margin-top-box'>Color:</h1> 
                    <input className='input-box' onChange={(e) => setColor(e.target.value)} value={color} />
                    <h4 className='margin-top-box'>Put vehicle on auction</h4>
                    <p className='margin-top-btn'>⬇️</p>
                    <button className='margin-top-btn cta margin-left-submit'>Submit</button>
                </div>
                {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
        </form>
    </div>
    )
}

export default Create