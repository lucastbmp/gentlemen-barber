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
            <div className="text">
	        <h1>
	            DH Gentlemen Club
	        </h1>
		<h2>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis neque quis tellus elementum pulvinar non lacinia orci. Etiam non tincidunt mi, et aliquet turpis. Sed tempor leo non odio cursus consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a vestibulum odio. Nulla ornare molestie ex, vitae malesuada arcu vestibulum at. Suspendisse ultricies vel turpis vitae viverra. Quisque maximus laoreet commodo. Vivamus feugiat ante sed massa interdum accumsan. Aenean ornare gravida eros, tempus aliquam neque porttitor eget. Vivamus ac eleifend turpis. Suspendisse pellentesque turpis et tortor aliquam, et interdum est porttitor. Cras varius iaculis ligula a scelerisque.
	        </h2>
	        <h3>Entre em contato!</h3>
	        <h4>+55 (13)981370797</h4>
	        <h5>Governador Pedro de Toledo, 89, Santos, Sao Paulo, Brazil 11045-550</h5>
            </div>
        </div>
    </>
)

}
