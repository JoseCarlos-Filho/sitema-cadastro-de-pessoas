import styles from "./Card.module.scss";
import takeNoteIcon from "pages/Inicio/Card/assets/icons/takeNote-icon.svg";
import trashIcon from "pages/Inicio/Card/assets/icons/trash-icon.svg";
import { dateTools } from "utils/date-tools";

export type Tprops  = {
    id: number;
    name: string;
    email: string;
    bDay: Date;
    handleUpdate: (event: React.MouseEvent)=> void;
    handleDelete: (event: React.MouseEvent)=> void;
};


export default function Card({id, name, email, bDay, handleUpdate, handleDelete}:Tprops ) {


    return (
        <div className={styles.infoCard} id={id.toString()}>
            <h2 className={styles.infoCard__personName}>{name}</h2>
            <p className={styles.infoCard__personEmail}>{email}</p>
            <p className={styles.infoCard__personBDay}>{dateTools.formatDateDMY(bDay)}</p> 
            <span className={styles.infoCard__btnUpdate} id="takeNoteiteButton" role="button" onClick={handleUpdate}><img src={takeNoteIcon} alt="icone bloco de anotações" /></span>
            <span className={styles.infoCard__btnDelete} id="trashButton" role="button" onClick={handleDelete}><img src={trashIcon} alt="icone lixeira" /></span>
        </div>
    );
};
