import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useEffect, useRef } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const slides = [
    {
      id: 1,
      images: "/images/meeting3.jpg",
      title: `Kendini tanımak, iyileşmenin ilk adımıdır..`,
    },
    {
      id: 2,
      images: "/images/meeting4.jpg",
      title: "Güvenli, bilimsel ve insancıl psikolojik destek.",
    },
    {
      id: 3,
      images: "/images/meeting2.jpg",
      title: "Profesyonel destekle zihinsel sağlığına önem ver.",
    },
  ];

  useEffect(() => {
    if (instanceRef.current) {
      timer.current = setInterval(() => {
        instanceRef.current?.next();
      }, 4000);
    }

    return () => clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider overflow-hidden rounded-xl">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide relative h-[800px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.images})` }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-10" />

            <div className="absolute bottom-70 left-10 md:left-30 z-20 max-w-3xl text-[#fff3da] p-6 rounded-2xl">
              <h2 className="text-5xl md:text-7xl italic font-normal">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === idx ? "bg-[#fff3da]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
