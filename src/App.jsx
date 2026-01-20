import './App.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <header>
        <h1>Kanane Store</h1>
        <nav>
          <a href="#inicio"><span>Início</span></a>
          <a href="#preco"><span>Preços</span></a>
          <a href="#contato"><span>Contatos</span></a>
        </nav>
      </header>

      <main>
        <div className='Cropped' id='inicio'>
          <h1>Cropped</h1>

          <div className='cards'>
            <a href="https://www.instagram.com/p/DTvv4ZlkgWg/" target="_blank">
              <div className='card'>
                <img src={`${base}Cropped Capivara.webp`} alt="Cropped Capivara" />
                <span>Cropped Capivara</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>50,00</span></div>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DTvwCTyEgIa/" target="_blank">
              <div className='card'>
                <img src={`${base}Cropped gato Ti.webp`} alt="Cropped Gato Programador" />
                <span>Cropped Gato Programador</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>50,00</span></div>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DTvwKNEkrir/" target="_blank">
              <div className='card'>
                <img src={`${base}Cropped Gato Ti Rosa.webp`} alt="Cropped Gato Programador Rosa" />
                <span>Cropped Gato Programador</span>
                <span>Tamanho: M</span>
                <div><span>R$</span><span>50,00</span></div>
              </div>
            </a>
          </div>
        </div>

        <div className="camisetas" id="preco">
          <div className="camisetas-header">
            <hr /><h1>Camisetas</h1><hr />
          </div>

          <div className="camisetas-grid">
            <div className="coluna">
              <div className="card camiseta-card">
                <img src={`${base}T-shirt Cogumelo.webp`} alt="Camiseta Cogumelo" />
                <span>Camiseta Cogumelo</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>60,00</span></div>
              </div>
            </div>

            <div className="coluna centro">
              <img src={`${base}Logo.png`} alt="Kanane Store Logo" />
            </div>

            <div className="coluna">
              <div className="card camiseta-card">
                <img src={`${base}T-shirt Urso streat.webp`} alt="Camiseta Attitude Bear" />
                <span>Camiseta Attitude Bear</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>60,00</span></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="card camiseta-card">
              <img src={`${base}T-shirt Urso.webp`} alt="Camiseta Streetwear Bear" />
              <span>Camiseta Streetwear Bear</span>
              <span>Tamanho: G</span>
              <div><span>R$</span><span>60,00</span></div>
            </div>

            <div className="card camiseta-card">
              <img src={`${base}T-shirt Ange Black.webp`} alt="Camiseta Angel Black" />
              <span>Camiseta Angel Black</span>
              <span>Tamanho: G</span>
              <div><span>R$</span><span>60,00</span></div>
            </div>

            <div className="card camiseta-card">
              <img src={`${base}T-shirt Ange.webp`} alt="Camiseta Angel White" />
              <span>Camiseta Angel White</span>
              <span>Tamanho: G</span>
              <div><span>R$</span><span>60,00</span></div>
            </div>
          </div>
        </div>
      </main>

      <footer id="contato">
        <div className="footer-container">
          <div>
            <h1>Sobre</h1>
            <div className="texto">
              <span>Loja online com entrega rápida</span>
              <span>Rio Tinto e Mamanguape</span>
            </div>
          </div>

          <div>
            <h1>Horário</h1>
            <div className="texto">
              <span>Segunda a Quinta</span>
              <span>09:00 às 18:00</span>
            </div>
          </div>

          <div>
            <h1>Contato</h1>
            <div className="icons">
              <a href="https://wa.me/5583993038431" target="_blank">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/kanane_store/" target="_blank">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/5583993038431"
        target="_blank"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </>
  )
}

export default App
