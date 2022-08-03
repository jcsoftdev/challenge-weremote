import React from "react"

import data from "./data.json"
import Card, { Card as CardInterface } from "~/components/News/Card"

const News = () => {
  const cardsMemo = React.useMemo(() => data, [data])
  return (
    <div className="ui-wrapper">
      <section className="news">
        <h2 className="news__title">Entérate de todo</h2>
        <div className="news__content">
          {cardsMemo.map((card: CardInterface) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
        <div className="btn-container">
          <button className="news__button-more">Cargar más</button>
        </div>
      </section>
    </div>
  )
}

export default News
