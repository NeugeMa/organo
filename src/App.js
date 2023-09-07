import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() { // componente de react 
  return (
    <div className="App"> 
      <Banner />  
      <CampoTexto label="Nome"/> 
      <CampoTexto label="Cargo"/> 
      <CampoTexto label="Imagem"/>  
    </div>
  );
}

export default App;
