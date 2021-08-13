import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import LogoImg from '../../images/logoimg.svg';

function App() {
  const history = useHistory();

  return (
    <div className="container">
      <header>
        <img src={LogoImg}/>
        <h1 onClick={()=>history.push('/')}>TrackingCorreios</h1>
        <div class="nav">
            <nav style={{display: 'flex'}}>
              <h2 onClick={()=>history.push('/about')}>Sobre</h2>
              <h2 onClick={()=>history.push('/donate')}>Donate</h2>
              <h2 onClick={()=>history.push('/github')}>Github</h2>
            </nav>
        </div>
      </header>

      <div id="about">
        <h4>As informações de rastro de objetos registrados ficarão disponíveis até 180 dias após a data de postagem.

Objetos com origem ou destino fora do Brasil
O rastreamento para objetos postados no Brasil com código iniciado por "R" e "C" e terminado com "BR" não é garantido fora do território brasileiro.

Para esses objetos, os operadores postais de outros países podem não disponibilizar e/ou transmitir informação de rastreamento para o Brasil.

Sendo assim, consultas de rastreamento de objetos podem também ser realizadas nos sites dos operadores de destino disponíveis no site da UPU - União Postal Universal.

Para os objetos postados no Exterior para o Brasil, o serviço contratado pelo remetente na origem determina o nível de informação de rastreamento de objetos em nosso site.

Objetos registrados recebidos do exterior que apresentam código iniciado por "R" não pertencem à modalidade expressa, portanto não há rastreamento ponto a ponto. As informações no sistema de rastreamento para esses objetos "R" incluem apenas os eventos: "recebimento no Brasil", "entrega", "tentativa de entrega" ou "aguardando retirada na unidade responsável". No caso do objeto ser tributado, haverá os eventos de "encaminhamento para fiscalização e tributação” e "saída da fiscalização".

O prazo estimado de entrega dos objetos registrados é de 40 DIAS ÚTEIS a partir da confirmação de pagamento dos impostos (se tributado) e do despacho postal. Tabela prazos de entrega

Remessas iniciadas com o código "UM" não são rastreáveis no Brasil. Esse código é utilizado pelo país de origem para indicar que a remessa é passível de pagamento de imposto de importação no destino.</h4>
      </div>

      <footer>
        <h2>Desenvolvido por Kaio Gomes</h2>
      </footer>
    </div>
  );
}

export default App;