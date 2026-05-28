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

  return (
    <div className="body2">
      <header>
        <img src={logoEmanuele} alt="Logo Emanuele Vitória" />
        <ul>
          <li><a href="">Procedimentos</a></li>
          <li><a href="">Resultados</a></li>
          <li><a href="">Sobre mim</a></li>
          <li><a href="">Espaço</a></li>
          <li><a href="">Endereço & Contato</a></li>
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

        <section className="Procedimentos">
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
        <section className="Resultados">
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
            <h2 className="SobreMimTitulo">Prazer, meu nome é Emanuele</h2>
            <p>Sou apaixonada pela área da estética e pelo cuidado com a autoestima e bem-estar de cada cliente. Meu objetivo é proporcionar momentos de autocuidado, leveza e confiança através de atendimentos realizados com carinho, atenção, dedicação e propósito, sempre buscando oferecer um atendimento acolhedor e resultados que valorizem a beleza natural de cada cliente.</p>
            <p>Acredito que a estética é também sobre autoestima, conforto e sentir-se bem na própria pele. Por isso, estou em constante aprendizado e evolução para entregar o melhor em cada atendimento.</p>
          </div>
          <div className="SobreMimFoto">
            <img src={fotoEmanuele} alt="Foto de Emanuele" />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;