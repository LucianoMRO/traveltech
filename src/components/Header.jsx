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
        <nav className="menu">
            <Link to="/" className="link">Home</Link>
            <Link to="/viagens" className="link">Viagens</Link>
            <Link to="/termos de serviço" className="link">Termos de serviço</Link>
        </nav>

        <div className="botao">
            <Link to="/login" className="btn-log">Login</Link>
            <Link to="/cadastrar" className="link btn-cadastro">Cadastre-se</Link>
        </div>
      </header>

    </>
  );
}

export default Header;