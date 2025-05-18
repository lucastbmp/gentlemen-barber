import './style.css';

const services = [
  {
    title: 'Corte Masculino',
    price: 70,
    description: 'Corte personalizado com técnicas modernas e finalização com produtos premium.',
  },
  {
    title: 'Barba Completa',
    price: 60,
    description: 'Modelagem, hidratação e finalização com toalha quente e produtos especiais.',
  },
  {
    title: 'Combo Corte + Barba',
    price: 110,
    description: 'Experiência completa com corte personalizado e tratamento de barba.',
  },
  {
    title: 'Corte Degradê',
    price: 80,
    description: 'Técnica especializada com máquina e tesoura para um acabamento perfeito.',
  },
  {
    title: 'Hidratação Capilar',
    price: 50,
    description: 'Tratamento profundo para todos os tipos de cabelo com produtos especializados.',
  },
  {
    title: 'Pezinho',
    price: 35,
    description: 'Acabamento na nuca e laterais para manter o visual entre cortes.',
  },
];

export default function ServicesCard() {
  const phone = '5513981370797';
  const getWhatsAppLink = (service) => {
    const message = `Olá, gostaria de agendar um horário para o serviço: ${services}`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Nossos Serviços</h2>
      <div className="services-grid">
      {services.map((s) => (
        <div className="service-card" key={s.title}>
         <div className="service-header">
           <div className="service-icon-title">
             <span className="scissors-icon">✂️</span>
             <h3 className="service-title">{s.title}</h3>
           </div>
           <span className="service-price">R$ {s.price}</span>
         </div>
          <p className="service-description">{s.description}</p>
         <a
            className="whatsapp-button"
            href={`https://wa.me/5513981370797?text=${encodeURIComponent(
              `Olá, gostaria de agendar o serviço: ${s.title}`
            )}`}
           target="_blank"
           rel="noopener noreferrer"
          >
           Agendar
         </a>
  </div>
))}
      </div>
    </section>
  );
}
