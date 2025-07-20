import React, { useEffect, useRef } from "react";

import Carousel from "../../Components/Carousel/Carousel"; // Adjust path as needed for your file structure
import MoviesCarousel from "../../Components/MoviesCarousel/MoviesCarousel";
import heroImage from "../../assets/hero-image.png";
import slideImg1 from "../../assets/slide-icon-1.svg";
import slideImg2 from "../../assets/slide-icon-2.svg";
import slideImg3 from "../../assets/slide-icon-3.svg";
import slideImg4 from "../../assets/slide-icon-4.svg";
import slideImg5 from "../../assets/slide-icon-5.svg";


import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow ,Keyboard} from "swiper/modules";
// import "swiper/css"
// import "swiper/css/effect-cover-flow";
import "swiper/css";

import icons1 from "../../assets/xd-icon-image.png";
import icons2 from "../../assets/dymand-icon-image.png";
import icons3 from "../../assets/figma-icon-image.png";
import icons4 from "../../assets/illus-icon-image.png";
import icons5 from "../../assets/ps-icon-image.png";

import CountUp from "react-countup";

import mailIcon from "../../assets/Google.png";

function Index() {

  const careerList = [
    { title: "Google Cloud", year: "2025-Present" },
    { title: "Java,React", year: "2024-2025" },
    {title: "C,C++", year: "2023-2024",},
    {title: "HTML,CSS,Javascript",year: "2021-2023",},
  ];

      const tools =[icons1 , icons2 , icons3 , icons4 , icons5 ];

      const tags = [
        " Courses ",
        "Quizzes",
        "Labs",
        "Trivias",
        "Games"
      ];

  return (
    <>
      <span className="bg-elm fixed top-0 left-[20%] h-[100vh] w-[1px] bg-[--thin-border] z-[1]"></span>
      <span className="bg-elm fixed top-0 left-[50%] h-[100vh] w-[1px] bg-[--thin-border] z-[1]"></span>
      <span className="bg-elm fixed top-0 left-[80%] h-[100vh] w-[1px] bg-[--thin-border] z-[1]"></span>
      {/*Hero */}
      <div className="lg:px-[12%] px-[8%] py-[150px] pt-0 hero">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Side */}
          <div className="flex-1 text-white rounded-lg pt-[150px] hero-content">
            <div className="flex flex-col justify-between h-[550px] hero-content-box">
              <div className="flex gap-2 text-x1">
                I'm
                <h2 className="font-semibold text-9xl font-jakarta hero-text">
                  Anmol
                  <span className="text-[--primary-color] font-jakarta hero-sec-text">
                    {" "}
                    Gour.
                  </span>
                </h2>
              </div>

              <div className="hero-bottom-title">
                <h5 className="text-gray-400 text-x1">
                  Feel Free To Contact Me
                </h5>
                <h2 className="mt-1 text-4xl">Example2info.com</h2>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 p-6 text-white rounded-lg hero-image">
            <img src={heroImage} className="w-full h-full hero-img" alt="" />
          </div>
        </div>
      </div>
      {/*Hero marquee*/}
      <div className="marquee-box w-full bg-[--primary-color] py-5">
        <marquee behavior="alternate" direction="">
          <div className="marquee-content flex flex-row gap-[200px]">
            <div className="flex items-center gap-3">
              <img src={slideImg1} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Connectivity</h2>
                <p className="text-md">Collaborat with other</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg2} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Graphic Designing</h2>
                <p className="text-md">To create effectiveness</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg3} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Readability</h2>
                <p className="text-md">Proper spacing & font</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg4} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Pofessional Breanding</h2>
                <p className="text-md">Consistent tone & voice</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg5} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">User-friendliness</h2>
                <p className="text-md">Quick to get into</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg1} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Connectivity</h2>
                <p className="text-md">Collaborat with other</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg2} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Graphic Designing</h2>
                <p className="text-md">To create effectiveness</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg3} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Readability</h2>
                <p className="text-md">Proper spacing & font</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg4} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">Pofessional Breanding</h2>
                <p className="text-md">Consistent tone & voice</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={slideImg5} className="w-20 h-20 invert" alt="" />
              <div>
                <h2 className="text-4xl">User-friendliness</h2>
                <p className="text-md">Quick to get into</p>
              </div>
            </div>
          </div>
        </marquee>
      </div>
      {/*Tilte */}
      <div className="relative text-center w-full py-[80px] pt-0">
        <span className="section-subtitle px-3 py-1 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal mb-6">
          Know Me
        </span>
        <Splide
          options={{
            type: "loop",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }} // ✅ wrap into object
          className="w-full"
          aria-label="Smooth Scrllping Work Slider"
        >
          <SplideSlide>
            <div className="section-title">Work I Do</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Work I Do</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Work I Do</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Work I Do</div>
          </SplideSlide>
        </Splide>
      </div>
      {/* Work */}
      <div className="w-full work lg:px-[12%] px-[8%] pb-[150px] md:pt-[50px] space-y-20">
        <div className="w-full text-center work-content">
          <span className="text-xl text-white md:text-3xl lg:text-4xl xl:text-6xl leading-[30px] sm:leading-[50px] lg:leading-[60px] xl:leading-[80px] font-semibold capitalize text-center">
            Work as entrepreneur to turn ideas into reality by the developing
            products, the design fixes, and the no-code technologies.
          </span>
        </div>
        <div className="grid justify-center w-full grid-cols-1 gap-6 work-wrapper xl:grid-cols-4 item-center xl:gap-0">
          <div className="w-full work-item h-[350px] xxl:h-[300px] rounded-[50%] flex justify-center items-center flex-col border border-[#393939] gap-3 group duration-400">
            <div className="inline-flex items-center justify-center text-6xl font-bold text-white xxl:text-8xl">
              <span className="duration-300 transition-color group-hover:text-[#ec4634]">
                95
              </span>
              <span className="duration-300 transition-color group-hover:text-[#ec4634]">
                +
              </span>
            </div>
            <h5 className="text-lg font-bold text-white xxl:text-xl">
              Project Done
            </h5>
          </div>
          <div className="w-full work-item h-[350px] xxl:h-[300px] rounded-[50%] flex justify-center items-center flex-col border border-[#393939] gap-3 group duration-400">
            <div className="inline-flex items-center justify-center text-6xl font-bold text-white xxl:text-8xl">
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                85
              </span>
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                +
              </span>
            </div>
            <h5 className="text-lg font-bold text-white xxl:text-xl">
              prototyping
            </h5>
          </div>
          <div className="w-full work-item h-[350px] xxl:h-[300px] rounded-[50%] flex justify-center items-center flex-col border border-[#393939] gap-3 group duration-400">
            <div className="inline-flex items-center justify-center text-6xl font-bold text-white xxl:text-8xl">
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                65
              </span>
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                k
              </span>
            </div>
            <h5 className="text-lg font-bold text-white xxl:text-xl">
              Key Asset
            </h5>
          </div>
          <div className="w-full work-item h-[350px] xxl:h-[300px] rounded-[50%] flex justify-center items-center flex-col border border-[#393939] gap-3 group duration-400">
            <div className="inline-flex items-center justify-center text-6xl font-bold text-white xxl:text-8xl">
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                75
              </span>
              <span className="duration-300 transition-colors group-hover:text-[#ec4634]">
                +
              </span>
            </div>
            <h5 className="text-lg font-bold text-white xxl:text-xl">
              Dsign Experience
            </h5>
          </div>
        </div>
      </div>
      {/*Tilte */}
      <div className="relative text-center w-full py-[10px] pt-0">
        <span className="section-subtitle px-3 py-1 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal mb-6">
          Micro Internship
        </span>
        <Splide
          options={{
            type: "loop",
            gap: "10rem",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }} // ✅ wrap into object
          className="w-full"
          aria-label="Smooth Scrllping Work Slider"
        >
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">Job Simulation</div>
          </SplideSlide>
        </Splide>
      </div>
      {/*projects */}
      <div className="relative text-center w-full py-[80px] pt-0">
        <div className="mt-8">
          <Carousel />
        </div>
      </div>
      {/* <div className="w-full projects lg:px-[12%] px-[8%] pb-[150px] md:pt-[50px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{ enabled: true }}
          modules={[EffectCoverflow, Keyboard]}
          className="w-full project-swiper"
        >
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index} className="ma-w-[300px]">
              <div className="w-full h-full project-item">
                <div className="project-image border-[#161616] rounded-xl">
                  <div className="overflow-hidden p-image rounded-xl h-[200px] bg-gray-800"></div>
                  <div className="project-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path d="M99.5,19v80.5H73.1V45.4L19,99.5L0.5,81l54.1-54.1H0.5V0.5H81L99.5,19z" />
                    </svg>
                  </div>
                </div>
                <div className="pt-5 text-white project-content">
                  <h3 className="pb-2 text-3xl font-bold">Talent vault</h3>
                  <p className="text-[#a2a2a2] w-full lg:w-[50%]">
                    hisdhbvsdighbisdnibh iu dhgviusrheglioefhifgvh ogjdos
                    gvoihgoidhgodi iodhgoidhgoi fdfhbgdsbubvud fhdvubvdsubv
                    hdfbvusbdjfvb
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
      {/*Tilte */}
      <div className="relative text-center w-full py-[10px] pt-0">
        <span className="section-subtitle px-3 py-1 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal mb-6">
          My Learning
        </span>
        <Splide
          options={{
            type: "loop",
            gap: "10rem",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }} // ✅ wrap into object
          className="w-full"
          aria-label="Smooth Scrllping Work Slider"
        >
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Learning</div>
          </SplideSlide>
        </Splide>
      </div>
      {/*info*/}
      <div className="text-white font-[var(--plus-Jakarta-font)] px-[8%] lg:px[12%] py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 relative z-10">
        {/*left*/}
        <div className="flex flex-col w-full gap-5">
          {/*Card */}
          <div className="bg-[#1e1e1e] border border-gray-700 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_25px_#ec463426]">
            <h4 className="text-sm text-gray-400 mb-5">My Learning Growth </h4>
            <div className="space-y-5">
              {careerList.map((job, i) => (
                <div key={i} className="flex justify-between text-gray-200">
                  <span className="text-xl font-bold">{job.title}</span>
                  <div className="text-right text-sm text-gray-500">
                    <p>{job.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Tag spider*/}
          <div className="py-5 px-5 bg-gradient-to-r from-[#ec4634] to-[#ff5e3a] shadow-lg rounded-xl">
            <h4 className="text-sm text-White-700 mb-5">
              Google Cloud Learning :-
            </h4>
            <Swiper
              spaceBetween={0}
              slidesPerView={2.5}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                575: { slidesPerView: 3 },
                640: { slidesPerView: 3 },
                767: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              modules={[Autoplay]}
              className="text-white px-6"
            >
              {tags.map((tag, i) => (
                <SwiperSlide
                  key={i}
                  className="text-2xl font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
                >
                  {tag}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { count: 550, label: "Labs Done in Google Cloud" },
              { count: 22, label: "Awards Won in Google Cloud" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#lalala] border border-gray-700 p-14 rounded-2xl text-center shadow-[0_0_25px_#ec463426]"
              >
                <h3 className="text-6xl font-extrabold text-white drop-shadow-[0_0_25px_#ec463426]">
                  <CountUp end={item.count} duration={2} />+
                </h3>
                <p className="text-lg mt-2 text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="space-y-10">
          {/* Map */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-[#1a1a1a] h-[250px] border border-gray-700 rounded-2xl overflow-hidden shadow-[0_0_25px_#ec463426] p-2">
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pd=!1m18!1m12!1m3!1d118106.62874832761!2d73.01719498167999!3d22.322186957561833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bf8!2sVadodara%2c%20Gujarat!5e0!3m2!1sen!2sin!4v1751715044708!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="w- h-full graycale constrast-125 brightness-90 rounded-2xl"
              ></iframe>
            </div>
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 text-center flex flex-col items-center shadow-[0_0_25px_#ec463426]">
              <h4 className="text-sm text-White-700 mb-5">
                My Google Cloud Profile
              </h4>
              <img src={mailIcon} className="w-[150px] h-[150px]" alt="" />
              <a
                href="https://www.cloudskillsboost.google/public_profiles/f2e61d0a-4962-4935-a055-9f6c5fcd1257"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-200"
              >
                View
              </a>
            </div>
          </div>
          {/* <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 shadow-[0_0_25px_#ec463426] backdrop-blur-md">
            <div className="mb-4">
              <h5 className="text-sm text-gray-400 uppercase tracking-wide">
                Technologies in Use
              </h5>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Apps Created With Expert Accuracy
              </h3>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-6 mt-6">
              {tools.map((icon, i) => (
                <div
                  key={i}
                  className="cursor-pointer p-34 rounded-xl transition-all duration-300 flex justify-center items-center shadow-inner hover:scale-105"
                >
                  <img
                    src={icon}
                    alt={`Tool ${i}`}
                    className="h-12 w-12 object-contain transition duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div> */}
          {/*Resume*/}
          {/* <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 flex justify-between items-center shadow-[0_0_25px_#ec463426]">
            <div>
              <p className="text-sm text-gray-400">2025</p>
              <h3 className="text-3xl font-bold">My Resume</h3>
            </div>
            <div className="text-[#ec4634] shadow-[0_0_25px_#ec463440] text-2xl h-[50px] w-[50px] flex justify-center items-center rounded-full border border-[#ec4634] hover:bg-[#ec4634] hover:text-white transition duration-300 cursor-pointer">
              <a href="">
                <i className="ri-download-2-line"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      
      {/*Title */}
      <div className="relative text-center w-full py-[10px] pt-0">
        <span className="section-subtitle px-3 py-1 text-[#ec4634] inline-block border border-[#393939] bg-[#161616] rounded-full text-sm font-normal mb-6">
          Certificate
        </span>
        <Splide
          options={{
            type: "loop",
            gap: "10rem",
            drag: false,
            arrow: false,
            pagination: false,
            autoScroll: {
              speed: 1.5,
              pauseOnHover: true,
              pauseOnFocus: true,
            },
          }}
          extensions={{ AutoScroll }} // ✅ wrap into object
          className="w-full"
          aria-label="Smooth Scrllping Work Slider"
        >
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>

          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
          <SplideSlide>
            <div className="section-title">My Certificate</div>
          </SplideSlide>
        </Splide>
      </div>
      {/*test*/}
      <div className="backdrop-blur-sm rounded-md px-4 py-2">
        {/* Other content */}
        <MoviesCarousel />
      </div>
    </>
  );
}
    

export default Index