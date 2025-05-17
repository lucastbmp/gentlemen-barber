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
              <div className="card-slogan">
               <div className="slogan-row">
                <div className="slogan-side">
                  <span className="side-text"><span className="since">SINCE</span></span>
                   <div className="line-horizontal"></div>
                </div>
                <img
                src={Logo}
                alt="Logo DH"
                className="center-logo"
                 />
                <div className="slogan-side">
                   <span className="side-text"><span className="since-date">2016</span></span>
                   <div className="line-horizontal"></div>
                 </div>
               </div>
              <div className="slogan-barberline">
                <span className="barber-script"><span className="barber">Barber</span></span>
                <span className="barber-script"><span className="shop">Shop</span></span>
              </div>
            </div>
	            <h1>DH <span className="gentlemen">Gentlemen</span> Club</h1>
              <a href="#services" className="cta-button">Veja nossos serviços!</a>
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
