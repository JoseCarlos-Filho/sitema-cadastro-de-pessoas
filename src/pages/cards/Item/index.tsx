import styles from "./Item.module.scss";
import takeNoteIcon from "pages/cards/assets/icons/takeNote-icon.svg";
import trashIcon from "pages/cards/assets/icons/trash-icon.svg";

export type Tprops  = {
    id: number;
    name: string;
    email: string;
    bDay: Date;
    handleClick: (event: React.MouseEvent)=> void;
};


export default function Item({id, name, email, bDay, handleClick}:Tprops ) {

    return (
        <div className={styles.infoCard} id={id.toString()}>
            <h2 className={styles.infoCard__personName}>{name}</h2>
            <p className={styles.infoCard__personEmail}>{email}</p>
            <p className={styles.infoCard__personBDay}>{bDay.toString()}</p> 
            <span className={styles.infoCard__btnUpdate} id="takeNoteButton" role="button" onClick={handleClick}><img src={takeNoteIcon} alt="icone bloco de anotações" /></span>
            <span className={styles.infoCard__btnDelete} id="trashButton" role="button" onClick={handleClick}><img src={trashIcon} alt="icone lixeira" /></span>
        </div>
    );
};
