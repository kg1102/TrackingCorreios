import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import TrackingResult from "../../components/TrackingResult";
import LogoImg from '../../images/logoimg.svg';
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [data, setData] = useState([]);
  const [codigoRastreio, setCodigoRastreio] = useState('');
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  function submitHandler(event){
    event.preventDefault();

    if(codigoRastreio.trim() === ''){
      return alert('O Campo do código de rastreio está em branco!');
    }

    setLoading(true);

    fetch(`https://kgtrackingcorreios.herokuapp.com/?tracking=${codigoRastreio}`)
      .then(response => response.json())
      .then(result => {
        if (result.data.message === "OK") {
          setShow(!show);
          setLoading(false);
          setData(result.data.status_list);
        }else{
          setShow(false);
          alert(result.data.message);
        }
      });
  }

  useEffect(()=>{
    return setShow(false);
  }, []);

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

      {!show ? 
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input 
              type="text"
              placeholder="Exemplo: QG295410232BR..." 
              name="tracking"
              onChange={event => setCodigoRastreio(event.target.value)}
              value={codigoRastreio}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Verificar
          </button>
          {loading ? 
          <div id="loading">
            <h1>Carregando...</h1> 
            <SyncLoader color={"#ffffff"}/>
          </div>
          : null} 
        </form>
      : 
        <TrackingResult data={data} />
      }
      <footer>
        <h2>Desenvolvido por Kaio Gomes</h2>
      </footer>
    </div>
  );
}

export default App;