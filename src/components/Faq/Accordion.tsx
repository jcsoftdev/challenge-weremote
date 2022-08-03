import React from "react"
import Collapsible from "react-collapsible"

import up from "~/assets/up.svg"
import down from "~/assets/down.svg"

interface Accordion {
  title:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  content: string
}

const Accordion = ({ title, content }: Accordion) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      trigger={
        <div className="accordion__header">
          <p className="accordion__title">{title}</p>
          <i className="accordion__icon">
            <img src={!isOpen ? down : up} alt="up" />
          </i>
        </div>
      }
      onClosing={() => setIsOpen(false)}
      onOpening={() => setIsOpen(true)}
    >
      <p className="accordion__content">{content}</p>
    </Collapsible>
  )
}

export default Accordion
