"use client";

import { useEffect, useState } from "react";
import { ASSET } from "./data";

const WORDS = ["Autónomos", "Pymes", "Emprendedores"];
const TYPE_MS = 150;
const HOLD_MS = 2500;
const SELECT_MS = 500;

type Phase = "typing" | "hold" | "selected";

/* Animated "type" heading: each word types in letter by letter, holds, is selected, then cleared. */
function useTypedWord() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const word = WORDS[index];

  useEffect(() => {
    let t: number;
    if (phase === "typing") {
      t = window.setTimeout(
        () => (count < word.length ? setCount(count + 1) : setPhase("hold")),
        count < word.length ? TYPE_MS : 0,
      );
    } else if (phase === "hold") {
      t = window.setTimeout(() => setPhase("selected"), HOLD_MS);
    } else {
      t = window.setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setCount(0);
        setPhase("typing");
      }, SELECT_MS);
    }
    return () => window.clearTimeout(t);
  }, [phase, count, word.length]);

  return { text: word.slice(0, count), selected: phase === "selected", word };
}

/* Shared inner-page banner: leafy facade photo, white veil, logo, typed heading and wave divider. */
export function PageHero() {
  const { text, selected, word } = useTypedWord();
  return (
    <section className="bx-pagehero" style={{ backgroundImage: `url(${ASSET}/sin-titulo-2.jpg)` }}>
      <div className="bx-pagehero-overlay" />
      <div className="bx-pagehero-shape" aria-hidden="true">
        <svg viewBox="0 0 1000 99" preserveAspectRatio="none">
          <path d="M768.06,59.54C687,48.21,607.41,28.42,526.35,17.15,347.45-7.73,155.24,13.87.07,99H1000V68.11A1149.19,1149.19,0,0,1,768.06,59.54Z" />
        </svg>
      </div>
      <div className="bx-container bx-pagehero-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bx-pagehero-logo"
          src={`${ASSET}/sin-titulo-4-1-1.png`}
          alt="Braut Asesores"
          width={644}
          height={214}
        />
        <h2 className="bx-pagehero-title" aria-label={`Asesoría para ${word} online`}>
          <span className="bx-pagehero-before" aria-hidden="true">
            Asesoría para
          </span>
          <span className={`bx-pagehero-word${selected ? " is-selected" : ""}`} aria-hidden="true">
            {text}
          </span>
          <span className="bx-pagehero-after" aria-hidden="true">
            ONLINE
          </span>
        </h2>
        <h2 className="bx-pagehero-sub">BRAUT Asesores</h2>
      </div>
    </section>
  );
}
