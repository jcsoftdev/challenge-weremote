import Faq from "~/components/Faq"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import Hero from "~/components/Hero"
import News from "~/components/News"
import NewsLetter from "~/components/NewsLetter"
import Testimonial from "~/components/Testimonial"

import "~/scss/App.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <News />
      <Testimonial />
      <Faq />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default App
