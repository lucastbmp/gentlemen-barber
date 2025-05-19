import "./style.css";

export default function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2>Entre em contato!</h2>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+55 (13) 98137-0797</span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>contato@email.com.br</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Governador Pedro de Toledo, 89, Santos, Sao Paulo, Brasil 11045-550</span>
          </div>
          <div className="info-item">
            <i className="fab fa-instagram"></i>
            <a
              href="https://www.instagram.com/dhgentlemenclub"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dhgentlemenclub
            </a>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps?q=Governador+Pedro+de+Toledo,+89,+Santos,+São+Paulo,+Brazil+11045-550&output=embed"            width="100%"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Localização"
          />
        </div>
      </div>
    </section>
  );
}
