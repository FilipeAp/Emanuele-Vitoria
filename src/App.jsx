import './App.css'
import logoEmanuele from './assets/images/LogoEmanuele.png'
import iconCoracao from '../public/iconCoracao.png'
import iconCalendario from '../public/iconCalendario.png'
import imagemHome from './assets/images/imagemHome.png'

function App() {
  
  return (
    <div className="body2">
      <header>
        <img src={logoEmanuele} alt="Logo Emanuele Vitória" />
        <ul>
          <li><a href="">Procedimentos</a></li>
          <li><a href="">Resultados</a></li>
          <li><a href="">Sobre mim</a></li>
          <li><a href="">Endereço & Contato</a></li>
          <li><a href="">Endereço & Contato</a></li>
        </ul>
      </header>
      <main>
        <section className="Inicio">
          <div className="TextosInicio">
            <div className="SeuMomento">
              <img src={iconCoracao} alt="Icone de um coração"/>
              <p>Seu momento seu cuidado</p>
            </div>
            <h1>Beleza, cuidado e leveza <span className="TextoRoxo">em um só lugar.</span></h1>
            <p className="ParagrafoInicio">Um espaço pensado para você relaxar, se cuidar e sair diferente de como entrou.</p>
            <a href="http://wa.me/11986507900" target="_blank" rel="noopener noreferrer"><img src={iconCalendario} alt="Icone de um calendário" />Agendar avaliação</a>
          </div>
        </section>
        <section></section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
