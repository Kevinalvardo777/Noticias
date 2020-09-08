import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  // definir la categoria y noticias

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() =>{
    const consultarAPI = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=369f46a55458463192c8e3ba34eab9fe`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
        <Header 
            titulo= 'Buscador de noticias'
        />
        <div className="container-white">
            <Formulario 
                guardarCategoria = {guardarCategoria}
            />
        </div>
    </Fragment>
  );
    
}

export default App;
