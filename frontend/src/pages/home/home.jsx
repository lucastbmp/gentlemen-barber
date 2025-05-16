import React from 'react';
import Navbar from "../../components/navbar/navbar.jsx";
import Chair from "../../assets/images/chair.png"; 
import Logo from "../../assets/images/dh-barber-logo.png";
import './style.css';
import Footer from "../../components/footer/footer.jsx"
import Products from "../products/products.jsx";
import About from "../about/about.jsx";
import Services from "../../pages/services/services.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <main-wrapper>
        <section className="home-section" id="home">
          <div className="home-content">
              <div className="chair-bg">
                <img src={Chair} />
              </div>
            <div className="home-text">
	            <img src={Logo} className="logo"/>
	            <h1>DH <span className="gentlemen">Gentlemen</span> Club</h1>
              <h2>Since <span className="date">2016</span></h2>
              <h3>Veja nossos serviços!</h3>
              <h4>Agende hoje! +55 (13) 98137-0797</h4>
              <h5>Governador Pedro de Toledo, 89, Santos, Sao Paulo, Brazil 11045-550</h5>
            </div>
          </div>
        </section>
        <About />
        <Services />
        <Products />
      </main-wrapper>
      <Footer />
    </>
  );
}
