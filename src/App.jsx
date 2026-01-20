import './App.css'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
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
            <a href="https://www.instagram.com/p/DTvv4ZlkgWg/">
              <div className='card'>
                <img src="/Cropped Capivara.webp" />
                <span>Cropped Capivara</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>50,00</span></div>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DTvwCTyEgIa/">
              <div className='card'>
                <img src="/Cropped gato Ti.webp" />
                <span>Cropped Gato Programador</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>50,00</span></div>
              </div>
            </a>

            <a href="https://www.instagram.com/p/DTvwKNEkrir/">
              <div className='card'>
                <img src="/Cropped Gato Ti Rosa.webp" />
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
                <img src="/T-shirt Cogumelo.webp" />
                <span>Camiseta Cogumelo</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>60,00</span></div>
              </div>
            </div>

            <div className="coluna centro">
              <img src="/Logo.png" />
            </div>

            <div className="coluna">
              <div className="card camiseta-card">
                <img src="/T-shirt Urso streat.webp" />
                <span>Camiseta Attitude Bear</span>
                <span>Tamanho: G</span>
                <div><span>R$</span><span>60,00</span></div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <div className="card camiseta-card">
              <img src="/T-shirt Urso.webp" />
              <span>Camiseta Streetwear Bear</span>
              <span>Tamanho: G</span>
              <div><span>R$</span><span>60,00</span></div>
            </div>

            <div className="card camiseta-card">
              <img src="/T-shirt Ange Black.webp" />
              <span>Camiseta Angel Black</span>
              <span>Tamanho: G</span>
              <div><span>R$</span><span>60,00</span></div>
            </div>

            <div className="card camiseta-card">
              <img src="/T-shirt Ange.webp" />
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
              <a href="https://wa.me/5583993038431"><FaWhatsapp /></a>
              <a href="https://instagram.com/kananestore"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/5583993038431" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </>
  )
}

export default App
