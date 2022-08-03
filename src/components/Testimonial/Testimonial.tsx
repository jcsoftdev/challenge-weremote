import quote from "~/assets/quote.svg"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="ui-wrapper">
        <div className="quote-simbol">
          <img src={quote} alt="quote" />
        </div>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl nisi
                aliquam nisi, euismod euismod nisi velit euismod.
              </p>
              <p className="testimonial-author">
                ~ <span>John Doe</span> ~
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi vel consectetur interdum, nisl nisi
                aliquam nisi, euismod euismod nisi velit euismod.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-author-name">
                  <span>John Doe</span>
                  <span>CEO, Company</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonial
