import React from 'react'
import { Link } from 'react-router-dom';
import DhBG from "../../assets/images/dh-img.jpg"
import './style.css'
export default function Products() {
    return (
	<>
	    <div className="main-rapper">
	    <div className="dh-bg"><img src={DhBG} /></div>
	        <div className="home">
	        <h1>Products page</h1>
	        </div>
	    </div>
	</>
    )
}
