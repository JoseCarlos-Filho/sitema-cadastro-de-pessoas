import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import iconBtnHambuguer from "./icon-btn-hambuguer.svg";
import classNames from "classnames";

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [screenWidth, SetscreenWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      SetscreenWidth(window.innerWidth);
      if (window.innerWidth > 768) setIsActive(true);
      else setIsActive(false);
    });
  }, []);

  return (
    <header className={styles.header}>
      <button
        className={classNames(
          screenWidth < 768
            ? { [styles.btnHambuguer]: true }
            : { [styles.isHide]: true }
        )}
        onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
      >
        <img
          className={styles.btnHambuguer__img}
          src={iconBtnHambuguer}
          alt="ícone hambuguer"
        />
      </button>
      <nav
        id="nav"
        className={classNames(
          isActive ? { [styles.nav]: true } : { [styles.isHide]: true }
        )}
      >
        <Link className={styles.nav__linkInicio} to="/">
          Início
        </Link>
        <ul className={styles.nav__ul}>
          <li>
            <Link className={styles.nav__ul__links} to="/cadastro">
              Cadastrar
            </Link>
          </li>
          <li>
            <Link className={styles.nav__ul__links} to="#">
              Sobre
            </Link>
          </li>
          <li>
            <Link className={styles.nav__ul__links} to="#">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
