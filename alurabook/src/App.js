import './App.css';
import Logo from './componentes/logo' //nesta linha estou importando o componente logo

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo> {/* nesta linha estou exibindo o componente*/}
      </header>
    </div>
  );
}

export default App;
