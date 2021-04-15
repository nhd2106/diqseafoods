import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import styles from "./Carousel.module.scss";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Carousel() {
  return (
    <>
      <AutoplaySlider
        className={styles.carouselCover}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      >
        <div data-src="/slides_1.jpg" className={styles.imageCarousel} />
        <div data-src="/slides_2.jpg" className={styles.imageCarousel} />
        <div data-src="/slides_3.jpg" className={styles.imageCarousel} />
      </AutoplaySlider>
    </>
  );
}

export default Carousel;
