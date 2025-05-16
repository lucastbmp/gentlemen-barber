import "./style.css"

export default function Footer() {
    return (
      <footer>
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
      </footer>
    );
  }