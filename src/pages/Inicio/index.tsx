import Item from "pages/cards/Item";
import { useEffect, useState } from "react";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import styles from "./Inicio.module.scss";


export default function Inicio() {
    const [registros, setRegistros] = useState<IPesssoasDados[]>([]);

    useEffect(() => {

        /* pega os dados da API para montar os cards */
        PessoasDados.getAllPersons().then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            } else {
                setRegistros(result.data);
                return;
            }
        });
    }, []);

    console.dir(registros);
    return (
        <div className={styles.container}>
            {
            registros.map(
                ({ id, name, email, bDay }): JSX.Element => {
                return (
                    <Item
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        bDay={bDay}
                        handleClick={() => console.log("ok")}
                    />
                );
            })}
        </div>
    );
}
