import React from 'react';
import './style.css';

export default function About() {
  return (
  <>
    <main-wrapper>
      <div className="about-content">
        <div className="about-text">
          <h1>Sobre nós</h1>
          <p>Fundada em 2016, a <span className="style-name">DH Gentlemen Club</span> nasceu com a missão de resgatar a tradição das
          barbearias clássicas, oferecendo serviços de <span className="style-name">alta qualidade</span> em um ambiente exclusivo para 
          <span className="style-name"> cavalheiros</span>. Nosso espaço combina o charme atemporal das barbearias de antigamente com
          técnicas modernas de corte e tratamento.</p>
        </div>
      </div>
    </main-wrapper>
  </>
);
}

