import React from 'react'
import '../Static/noRoute.css'
import { Link } from 'react-router-dom'
import HomeIcon from '../Images/HomeIcon.png'

const NoPage = () => {
    return (
        <div>
            <nav className='navbar bg-light'>
                <h1>Car wiki</h1>
                <Link className='btn btn-outline-dark' to={'/'}>Home</Link>
                <Link className='btn btn-outline-dark' to={'/create'}>Create Car Post</Link>
            </nav>  


            <div className="container mt-5">
                <h3 className='text-danger'>This route does not exist, please navigate to home page</h3>
            </div>
            <div className="container mt-5">
                <h5>
                    The goal of this website is for car enthusiasts to show off cars and their knowledge/passions.
                    Ranging from JDM to hypercars to good old classics, no category is excluded!
                </h5>
                <Link to={'/home'}>
                    <img src={HomeIcon} alt="Home" />
                </Link>
            </div>
        </div>
    )
}

export default NoPage