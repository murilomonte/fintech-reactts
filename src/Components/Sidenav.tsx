/// <reference types="vite-plugin-svgr/client" />
import FintechSVG from "../assets/FintechSVG";
import ResumoSVG from "../assets/icons/resumo.svg?react";
import VendasSVG from "../assets/icons/vendas.svg?react";
import WebhooksSVG from "../assets/icons/webhooks.svg?react";
import ConfiguracoesSVG from "../assets/icons/configuracoes.svg?react";
import ContatoSVG from "../assets/icons/contato.svg?react";
import SairSVG from "../assets/icons/sair.svg?react";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <span>
            <ResumoSVG />
          </span>
          <NavLink to={"/"}>Resumo</NavLink>
        </li>
        <li>
          <span>
            <VendasSVG />
          </span>
          <NavLink to={"/vendas"}>Vendas</NavLink>
        </li>
        <li>
          <span>
            <WebhooksSVG />
          </span>
          <a>Webhooks</a>
        </li>
        <li>
          <span>
            <ConfiguracoesSVG />
          </span>
          <a>Configuracoes</a>
        </li>
        <li>
          <span>
            <ContatoSVG />
          </span>
          <a>Contato</a>
        </li>
        <li>
          <span>
            <SairSVG />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
