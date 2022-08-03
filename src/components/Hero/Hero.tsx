import React, { useEffect } from "react"
import HeroItem from "~/components/Hero/HeroItem"

import heroImage1 from "~/assets/hero-1.jpg"
import heroImage2 from "~/assets/hero-2.jpg"
import heroImage3 from "~/assets/hero-3.jpg"

const slides = [
  {
    id: 1,
    imageUrl: heroImage1,
    title: "Lorem ipsum dolor ",
    description:
      "Lorem ipsum dolor sihwecuicbwiu;bm doloribus architecto similique, debitis sapiente, numquam adipisci id, dolor possimus qui!",
    subtitle: "Quiero ser mamá",
  },
  {
    id: 2,
    imageUrl: heroImage2,
    title: "Su viaje de salud emocional empieza aqui",
    description:
      "Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.",
    subtitle: "Conoce nuestro profesionales con licencia ",
  },
  {
    id: 3,
    imageUrl: heroImage3,
    title: "Juntos por algo mejor en esta vida",
    description:
      "Todos se someten a un proceso seguro de verificación y acreditación, además de adherirse a estrictos códigos de ética y confidencialidad.",
    subtitle: "Quiero ser mamá",
  },
]

const Hero = () => {
  const [activeSlide, setActiveSlide] = React.useState(0)
  const isFirtRenderForPrevious = React.useRef(true)
  const isFirtRenderForActive = React.useRef(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlide])

  const checkIsPrevious = (index: number) => {
    if (isFirtRenderForPrevious.current && index === slides.length - 1) {
      isFirtRenderForPrevious.current = false
      return false
    }
    const prev = activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    return index === prev
  }

  const checkIsActive = (index: number) => {
    if (isFirtRenderForActive.current && index === 0) {
      isFirtRenderForActive.current = false
      return false
    }
    return index === activeSlide
  }

  return (
    <div className="hero__container">
      {slides.map((slide, index) => (
        <HeroItem
          key={slide.id}
          imageUrl={slide.imageUrl}
          title={slide.title}
          description={slide.description}
          subtitle={slide.subtitle}
          isActive={checkIsActive(index)}
          isPrevious={checkIsPrevious(index)}
        />
      ))}
    </div>
  )
}

export default Hero
