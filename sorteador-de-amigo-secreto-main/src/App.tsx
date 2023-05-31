import React from 'react';
import Cabecalho from './componentes/cabecalho';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Formulario></Formulario>}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
    
  );
}

export default App;
