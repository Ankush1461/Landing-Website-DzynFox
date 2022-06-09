import style from "./style.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperSlider } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Clients() {
  return (
    <div className={style.clients} id="clients">
      <div className={style.clients_section}>
        <div className="">
          <h1>
            Customer Say&apos;s
            <br />
            About <u>DzynFox</u>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            unde perspiciatis eaque ab accusantium quo! Enim non suscipit dolor,
            aperiam qui eum, mollitia odio esse sit eius eos, doloribus aliquam?
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className={style.mySwiper}
          >
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>&#8216;&#8217;</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque maiores possimus quod explicabo. Expedita praesentium,
                  molestias alias voluptatum ratione harum!
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <Image
                    src="/images/avatar-1.png"
                    height={100}
                    width={100}
                    style={{ borderRadius: "100%" }}
                    alt=""
                  />
                </div>
                <p>ABC- Founder</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={style.swiper_slide}>
              <div className={style.client_says}>
                <h1>&#8216;&#8217;</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque maiores possimus quod explicabo. Expedita praesentium,
                  molestias alias voluptatum ratione harum!
                </p>
              </div>
              <div className={style.avatar}>
                <div className={style.imageAvatar}>
                  <Image
                    src="/images/avatar-2.png"
                    height={100}
                    width={100}
                    style={{ borderRadius: "100%" }}
                    alt=""
                  />
                </div>
                <p>XYZ- CEO</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
