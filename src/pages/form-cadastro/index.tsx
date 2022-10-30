import styles from "./FormCasdastro.module.scss";

export default function FormCasdastro() {
    return (
        <dialog className={styles.modal}>
            <form method="dialog" className={styles.formCad}>
                <label htmlFor="formCadInpName" className={styles.formCad__lbls}>Nome</label>
                <input type="text" name="name" id="formCadInpName" className={styles.formCad__inpt}  />

                <label htmlFor="formCadInpEmail" className={styles.formCad__lbls}>E-mail</label>
                <input type="email" name="email" id="formCadInpEmail" className={styles.formCad__inpt} />

                <label htmlFor="formCadInpBDate" className={styles.formCad__lbls}>Data de Nascimento</label>
                <input type="date" name="bDate" id="formCadInpBDate" className={styles.formCad__inpt} />   

                <button className={styles.formCad__btnCadastrar} name="btnCadastrar">CADASTRAR</button>
            </form>
        </dialog>
    );
}
