import { Banner } from "../../assets/images";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import ProductCard from "../../components/product/ProductCard";
import { productsSale } from "../../utils/fakeData";

const PromoBanner = () => {
  return (
    <div className="container mx-auto">
      <div className="relative">
        <img src={Banner} alt="Banner" className="w-full h-auto shadow-lg" />
      </div>

      <div className="w-full bg-[#025FCA] p-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {productsSale.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PromoBanner;
