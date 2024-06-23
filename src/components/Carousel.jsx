import React from "react";
import { Carousel } from "antd";

const carouselComponent = () => (
  <Carousel className=" h-60  md:h-96 " autoplay autoplaySpeed={3000}>
    <div className="">
      <img
        src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-12052024-MainBannerDailyChanging-Z1-P4-Puma-Reebok-min50-extra750.jpg"
        alt="image"
        className="h-60 w-full object-cover md:h-96  "
      />
    </div>
    <div>
      <img
        src="https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/7641320240504121234.jpg?format=webp&w=1366&dpr=1.0"
        alt="image"
        className="h-60 w-full object-cover md:h-96  "
      />
    </div>
    <div>
      <img
        src="https://images.bewakoof.com/uploads/category/desktop/Soulful-Casual-shoes_Desktop-Inside-banner-1712037249.jpg"
        alt="image"
        className="h-60 w-full object-cover md:h-96  "
      />
    </div>
  </Carousel>
);
export default carouselComponent;
