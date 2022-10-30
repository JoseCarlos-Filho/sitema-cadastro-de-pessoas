import styles from "./Item.module.scss";
import takeNoteIcon from "pages/cards/assets/icons/takeNote-icon.svg";
import trashIcon from "pages/cards/assets/icons/trash-icon.svg";

export default function Item() {
    return (
        <div className={styles.infoCard}>
            <h2 className={styles.infoCard__personName}>Name</h2>
            <p className={styles.infoCard__personEmail}>Loremipsum@email.com</p>
            <p className={styles.infoCard__personBDay}>29/10/2022</p>
            <span className={styles.infoCard__btnUpdate}><img src={takeNoteIcon} alt="icone bloco de anotações" /></span>
            <span className={styles.infoCard__btnDelete}><img src={trashIcon} alt="icone leixeira" /></span>
        </div>
    );
};
