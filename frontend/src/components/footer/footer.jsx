import "./style.css";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <h1>Como chegar ?</h1>
      <p>Governador Pedro de Toledo, 89, Santos, São Paulo, Brazil 11045-550</p>
      <iframe
        src="https://www.google.com/maps?q=Governador+Pedro+de+Toledo,+89,+Santos,+São+Paulo,+Brazil+11045-550&output=embed"
        width="100%"
        height="250"
        frameBorder="0"
        style={{ border: 0, marginTop: '1rem' }}
        allowFullScreen
        title="Localização da Barbearia"
      />

    <div className="footer-socials">
      <a href="https://wa.me/5513981370797" target="_blank" rel="noopener noreferrer" className="social-button">
        <i className="fab fa-whatsapp"></i> WhatsApp
      </a>
      <a href="https://www.instagram.com/dhgentlemenclub" target="_blank" rel="noopener noreferrer" className="social-button">
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
    </section>
  );
}