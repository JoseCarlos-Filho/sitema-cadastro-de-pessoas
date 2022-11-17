import FormUpdate from "pages/forms/FormUpdate";
import Card from "pages/Inicio/Card";
import { useEffect, useState } from "react";
import {
  IPesssoasDados,
  PessoasDados,
} from "services/api/pessoas/PessoasDados";
import styles from "./Inicio.module.scss";

export default function Inicio() {
  const [apiData, setApiData] = useState<IPesssoasDados[]>([]);
  const [render, setRender] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [unmount, setUnmount] = useState<boolean>(false);

  const [update, setupdate] = useState<IPesssoasDados>();

  useEffect(() => {
    /* pega os dados da API para montar os cards */
    setTimeout(() => {
      PessoasDados.getAllPersons().then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          setApiData(result.data);
          setRender(false);
          setLoading(false);
          return;
        }
      });
    }, 500);
  }, [render]); // renderiza a tela de acordo com o state render

  /* deleta o registro a partir do evento de click no "botão lixeira" */
  function deletePerson(id: string): void {
    PessoasDados.deletePersonById(parseInt(id)).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      } else setRender(true);
    });
  }

  useEffect(() => {
    <> </>;
  }, [!unmount]);

  function personData(e: any) {
    const idElemento = parseInt(e!.currentTarget.parentElement!.id);
    const found = apiData.find(({ id }) => id === idElemento);

    setupdate({
      id: found!.id,
      name: found!.name,
      email: found!.email,
      bDay: found!.bDay,
    });
  }

  return (
    <div className={styles.container}>
      {!unmount ? (
        <>
          {apiData.map(({ id, name, email, bDay }): JSX.Element => {
            return (
              <Card
                key={id}
                id={id}
                name={name}
                email={email}
                bDay={bDay}
                handleDelete={(e) =>
                  deletePerson(e.currentTarget.parentElement!.id)
                }
                handleUpdate={(e) => {
                  personData(e);
                  setUnmount(true);
                }}
              />
            );
          })}
        </>
      ) : null}

      {update ? (
        <>
          {
            <FormUpdate
              id={update.id}
              name={update.name}
              email={update.email}
              bDay={update.bDay}
            />
          }
        </>
      ) : null}
      {loading ? <div className={styles.loader}></div> : null}
    </div>
  );
}
