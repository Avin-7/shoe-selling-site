import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import CarouselImage2 from "./CarouselImage2";
import CarouselImage3 from "./CarouselImage3";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage />
        <Carousel.Caption className="text-black font-semibold text-lg">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <CarouselImage2 text="Second slide" />
        <Carousel.Caption className="text-lg font-semibold">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage3 text="Third slide" />
        <Carousel.Caption className="text-black text-lg font-semibold">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
