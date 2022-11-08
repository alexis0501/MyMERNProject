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
        <nav className='navbar bg-secondary'>
            <h1>Car wiki</h1>
            <Link className='btn btn-outline-dark' to={'/home'}>Home</Link>
            <Link className='btn btn-outline-dark' to={'/create'}>Create Car Post</Link>
        </nav>
        
        <h1 className='text-center mt-3'>Create a Car Post!</h1>
        <form className='container d-flex border border-secondary rounded mt-3' onSubmit={createCar}>
            {/* LEFT SIDE */}
                <div className='container p-3'>
                    <label className='form-label mt-3'>Brand:</label> 
                        <input className='form-control input-focus' onChange={(e) => setBrand(e.target.value)} value={brand} />
                    <label className='form-label mt-3'>Model:</label> 
                        <input className='form-control input-focus' onChange={(e) => setModel(e.target.value)} value={model} />
                    <label className='form-label mt-3'>Year:</label> 
                        <input className='form-control input-focus' onChange={(e) => setYear(e.target.value)} value={year} />
                    <label className='form-label mt-3'>Image:</label> 
                        <input className='form-control input-focus' onChange={(e) => setImage(e.target.value)} value={image} />
                        <span className='text-secondary font-small'>*NOTE: When getting an image, click 'open image in new tab', copy & paste into input field*</span>
                </div>

                {/* RIGHT SIDE */}
                <div className='container p-3 ms-3'>
                    <label className='form-label mt-3'>Price:</label> 
                        <input className='form-control input-focus'  type='number' onChange={(e) => setPrice(e.target.value)} value={price} />
                    <label className='form-label mt-3'>Mileage:</label> 
                        <input className='form-control input-focus' onChange={(e) => setMileage(e.target.value)} value={mileage} />
                    <label className='form-label mt-3'>Color:</label> 
                        <input className='form-control input-focus' onChange={(e) => setColor(e.target.value)} value={color} />
                    <button className='btn btn-primary w-100 mt-5'>Submit</button>
                </div>
                {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
        </form>
    </div>
    )
}

export default Create