import { useState } from "react";
import './App.css'
import logoEmanuele from './assets/images/LogoEmanuele.png'
import iconCoracao from '../public/iconCoracao.png'
import iconCalendario from '../public/iconCalendario.png'
import resultado1 from './assets/images/resultado1.jpeg'
import resultado2 from './assets/images/resultado2.jpeg'
import resultado3 from './assets/images/resultado3.jpeg'
import resultado4 from './assets/images/resultado4.jpeg'
import resultado5 from './assets/images/resultado5.jpeg'
import resultado6 from './assets/images/resultado6.jpeg'
import fotoEmanuele from './assets/images/fotoEmanuele.png'
import espaco1 from './assets/images/espaco1.jpeg'
import espaco2 from './assets/images/espaco2.jpeg'
import espaco3 from './assets/images/espaco3.jpeg'
import espaco4 from './assets/images/espaco4.jpeg'
import espaco5 from './assets/images/espaco5.jpeg'
import espaco6 from './assets/images/espaco6.jpeg'
import espaco7 from './assets/images/espaco7.jpeg'
import espaco8 from './assets/images/espaco8.jpeg'
import espaco9 from './assets/images/espaco9.jpeg'
import local from './assets/iconLocal.png'
import email from './assets/iconE-mail.png'
import celular from './assets/iconCelular.png'
import logoBranca from './assets/LogoBrancaEmanuele.png'
import iconWhats from './assets/iconWhats.png'
import iconInsta from './assets/iconInsta.png'
import iconEmail from './assets/iconEmail.png'

const espaco = [espaco1, espaco2, espaco3, espaco4, espaco5, espaco6, espaco7, espaco8, espaco9];
const resultados = [resultado1, resultado2, resultado3, resultado4, resultado5, resultado6];

const procedimentos = [
  {
    id: 1,
    titulo: "Limpeza de Pele",
    descricao: "Higienização profunda que ajuda a remover impurezas, controlar a oleosidade, prevenir acne e deixar a pele mais saudável, limpa, iluminada e com viço natural.",
    categoria: "facial",
  },
  {
    id: 5,
    titulo: "Drenagem Linfática",
    descricao: "Técnica suave que auxilia na redução do inchaço, retenção de líquidos, melhora da circulação sanguínea e traz sensação de leveza ao corpo.",
    categoria: "corporal",
  },
  {
    id: 6,
    titulo: "Massagem relaxante",
    descricao: "Alivia tensões, diminui o estresse, relaxa a musculatura e proporciona momentos de descanso e bem-estar.",
    categoria: "corporal",
  },
  {
    id: 7,
    titulo: "Massagem modeladora",
    descricao: "Realizada com movimentos mais intensos para auxiliar na melhora da circulação, redução de medidas e definição do contorno corporal.",
    categoria: "corporal",
  },
];

