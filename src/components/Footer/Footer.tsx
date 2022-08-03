import footerImage from "~/assets/logo.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="ui-wrapper">
        <div className="footer__top">
          <div className="footer__image">
            <img src={footerImage} alt="footer" />
          </div>
          <p className="footer__terms">
            La Mente es Maravillosa is a property of Grupo MContigo © 2012 –
            2020. All rights reserved. Los contenidos de esta publicación se
            redactan solo con fines informativos. En ningún momento pueden
            servir para facilitar diagnósticos o sustituir la labor de un
            profesional. Le recomendamos que contacte con su especialista de
            confianza.
          </p>
        </div>
        <hr />
        <ul className="footer__links">
          <li>
            <a href="#">Política de Cookies</a>
          </li>
          <li>
            <a href="#">Política de Privacidad</a>
          </li>
          <li>
            <a href="#">Términos y condiciones de uso</a>
          </li>
          <li>
            <a href="#">Cláusula Informativa de Consentimiento</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
