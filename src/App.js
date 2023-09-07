import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() { // componente de react 
  return (
    <div className="App"> 
      <Banner />  
      <CampoTexto label="Nome" placeholder="Digite seu nome"/> 
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/> 
      <CampoTexto label="Imagem" placeholder="Digite o endereço de imagem"/>  
    </div>
  );
}

export default App;
