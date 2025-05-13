import React from 'react';
import Navbar from "../../components/navbar"
import Chair from "../../assets/images/chair.png" 
import './index.css'
export default function Home() {

return (
    <>
       	<Navbar />
	<div className="main-rapper">
	    
	<div className="chair-bg"><img src={Chair} /></div>
            <h1>Lorem ipsum</h1>
        </div>
    </>
)

}
