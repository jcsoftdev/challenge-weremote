import imgNewsLetter from "~/assets/newsletter.png"

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="ui-wrapper">
        <div className="newsletter__container">
          <figure className="newsletter__image">
            <img src={imgNewsLetter} alt="" />
          </figure>
          <div className="newsletter__content">
            <h3 className="newsletter__title">Subscribete</h3>
            <p className="newsletter__text">
              Suscríbete a nuestro newsletter y mantente <br />
              actualizado.
            </p>
            <form className="newsletter__form">
              <div className="newsletter__input-container">
                <input type="email" placeholder="Email" />
                <button className="newsletter__button">Suscribirse</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
