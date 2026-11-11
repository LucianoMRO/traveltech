import { useState, useEffect } from 'react';
import { supabase } from './supabase';

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
    
    <h1> Travel Tech </h1>
    <p> Viagens Disponíveis </p>

    {
      viagens.map( (viagem) => (
        <p key={viagem.id}> Nome da Viagem { viagem.destino } - R$ { viagem.preco } </p>
      ))

    }

    </>
  )
}


export default App;
