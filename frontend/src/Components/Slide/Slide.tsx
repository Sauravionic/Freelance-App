import "./Slide.scss";
import Slider  from 'infinite-react-carousel'

const Slide = ({children, slidesToShow, arrowsScroll, centerMode, swipe}) => {
  return (
    <div className="slide">
        <div className="container">
            <Slider slidesToShow = {slidesToShow} arrowsScroll = {arrowsScroll} centerMode = {centerMode} swipe= {swipe}>
                {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slide