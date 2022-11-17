import React from "react"
import { Link } from "gatsby"
const HartaSite = () => {
  return (
    <main className="container">
      <h1>Hartă Site</h1>
      <p>Navigare rapidă</p>
      <ul>
        <li>
          Primărie
          <ul>
            <li>
              <Link to="/primarie/cetateni">Cetățeni</Link>
            </li>
            <li>
              <Link to="/primarie/conducere">Conducere</Link>
            </li>
            <li>
              <Link to="/primarie/structura">Structura</Link>
            </li>
            <li>
              <Link to="/primarie/organigrama">Organigrama</Link>
            </li>
            <li>
              <Link to="/primarie/proiecte">Proiecte</Link>
            </li>
            <li>
              <Link to="/primarie/registru">Registru Agricol</Link>
            </li>
            <li>
              Servicii Publice
              <ul>
                <li>
                  <Link to="/primarie/servicii-publice/asistenta-sociala">
                    Asistență Socială
                  </Link>
                </li>
                <li>
                  <Link to="/primarie/servicii-publice/urbanism">Urbanism</Link>
                </li>
                <li>
                  <Link to="/primarie/servicii-publice/taxe-impozite">
                    Taxe si Impozite
                  </Link>
                </li>
                <li>
                  <Link to="/primarie/servicii-publice/svsu">S.V.S.U</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/primarie/stare-civila">Starea civilă</Link>
            </li>
          </ul>
        </li>
        <li>
          Primar
          <ul>
            <li>
              <Link to="/primar/atributii">Atribuții</Link>
            </li>
            {/* <li>
              <Link to="/primar/biografie">Biografie</Link>
            </li>
            <li>
              <Link to="/primar/curriculum-vitae">Curriculum Vitae</Link>
            </li> */}
            <li>
              <Link to="/primar/dispozitii">Dispozițiile Primarului</Link>
            </li>
            <li>
              <Link to="/primar/mesajul-primarului">Mesajul Primarului</Link>
            </li>
          </ul>
        </li>
        <li>
          Despre Comună
          <ul>
            <li>
              <Link to="/despre-comuna/atributii">Prezentare</Link>
            </li>
            <li>
              <Link to="/despre-comuna/context-istoric">Context Istoric</Link>
            </li>
            <li>
              <Link to="/despre-comuna/eroii-comunei">Eroii Comunei</Link>
            </li>
            <li>
              <Link to="/despre-comuna/institutii">Instituții</Link>
            </li>
            <li>
              <Link to="/despre-comuna/adrese-utile">Adrese Utile</Link>
            </li>
            <li>
              <Link to="/despre-comuna/evenimente">Evenimente</Link>
            </li>
          </ul>
        </li>
        <li>
          Consiliul Local
          <ul>
            <li>
              <Link to="/consiliul-local/atributii">Atribuții</Link>
            </li>
            <li>
              <Link to="/consiliul-local/componenta">Componența</Link>
            </li>
            <li>
              <Link to="/consiliul-local/hotarari">Hotărâri</Link>
            </li>
            <li>
              <Link to="/consiliul-local/declaratii-de-avere">
                Declarații de Avere
              </Link>
            </li>
            <li>
              <Link to="/consiliul-local/declaratii-de-interese">
                Declarații de Interese
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Informații
          <ul>
            <li>
              <Link to="/informatii/acte-necesare">Acte Necesare</Link>
            </li>
            <li>
              <Link to="/informatii/angajari">Angajări</Link>
            </li>
            <li>
              <Link to="/informatii/anunturi">Anunțuri Publice</Link>
            </li>
            <li>
              <Link to="/informatii/buget">Buget si Execuție Bugetară</Link>
            </li>
            <li>
              <Link to="/informatii/formulare">Formulare Online</Link>
            </li>
          </ul>
        </li>
        <li>
          Servicii Online
          <ul>
            <li>
              <Link to="/plata-online">Plătește Online</Link>
            </li>
            <li>
              <a
                href="https://florestistoenesti.regista.ro/formulare"
                target="_blank"
                rel="noreferrer"
              >
                Formulare Online
              </a>
            </li>
            <li>
              <a
                href="https://florestistoenesti.regista.ro/sesizari"
                target="_blank"
                rel="noreferrer"
              >
                Sesizări Online
              </a>
            </li>
            <li>
              <a
                href="https://florestistoenesti.regista.ro/"
                target="_blank"
                rel="noreferrer"
              >
                Verificare Cereri
              </a>
            </li>
            <li>
              <a href="https://florestistoenesti.regista.ro/monitorul-oficial-local">
                MOL Regista
              </a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/mol">MOL</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a
            href="https://www.ghiseul.ro/ghiseul/public/"
            target="_blank"
            rel="noreferrer"
          >
            Ghișeul.ro
          </a>
        </li>
      </ul>
    </main>
  )
}

export default HartaSite
