"use client"; 

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function ConversorMoedas() {
  const [valorReal, setValorReal] = useState("");
  const [moeda, setMoeda] = useState("dolar");
  const [resultado, setResultado] = useState(null);

  const taxasConversao = {
    dolar: 0.20,
    euro: 0.18,
    bitcoin: 0.000003,
  };

  const handleConverter = () => {
    if (valorReal && moeda) {
      const valorConvertido = valorReal * taxasConversao[moeda];
      setResultado(valorConvertido.toFixed(6));
    }
  };

  const handleLimpar = () => {
    setValorReal("");
    setMoeda("dolar");
    setResultado(null);
  };

  return (
    <div className={styles.container}>
      <h1>Conversor de Moedas</h1>

      <div className={styles.form}>
        <label>Valor em Reais (R$): </label>
        <input
          type="number"
          value={valorReal}
          onChange={(e) => setValorReal(e.target.value)}
        />

        <label>Escolha a Moeda: </label>
        <select value={moeda} onChange={(e) => setMoeda(e.target.value)}>
          <option value="dolar">Dólar</option>
          <option value="euro">Euro</option>
          <option value="bitcoin">Bitcoin</option>
        </select>

        <div className={styles.buttons}>
          <button onClick={handleConverter}>Converter</button>
          <button onClick={handleLimpar} className={styles.limpar}>
            Limpar
          </button>
        </div>
      </div>

      {resultado && (
        <div className={styles.resultado}>
          <h2>Resultado:</h2>
          <Image
            src={`/images/${moeda}.png`}
            alt={moeda}
            width={50}
            height={50}
          />
          <p>
            {resultado}{" "}
            {moeda === "bitcoin" ? "BTC" : moeda === "dolar" ? "USD" : "EUR"}
          </p>
        </div>
      )}
    </div>
  );
}
