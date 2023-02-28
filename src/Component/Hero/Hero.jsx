import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../Subtitle/Subtitle";
import Title from "../Title/Title";
import Subtitle from "../Wrapper/Wrapper";

const one =
  "https://images.pexels.com/photos/3773572/pexels-photo-3773572.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const two =
  "https://images.pexels.com/photos/3773576/pexels-photo-3773576.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const three =
  "https://images.pexels.com/photos/7534547/pexels-photo-7534547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const four =
  "https://images.pexels.com/photos/7147291/pexels-photo-7147291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
export default function BasicSlider() {
  return (
    <HeroSlider
      height={"85vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        // onSliding: (nextSlide) =>
        //   console.debug("onSliding(nextSlide): ", nextSlide),
        // onBeforeSliding: (previousSlide, nextSlide) =>
        //   console.debug(
        //     "onBeforeSliding(previousSlide, nextSlide): ",
        //     previousSlide,
        //     nextSlide
        //   ),
        // onAfterSliding: (nextSlide) =>
        //   console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Subtitle>
            <Title>مثاب اسم له تاريخ</Title>
            اكبر الشركات في تاجير الشقق الفاخره
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="الين حطين"
        background={{
          backgroundImageSrc: one,
        }}
      />

      <Slide
        shouldRenderMask
        label="صفا عرقة"
        background={{
          backgroundImageSrc: two,
        }}
      ></Slide>

      <Slide
        shouldRenderMask
        label="
        نخيل - تركي 1"
        background={{
          backgroundImageSrc: three,
        }}
      />

      <Slide
        shouldRenderMask
        label="بدور حطين"
        background={{
          backgroundImageSrc: four,
        }}
      />
      <MenuNav />
    </HeroSlider>
  );
}
