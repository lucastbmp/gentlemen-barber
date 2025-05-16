import './style.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
                <h1>Sobre nós</h1>
          <p>Fundada em 2016, a <span className="style-name">DH Gentlemen Club</span> nasceu com a missão de resgatar a tradição das
          barbearias clássicas, oferecendo serviços de <span className="style-name">alta qualidade</span> em um ambiente exclusivo para 
          <span className="style-name"> cavalheiros</span>. Nosso espaço combina o charme atemporal das barbearias de antigamente com
          técnicas modernas de corte e tratamento.</p>
        </div>
      <div className="about-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold-aged)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      </div>
      <p className="about-text">
        Mais que uma barbearia, somos um clube para cavalheiros que valorizam excelência, tradição e estilo.
        Cada cliente recebe um atendimento personalizado em um ambiente confortável, onde pode desfrutar
        de um momento de relaxamento enquanto cuida da aparência com profissionais altamente qualificados.
      </p>

      <div className="about-boxes">
  <div className="about-box">
    <div className="about-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="var(--gold-aged)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
    </div>
    <h3>Profissionais Qualificados</h3>
    <p>Nossa equipe é formada por barbeiros com anos de experiência e constante atualização técnica.</p>
  </div>

  <div className="about-box">
    <div className="about-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="var(--gold-aged)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  <path d="M20 6L9 17l-5-5" />
</svg>
    </div>
    <h3>Produtos Premium</h3>
    <p>Utilizamos apenas produtos de alta qualidade que garantem resultados superiores.</p>
  </div>

  <div className="about-box">
    <div className="about-icon-box">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="var(--gold-aged)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10" />
  <line x1="2" y1="12" x2="22" y2="12" />
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
</svg>
    </div>
    <h3>Ambiente Exclusivo</h3>
    <p>Um espaço pensado para proporcionar conforto e uma experiência única a cada visita.</p>
  </div>
</div>

    </section>
  );
}