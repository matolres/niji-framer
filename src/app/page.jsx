"use client"

import styles from "./page.module.scss";
import Index from "./components/sticky_cursor";
import { useRef } from "react";
import Header from "./components/header";

export default function Home() {
  const stickyElement = useRef(null)
  return (
    <>
    
      <Header ref={stickyElement} />
      <Index stickyElement={stickyElement}/>
    <div className={styles.hero_container}>
      <video className={styles.hero} src="/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
      ></video>
    </div>
    <main className={styles.main}>
      <h1 className={styles.title}>Niji</h1>
      <button>hello</button>
      <p className={styles.text}>
      The Home and End keys are usually located on the top-right section of a standard keyboard, often near the Insert, Delete, Page Up, and Page Down keys.

On smaller or laptop keyboards, these keys might be combined with function keys (F1-F12) and could require pressing the Fn key to access them. In this case, you might have to use a combination like Fn + Left Arrow (for Home) or Fn + Right Arrow (for End).
      </p>

    </main>
    </>
  );
}
