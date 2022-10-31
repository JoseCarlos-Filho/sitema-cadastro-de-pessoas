import styles from "./FormCasdastro.module.scss";
import { useForm, SubmitHandler  } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    bDay: Date,
  };

export default function FormCasdastro() {
    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data =>{
    
         console.log(JSON.stringify(data))
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
