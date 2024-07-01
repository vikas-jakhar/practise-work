import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <section className=' py-3'>
            <div className="container">
                <div className=" d-flex gap-4 align-items-center">
                    <Link to="/">Home</Link>
                    <Link to="/About1">About</Link>
                    <Link to="/Contact">contact</Link>
                </div>
            </div>
        </section>
    )
}

export default Header
