import CardUpdate from "pages/cards/CardUpdate";
import Item from "pages/cards/Item";
import { useEffect, useState } from "react";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import styles from "./Inicio.module.scss";




export default function Inicio() {
    const [apiData, setApiData] = useState<IPesssoasDados[]>([]);
    const [render, setRender] = useState<boolean>(false);
    const [Unmount, SetUnmount] = useState<boolean>(false);
    const [update, setupdate] = useState<IPesssoasDados>();

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

    /* deleta o registro a partir do evento de click no "botão lixeira" */
    function deletePerson(id: string):void {
        PessoasDados.deletePersonById(parseInt(id)).then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            } else setRender(true);
        });
    }

useEffect(()=> {<> </> }, [!Unmount]);

function personData (e:any){
    const idElemento = parseInt(e!.currentTarget.parentElement!.id)
    const found = apiData.find(({id}) => id === idElemento);  
    
    setupdate({
         id: found!.id,
         name: found!.name,
         email: found!.email,
         bDay: found!.bDay
        });
}

    // console.log(found!.id,found!.name);


    
    
    return (
        <div className={styles.container}>
            {!Unmount && (
                <>
                {apiData.map(({ id, name, email, bDay }): JSX.Element => {
                    return (
                        <Item
                        key={id}
                        id={id}
                        name={name}
                        email={email}
                        bDay={bDay}
                        handleDelete={(e)=> deletePerson(e.currentTarget.parentElement!.id)}    
                        handleUpdate={(e)=> {
                            personData(e)
                            SetUnmount(true);
                        }
                        } 
                            />
                        );
                    })} 
            </>
            )}
                
                {update &&( 
                    <div>{<CardUpdate id={update.id} name={update.name} email={update.email} bDay={update.bDay} />}</div>   )  
                }
        </div>
    )
}
