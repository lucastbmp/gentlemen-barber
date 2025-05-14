import React from 'react';
import Navbar from "../../components/navbar";
import Chair from "../../assets/images/chair.png"; 
import Logo from "../../assets/images/dh-barber-logo.png";
import './index.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main-wrapper">
        <section className="section home-section" id="home">
          <div className="home-content">
                <div className="chair-bg">
                   <img src={Chair} />
                </div>
            <div className="text">
	      <img src={Logo} className="logo"/>
	      <h1>DH Gentlemen Club</h1>
              <h2>Since 2016</h2>
              <h3>Entre em contato!</h3>
              <h4>+55 (13)981370797</h4>
              <h5>Governador Pedro de Toledo, 89, Santos, Sao Paulo, Brazil 11045-550</h5>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="about-content">
            <h1>Sobre nós</h1>
            <p>Fundada em 2016, a DH Gentlemen Club nasceu com a missão de resgatar a tradição das barbearias clássicas, oferecendo serviços de alta qualidade em um ambiente exclusivo para cavalheiros. Nosso espaço combina o charme atemporal das barbearias de antigamente com técnicas modernas de corte e tratamento.</p>
          </div>
        </section>
      </div>
    </>
  );
}
