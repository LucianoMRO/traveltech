import { useState, useEffect } from 'react';
import { supabase } from './supabase';
import './App.css';

function App() {
  
  const [viagens, setViagens] = useState([]);

  useEffect( () => {
    async function buscar() {
      const { data, errorr } = await supabase.from('viagens').select('*');

      if (errorr) {
        alert(" Erro ao buscar Viagens no banco de dados ");
      } else {
        setViagens(data);
      }
    }
    
      buscar();
  } , [] );
 

  return(
    <>
    <header>
      <h1> Travel Tech </h1>
      <p> Viagens Disponíveis </p>
    </header>

    <section className="lista">
    {
      viagens.map( (viagem) => (
        <div key={viagem.id} className="card">
         <h3> Nome: {viagem.destino} </h3>
          <p> Preço: R$ {viagem.preco} </p>
          <button> Ver Viagem </button>
        </div>
      ))
    }
    </section>
    </>
  )
}


export default App;
