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
	            Lorem ipsum dolor sit amet
	        </h1>
	        <h2>Consectetur adipiscing elit. Pellentesque non nulla leo. Curabitur mollis rutrum ligula at interdum. Vivamus eget mauris nec justo tincidunt maximus. In aliquet interdum sapien, a commodo lorem. Quisque aliquet ipsum eget suscipit iaculis. Pellentesque placerat lorem id viverra rhoncus. Sed nec pulvinar urna. Nam vel gravida ante. Proin vulputate ac ex non vestibulum. Donec nulla justo, imperdiet in dignissim et, accumsan ut magna.
	        </h2>
            </div>
        </div>
    </>
)

}
