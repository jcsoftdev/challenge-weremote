export interface Card {
  category: string
  title: string
  description: string
  image: string
}
const Card = ({ category, title, description, image }: Card) => {
  return (
    <article className="card">
      <figure className="card__image">
        <img src={`${image}`} alt="card" />
      </figure>
      <div className="card__content">
        <p className="card__category">{category}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </article>
  )
}

export default Card
