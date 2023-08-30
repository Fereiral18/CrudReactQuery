"use client";

import "./layout.css";

import { estilos } from "../../components/Styles.component";

const { BtnLink } = estilos();
export default function Home() {
  return (
    <div className="container-general">
      <div className="background">
        <div className="crud">
          Crud con <div className="next">Next Js</div>
        </div>

        <BtnLink href={"/usersPage"}>Ver tabla de usuarios</BtnLink>
      </div>
    </div>
  );
}
