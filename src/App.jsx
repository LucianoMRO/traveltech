import { useState, useEffect } from 'react';
import { supabase } from './supabase';

function App() {
  
  const [viagens, setViagens] = useState([]);

  return(
    <>
    
    <h1> Travel Tech </h1>
    <p> viagens Disponíveis </p>

    </>
  )
}


export default App;
