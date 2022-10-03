import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const elementos = ["piedra.png", "papel.png", "tijeras.png"];

const PiedraPapelTijeras = () => {
  const [lasManos, SetManos] = useState([]);
  const [mensajeGanador, setMensaje] = useState("");
  const jugar = (e) => {
    const jugador1 = parseInt(e.currentTarget.dataset.id);
    const jugador2 = Math.floor(Math.random() * elementos.length);
    const jugadores = [];
    jugadores.push(jugador1);
    jugadores.push(jugador2);
    SetManos(jugadores);
    if (jugador1 === jugador2) {
      setMensaje("Empate");
    } else if (
      (jugador1 === 0 && jugador2 === 2) ||
      (jugador1 === 1 && jugador2 === 0) ||
      (jugador1 === 2 && jugador2 === 1)
    ) {
      setMensaje("Ganó jugador 1");
    } else {
      setMensaje("Ganó la compu");
    }
  };
  const Resultado = () => {
    if (lasManos.length !== 0) {
      return (
        <section>
          <p>
            Jugador 1:{" "}
            <img
              src={"img/" + elementos[lasManos[0]]}
              width="32"
              height="32"
              alt="player1"
            />
          </p>
          <p>
            Computadora:{" "}
            <img
              src={"img/" + elementos[lasManos[1]]}
              width="32"
              height="32"
              alt="computer"
            />
          </p>
          <p>{mensajeGanador}</p>
        </section>
      );
    } else {
      return null;
    }
  };
  return (
    <div id="container">
      <ul id="elegir">
        {elementos.map((el, i) => (
          <li key={i} data-id={i} onClick={jugar}>
            {" "}
            <img src={"img/" + el} alt="" />
          </li>
        ))}
      </ul>
      {<Resultado />}
    </div>
  );
};

ReactDOM.render(<PiedraPapelTijeras />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
