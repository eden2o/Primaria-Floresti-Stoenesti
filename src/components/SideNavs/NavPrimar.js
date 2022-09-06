import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/section.module.css"
import NavHeader from "./NavHeader"
export default function NavPrimar() {
  return (
    <>
      <NavHeader />
      <nav className={styles.nav}>
        <ul className={styles.nav}>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primar/atributii"
            >
              Atribuții
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primar/biografie"
            >
              Biografie
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primar/curriculum-vitae"
            >
              Curriculum Vitae
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primar/dispozitii"
            >
              Dispoziții
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              activeClassName="active"
              to="/primar/mesajul-primarului"
            >
              Mesajul Primarului
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