function App() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("facial");

  const procedimentosFiltrados = procedimentos.filter(
    (p) => p.categoria === categoriaAtiva
  );
  
  // carrossel
  const [slideAtivo, setSlideAtivo] = useState(0);

  const proximoSlide = () => setSlideAtivo((prev) => (prev + 1) % (resultados.length - 2));
  const slideAnterior = () => setSlideAtivo((prev) => (prev - 1 + (resultados.length - 2)) % (resultados.length - 2));

  //carrossel 2
  const [slideEspaco, setSlideEspaco] = useState(0);

  const proximoSlideEspaco = () => setSlideEspaco((prev) => (prev + 1) % (espaco.length - 2));
  const slideAnteriorEspaco = () => setSlideEspaco((prev) => (prev - 1 + (espaco.length - 2)) % (espaco.length - 2));

  return (
    <div className="body2">
      <header>
        <img src={logoEmanuele} alt="Logo Emanuele Vitória" />
        <ul>
          <li><a href="#procedimentos">Procedimentos</a></li>
          <li><a href="#resultados">Resultados</a></li>
          <li><a href="#prazer">Sobre mim</a></li>
          <li><a href="#espaco">Espaço</a></li>
          <li><a href="#endereco">Endereço & Contato</a></li>
        </ul>
      </header>

      <main>
        <section className="Inicio">
          <div className="TextosInicio">
            <div className="SeuMomento">
              <img src={iconCoracao} alt="Icone de um coração" />
              <p>Seu momento seu cuidado</p>
            </div>
            <h1>Beleza, cuidado e leveza <span className="TextoRoxo">em um só lugar.</span></h1>
            <p className="ParagrafoInicio">Um espaço pensado para você relaxar, se cuidar e sair diferente de como entrou.</p>
            <a href="http://wa.me/11986507900" target="_blank" rel="noopener noreferrer">
              <img src={iconCalendario} alt="Icone de um calendário" />
              Agendar avaliação
            </a>
          </div>
        </section>

        <section className="Procedimentos" id="procedimentos">
          <h2 className="ProcedimentosTitulo">Procedimentos</h2>

          <div className="ProcedimentosTabs">
            <button
              className={`TabBtn ${categoriaAtiva === "facial" ? "ativo" : ""}`}
              onClick={() => setCategoriaAtiva("facial")}
            >
              Faciais
            </button>
            <button
              className={`TabBtn ${categoriaAtiva === "corporal" ? "ativo" : ""}`}
              onClick={() => setCategoriaAtiva("corporal")}
            >
              Corporais
            </button>
          </div>

          <div className="ProcedimentosGrid">
            {procedimentosFiltrados.map((proc) => (
              <div key={proc.id} className="ProcedimentoCard">
                <h3>{proc.titulo}</h3>
                <p>{proc.descricao}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="Resultados" id="resultados">
          <h2 className="ResultadosTitulo">Resultados</h2>

          <div className="CarrosselWrapper">
            <button className="CarrosselBtn esquerda" onClick={slideAnterior}>&#8249;</button>

            <div className="CarrosselFotos">
              {resultados.slice(slideAtivo, slideAtivo + 3).map((img, i) => (
                <img key={slideAtivo + i} src={img} alt={`Resultado ${slideAtivo + i + 1}`} className="CarrosselFoto" />
              ))}
            </div>

            <button className="CarrosselBtn direita" onClick={proximoSlide}>&#8250;</button>
          </div>

          <div className="CarrosselDots">
            {Array.from({ length: resultados.length - 2 }).map((_, i) => (
              <span
                key={i}
                className={`Dot ${slideAtivo === i ? "ativo" : ""}`}
                onClick={() => setSlideAtivo(i)}
              />
            ))}
          </div>
          <div className="ctaResultado">
            <a href="http://wa.me/11986507900" target="_blank" rel="noopener noreferrer">
              <img src={iconCalendario} alt="Icone de um calendário" />
              Agendar avaliação
            </a>
          </div>
        </section>
        <section className="SobreMim">
          <div className="SobreMimTexto">
            <h2 className="SobreMimTitulo" id="prazer">Prazer, meu nome é Emanuele</h2>
            <p>Sou apaixonada pela área da estética e pelo cuidado com a autoestima e bem-estar de cada cliente. Meu objetivo é proporcionar momentos de autocuidado, leveza e confiança através de atendimentos realizados com carinho, atenção, dedicação e propósito, sempre buscando oferecer um atendimento acolhedor e resultados que valorizem a beleza natural de cada cliente.</p>
            <p>Acredito que a estética é também sobre autoestima, conforto e sentir-se bem na própria pele. Por isso, estou em constante aprendizado e evolução para entregar o melhor em cada atendimento.</p>
          </div>
          <div className="SobreMimFoto">
            <img src={fotoEmanuele} alt="Foto de Emanuele" />
          </div>
        </section>
        <section className="Espaco" id="espaco">
          <h2 className="EspacoTitulo">Nosso Espaço</h2>
          <p className="espacoparagrafo">Tudo pensado para melhor lhe atender!</p>

          <div className="CarrosselWrapper">
            <button className="CarrosselBtn esquerda" onClick={slideAnteriorEspaco}>&#8249;</button>

            <div className="CarrosselFotos">
              {espaco.slice(slideEspaco, slideEspaco + 3).map((img, i) => (
                <img key={slideEspaco + i} src={img} alt={`Espaço ${slideEspaco + i + 1}`} className="CarrosselFoto" />
              ))}
            </div>

            <button className="CarrosselBtn direita" onClick={proximoSlideEspaco}>&#8250;</button>
          </div>

          <div className="CarrosselDots">
            {Array.from({ length: espaco.length - 2 }).map((_, i) => (
              <span
                key={i}
                className={`Dot ${slideEspaco === i ? "ativo" : ""}`}
                onClick={() => setSlideEspaco(i)}
              />
            ))}
          </div>
          <div className="ctaEspaco">
            <a href="http://wa.me/11986507900" target="_blank" rel="noopener noreferrer">
              <img src={iconCalendario} alt="Icone de um calendário" />
              Agendar avaliação
            </a>
          </div>
        </section>
        <section className="Localizacao" id="endereco">
          <div className="LocalizacaoTexto">
            <h2 className="LocalizacaoTitulo">Localização</h2>
            <div className="LocalizacaoInfos">
              <div className="LocalizacaoItem">
                <span className="LocalizacaoIcone"><img src={local} alt="icon de local" /></span>
                <p>R. André Franco Montoro, 39 - Orquídeas, São Bernardo do Campo - SP, 09854-300</p>
              </div>
              <div className="LocalizacaoItem">
                <span className="LocalizacaoIcone"><img src={email} alt="icon e-mail" /></span>
                <p>emanuelevitoriaps@gmail.com</p>
              </div>
              <div className="LocalizacaoItem">
                <span className="LocalizacaoIcone"><img src={celular} alt="celular" /></span>
                <p>11 98650-7900</p>
              </div>
            </div>
          </div>

          <div className="LocalizacaoMapa" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9233988455076!2d-46.60144532577913!3d-23.7501108685516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce46c9529d2409%3A0xe40e419756e0236c!2sR.%20Andr%C3%A9%20Franco%20Montoro%2C%2039%20-%20Alvarenga%2C%20S%C3%A3o%20Bernardo%20do%20Campo%20-%20SP%2C%2009854-300!5e0!3m2!1spt-BR!2sbr!4v1780019133863!5m2!1spt-BR!2sbr" width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            
          </div>
        </section>
        
      </main>

      <footer>
        <img src={logoBranca} alt="Logo Emanuele Vitória" className="logoRodape"/>
        <div className="contatos">
          <h3>Contato:</h3>
          <a href="http://wa.me/11986507900" target="_blank" rel="noopener noreferrer"><img src={iconWhats} alt="Icon do whatsapp" /></a>
          <a href="https://www.instagram.com/ev_esteticaa/" target="_blank" rel="noopener noreferrer"><img src={iconInsta} alt="Icon do Instagram" /></a>
          <a href="mailto:emanuelevitoriaps@gmail.com" target="_blank" rel="noopener noreferrer"><img src={iconEmail} alt="Icon do Email" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;