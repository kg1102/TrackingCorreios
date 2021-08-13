import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import LogoImg from '../../images/logoimg.svg';

function App() {
  const history = useHistory();

  return (
    <div className="container">
      <header>
        <img src={LogoImg} alt="Logo do website"/>
        <h1 onClick={()=>history.push('/')}>TrackingCorreios</h1>
        <div class="nav">
            <nav style={{display: 'flex'}}>
              <h2 onClick={()=>history.push('/about')}>Sobre</h2>
              <h2 onClick={()=>history.push('/donate')}>Donate</h2>
              <h2 onClick={()=>document.location.href="https://github.com/kg1102/correiostracker-frontend"}>Github</h2>
            </nav>
        </div>
      </header>

      <div id="about">
        <h4>As informações de rastro de objetos registrados ficarão disponíveis até 180 dias após a data de postagem.</h4>
      </div>

      <footer>
        <h2>Desenvolvido por Kaio Gomes</h2>
      </footer>
    </div>
  );
}

export default App;