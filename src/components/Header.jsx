import react from 'react';
import {Link} from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <>
      <header id="header">

        <span className="logo">
          <img src="/Logo.png" alt="Logo de viagens" />
        </span>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/viagens">Viagens</Link>
        </nav>

        <div>
            <Link to="/login">Login</Link>
            <Link to="/cadastrar">Cadastre-se</Link>
        </div>
      </header>

    </>
  );
}

export default Header;