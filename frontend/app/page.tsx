"use client";
import SplashPage from "@/pages/SplashPage/SplashPage";
import styles from "./page.module.css";
import Nav from "@/components/Nav/Nav";
import FormsPage from "@/pages/FormsPage/FormsPage";
import { createContext, useState } from "react";

const PageContext: any = createContext(null);
export default function Home() {
  const PageState = useState(0);

  return (
    <PageContext.Provider value={PageState}>
      <main className={styles.main}>
        <Nav PageState={PageState} />
        {PageState[0] === 0 ? (
          <SplashPage PageState={PageState} />
        ) : (
          <FormsPage PageState={PageState} />
        )}
      </main>
    </PageContext.Provider>
  );
}
