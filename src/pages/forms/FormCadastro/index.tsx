import styles from "./FormCasdastro.module.scss";
import { useForm, SubmitHandler  } from "react-hook-form";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import { useNavigate } from "react-router-dom";
 

type Inputs = {
    name: string,
    email: string,
    bDay: Date,
  };

export default function FormCasdastro() {
    const navigate = useNavigate();
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        let newPerson: IPesssoasDados; 
        newPerson = {
            id: parseInt((Math.random() * (100 - 6) + 6).toString()), /* verificar se o id está duplicado*/
            name: data.name,
            email: data.email,
            bDay: data.bDay,
        };
         /* Post */ 
        PessoasDados.createPerson(newPerson).then((result) => {
            if (result instanceof Error) {
                alert(result.message);
                return;
            }
        });

        console.log(JSON.stringify(data));
        navigate('/home');
    };

     return (
        <dialog className={styles.modal} open>
            <form method="dialog"  className={styles.formCad} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="formCadInpName" className={styles.formCad__lbls}>Nome</label>
                <input type="text"  {...register("name")}  id="formCadInpName" className={styles.formCad__inpt}  />

                <label htmlFor="formCadInpEmail" className={styles.formCad__lbls}>E-mail</label>
                <input type="email" {...register("email")} name="email" id="formCadInpEmail" className={styles.formCad__inpt} />

                <label htmlFor="formCadInpBDate" className={styles.formCad__lbls}>Data de Nascimento</label>
                <input type="date" {...register("bDay")} name="bDay" id="formCadInpBDate" className={styles.formCad__inpt} />   

                <button className={styles.formCad__btnCadastrar} name="btnCadastrar">CADASTRAR</button>
            </form>
        </dialog>
    );
}
