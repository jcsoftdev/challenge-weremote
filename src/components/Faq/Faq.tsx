import React from "react"
import Accordion from "~/components/Faq/Accordion"
import faqImage from "~/assets/faq.jpg"
const faqs = [
  {
    title: "What is a coronavirus?",
    content:
      "Coronaviruses are a large family of viruses which may cause illness in animals or humans.  In humans, several coronaviruses are known to cause respiratory infections ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). The most recently discovered coronavirus is the new coronavirus.",
  },
  {
    title: "What is COVID-19?",
    content:
      "COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019. COVID-19 is now a pandemic affecting many countries globally. Because of this, much of the world will require additional monitoring and protection. Because COVID-19 is a new virus, there is no existing vaccine to prevent or cure it. WHO does not recommend anyone who has traveled to an area with COVID-19 to stay at home.",
  },
  {
    title: "How does COVID-19 spread?",
    content:
      "People can catch COVID-19 from others who have the virus. The disease can spread from person to person through small droplets from the nose or mouth which are spread when a person with COVID-19 coughs or exhales. These droplets land on objects and surfaces around the person. Other people then catch COVID-19 by touching these objects or surfaces, then touching their eyes, nose or mouth. People can also catch COVID-19 if they breathe in droplets from a person with COVID-19 who coughs or exhales. This is why it is important to stay more than 1 meter (3 feet) away from a person who is sick. \nDroplets can land on top of objects and surfaces that people can touch. Once contaminated, the droplets can be breathed in, which can lead to the person becoming sick. \nThe following is a list of some of the ways that COVID-19 is spread:",
  },
]

const Faq = () => {
  return (
    <div className="ui-wrapper">
      <div className="faq">
        <div className="faq__content">
          <h3 className="faq__title">FAQ</h3>

          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
        <figure className="faq__figure">
          <img src={`${faqImage}`} alt="faq" />
        </figure>
      </div>
    </div>
  )
}

export default Faq
