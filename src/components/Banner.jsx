"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Banner() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600",
      title: "Find Trusted Academic Tutors Across Bangladesh",
      subtitle: "Connect with top-rated educators from DU, BUET, and DMC for personalized, face-to-face or online learning experience.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
      title: "Interactive Online Classes, Anytime, Anywhere",
      subtitle: "Master complex topics in Calculus, Physics, and Organic Chemistry with visuals, real-world examples, and expert guidance.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600",
      title: "Excel in Your Board & College Admission Exams",
      subtitle: "Tailored preparation tracks for JSC, SSC, HSC, and University Admission Tests to unleash your full academic potential.",
    },
  ];

  return (
    <div className="relative w-full h-[550px] md:h-[620px] bg-slate-900 group">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        //   el: ".custom-swiper-pagination",
        // }}
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-slate-900/65 backdrop-brightness-75" />

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center md:text-left">
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
                    {slide.subtitle}
                  </p>
                  
                  {/* Call to Action Button */}
                  <div className="pt-4">
                    <Link href="/tutors">
                      <Button className="bg-gradient-to-r from-[#0070c9] to-[#00b4d8] text-white font-bold text-base rounded-full px-8 py-6 shadow-xl shadow-blue-500/20 transition-transform duration-200 hover:scale-105 active:scale-95">
                        Explore Tutors
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrow Navigation Controls */}
      <button className="custom-swiper-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hidden md:block opacity-0 group-hover:opacity-100 disabled:opacity-30">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button className="custom-swiper-next absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all hidden md:block opacity-0 group-hover:opacity-100 disabled:opacity-30">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Custom Global Swiper Pagination Dots Element */}
      <div className="custom-swiper-pagination absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-2" />

      {/* Custom Global Style Injection for Custom Dots */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          height: 8px !important;
          width: 8px !important;
          border-radius: 9999px !important;
          transition: all 0.3s ease !important;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #00b4d8 !important;
          width: 32px !important;
        }
      `}</style>
    </div>
  );
}