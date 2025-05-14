import React from 'react'
import Navbar from "../../components/navbar"
import { Link } from 'react-router-dom';
import DhBG from "../../assets/images/dh-img.jpg"
import './index.css'
export default function Products() {
    return (
	<>
	    <div className="main-rapper">
	    <div className="dh-bg"><img src={DhBG} /></div>
	        <Navbar />
	        <div className="home">
	        <h1>Products page</h1>
	        </div>
	    </div>
	</>
    )
}
