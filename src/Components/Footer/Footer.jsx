import React from 'react'

function Footer() {


  const splitText = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className="inline-block animate-fadeInup"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {char}
      </span>
    ))
  return (
    <>
      <section className="bg-[var(--body-color)] text-[var(--text-color)] font-[var(--plus-Jakarta-font)] py-20 lg:px-[12%] px-[8%]">
        <div className="mx-auto space-y-16 footer-input text-center lg:text-left">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Let&apos;s Work Together
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-10 lg:gap-20">
            <h2 className="text-5xl sm-text-6xl md:text-7xl font-extrabold text-[var(--primary-color)] drop-shadow-[0_0_15px_var(--primary-color)]">
              {splitText("Mail Us ")}
            </h2>
          </div>
          <div className="text-base text-green-500 mt-4"></div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[var(--body-color)] text-white px-[8%] lg:px-[12%] pt-1 pb-10 font-[var(--Plus-Jakarta-font)]">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              {[
                {
                  icon: "ri-youtube-line",
                  url: "https://www.youtube.com/@AnmolGour-mo3vk",
                },
                {
                  icon: "ri-linkedin-line",
                  url: "https://www.linkedin.com/in/anmol-gour-4455a6305/",
                },
                {
                  icon: "ri-instagram-line",
                  url: "https://www.instagram.com/anshugour944/",
                },
              ].map(({ icon, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icons rounded-full border border-[var(--primary-color)] h-[50px] w-[50px] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[var(--primary-color)] hover:text-white hover:shadow-[0_0_15px_#ec4634]"
                >
                  <i className={`${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="text-[1.1rem] space-y-4">
            <h3 className="text-2xl font-semibold">Map Direction</h3>
            <p className="text-[var(--text-light)]">I Am Available In Pune</p>
            <h3 className="text-2xl font -semibold pt-4">Contact</h3>
            <p className="text-white text-2xl font-bold">(+91) 9112418690</p>
            <p className="text-[var(--text-light)] mt-1">Contact Me at</p>
          </div>
          <div className="text-[1.1rem] space-y-4">
            <h3 className="text-2xl font-semibold">gouranmol7276@gmail.com</h3>
            <p className="text-[var(--text-light)]">Email me Through</p>
            <h3 className="text-2xl font -semibold pt-4">
              04.30 PM - 11.30 PM
            </h3>
            <p className="text-[var(--text-light)] mt-1">
              My Available Timeing
            </p>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 text-sm sm:text-text-base tracking-wide">
          © 2025. All Rights Reserved. By{" "}
          <a
            href=""
            className="text-[var(--primary-color)] font-bold hover:underline"
          >
            AnmolGour
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer
