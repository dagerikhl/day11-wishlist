import React, { useContext } from "react";

import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { Loader } from "../../components/Loader/Loader";
import { Pool } from "../../components/Pool/Pool";
import { WishItem } from "../../components/WishItem/WishItem";
import { Personalization } from "../../contexts/Personalization";
import { useApi } from "../../hooks/useApi";
import { Wish } from "../../interfaces/Wish";

import styles from "./App.module.css";

export const App = () => {
  const { strings } = useContext(Personalization);

  // TODO Implement and get this from a real back-end database
  const { error, isLoading, response: wishes } = useApi<Wish[]>(
    "/dummy-data.json"
  );

  return (
    <section>
      <header className={styles.header}>
        <h1>
          <i className="bx bxs-heart" /> {strings.title}
        </h1>
      </header>

      <main className={styles.main}>
        <div className={styles.description}>
          <p>{strings.lead[1]}</p>
          <p>{strings.lead[2]}</p>
          <p>{strings.lead[3]}</p>
        </div>

        <Pool>
          {error && <ErrorMessage error={error} />}
          {isLoading && <Loader />}

          {wishes &&
            wishes
              .filter((wish) => !wish.aquired)
              .map((wish) => <WishItem key={wish.title} wish={wish} />)}
        </Pool>

        <Pool label={strings["aquired-pool"].title}>
          {error && <ErrorMessage error={error} />}
          {isLoading && <Loader />}

          {wishes &&
            wishes
              .filter((wish) => wish.aquired)
              .map((wish) => <WishItem key={wish.title} wish={wish} />)}
        </Pool>
      </main>

      <footer className={styles.footer}>
        <i className="bx bx-copyright" />
        &nbsp;{strings.author} - 2020
      </footer>
    </section>
  );
};
