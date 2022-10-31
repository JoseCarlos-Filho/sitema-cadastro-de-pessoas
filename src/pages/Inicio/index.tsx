import Item from "pages/cards/Item";
import { useEffect, useState } from "react";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import styles from "./Inicio.module.scss";


export default function Inicio() {
    const [apiData, setApiData] = useState<IPesssoasDados[]>([]);
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        /* pega os dados da API para montar os cards */
        PessoasDados.getAllPersons().then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            } else {
                setApiData(result.data);
                setRender(false);
                return;
            }
        });
    }, [render]); // renderiza a tela de acordo com o state render

    /* deleta o registro a partir do evento de click no "botão lixeira"*/
    function deletePerson(id: string): void {
        PessoasDados.deletePersonById(parseInt(id)).then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            } else setRender(true);
        });
    }

    console.dir(apiData);
    return (
        <div className={styles.container}>
            {apiData.map(({ id, name, email, bDay }): JSX.Element => {
                return (
                    <Item
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        bDay={bDay}
                        handleClick={(e) =>
                            deletePerson(e.currentTarget.parentElement!.id)
                        }
                    />
                );
            })}
        </div>
    );
}
