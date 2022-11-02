import styles from "./FormUpdate.module.scss";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import { dateTools } from "utils/date-tools";
import { useEffect, useState } from "react";


export default function FormUpdate({id, name, email, bDay}:IPesssoasDados) {
    const [personName, SetPersonName] = useState<string>();
    const [personEmail, SetEmail] = useState<string>();
    const [personBDay, SetBDay] = useState<string>();
    const [Unmount, SetUnmount] = useState<boolean>(false);

    useEffect(() => {
        SetPersonName(name);
        SetEmail(email);
        SetBDay(dateTools.formatDateYMD(bDay));
    }, []);

    const handleChangeName = (e: any) => SetPersonName(e.target.value);
    const handleChangeEmail = (e: any) => SetEmail(e.target.value);
    const handleChangeBDay = (e: any) => SetBDay(e.target.value);
    const handleSubmit = (envent: any) => {
        envent.preventDefault();
        const update = {
            id: id,
            name: personName,
            email: personEmail,
            bDay: new Date(personBDay!),
        };

        PessoasDados.updatePersonById(id, update);

        setTimeout( ()=> window.location.reload(), 300)
    };

    useEffect(()=> {<> </> }, [!Unmount]);

    const handleCancel = (e: any) => {
        SetUnmount(true)
        window.location.reload();
    };
    
    return (
    <section id={id.toString()} className={styles.update}>
         {!Unmount && (
              <>
            <form className={styles.formCad} onSubmit={handleSubmit}>
                <label htmlFor="formCadInpName" className={styles.formCad__lbls}>Nome</label>
                <input type="text" name="name"  id="formCadInpName" value={(personName)} className={styles.formCad__inpt} onChange={handleChangeName}  required/>

                <label htmlFor="formCadInpEmail" className={styles.formCad__lbls}>E-mail</label>
                <input type="email" name="email" id="formCadInpEmail" value={personEmail} className={styles.formCad__inpt} onChange={handleChangeEmail} required/>

                <label htmlFor="formCadInpBDate" className={styles.formCad__lbls}>Data de Nascimento</label>
                <input type="date" name="bDay" id="formCadInpBDate" value={personBDay} className={styles.formCad__inpt} onChange={handleChangeBDay} required/>   

                <input type="submit" value="ATUALIZAR" className={styles.formCad__btnCadastrar} name="btnCadastrar" />
                <button className={styles.formCad__btnCadastrar} name="btnCancelar" onClick={handleCancel}>CANCELAR</button>
            </form>
         </>
         )
         }
    </section>
    )
}

