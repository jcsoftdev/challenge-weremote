import { useState } from "react"

import logo from "~/assets/logo.svg"
import logoMobile from "~/assets/logo-mobile.svg"
import hamburguer from "~/assets/hamburguer.svg"
import close from "~/assets/close.svg"
import search from "~/assets/search.svg"
import arrowRigth from "~/assets/arrow-rigth.svg"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header ui-wrapper">
      <nav className="navbar">
        <button className="navbar__icon" onClick={handleButtonClick}>
          <img src={isOpen ? close : hamburguer} alt="logo" />
        </button>
        <div className={`navbar__menu ${isOpen ? "is-active" : ""}`}>
          <ul className="navbar__list">
            <p className="navbar__list-title">Embarazo</p>
            <li className="navbar__list-item">
              <a href="">
                <span>Quiero ser mamá</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="">
                <span>Voy a ser mamá</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="">
                <span>Parto</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
          </ul>
          <ul className="navbar__list">
            <p className="navbar__list-title">Educación</p>
            <li className="navbar__list-item">
              <a href="">
                <span>Aprende a ser mamá</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="">
                <span>Educación para bebés</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
            <li className="navbar__list-item">
              <a href="">
                <span>Educación para niños</span>{" "}
                <i>
                  <img src={arrowRigth} alt="arrow rigth" />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="logo">
        <img className="logo__mobile" src={logoMobile} alt="logo" />
        <img className="logo__desktop" src={logo} alt="logo" />
      </div>
      <div className="searcher">
        <button>
          <img src={search} alt="search icon" />
        </button>
      </div>
    </header>
  )
}

export default Header
