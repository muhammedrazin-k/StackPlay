import React from "react";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export const Landing = () => {
  return (
    <>
      <div
        className=" flex  flex-col md:flex-row items-center  "
        style={{ minHeight: "100vh" }}
      >
        <div className="content w-[80%] md:w-[60%]  h-[50vh] md:h-[70vh] flex items-center justify-end  pl-[4%] ">
          <div data-aos='fade-right' data-aos-delay='300' className="textDiv  ">
            <p className="font-[satisfy] text-4xl sm:text-5xl text-gray-300 ">
              {" "}
              Let’s get started with{" "}
              <span className="text-amber-400 font-bold">Stack Play</span>
            </p>
            <p className="text-gray-500 text-base sm:text-lg">
              Stack Play helps you save and organize your favorite YouTube
              videos into clean, distraction-free playlists. Whether you're
              learning, watching, or curating it's all in one place.
            </p>
            <div className="hover:scale-95 bg-red-500 w-fit transition-all duration-[500ms]">
              <Link
                to={"/home"}
                className="bg-purple-600 px-4 p-2  rounded no-underline text-white  hover:bg-purple-800 transition-all duration-[500ms] "
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div data-aos='fade-down' data-aos-delay='800' data-aos-duration='1500' className="content   h-[50vh] sm:h-[70vh]  flex mb-[10%]">
          <DotLottieReact
            src="https://lottie.host/5c938004-b81c-4a59-86bc-78a7fb9531f5/KzW94GZY4B.lottie"
            style={{ width: "100%" }}
            loop
            autoplay
          />
        </div>
      </div>

      <div className="features">
        <div className="featuresHead my-[4%]">
          <p className="text-center font-[satisfy] text-2xl md:text-4xl text-gray-200">
            Why Choose Stack Play?
          </p>
        </div>
        <div className="cardsDiv flex flex-col items-center gap-4 md:flex-row justify-evenly p-[3%] mt-[4%]">
          <div data-aos="fade-right" className="cards w-[60%] md:w-[25%] h-25 bg-gray-900 p-4 rounded-xl  shadow-[0px_6px_16px_rgba(0,0,0,0.6)]  hover:shadow-[0_0_20px_#8b5cf6] transform hover:-translate-y-5 hover:scale-105 transition-all duration-[800ms]">
            <div className="anime p-2">
              <DotLottieReact
                src="https://lottie.host/bd8f327a-0c49-487c-be05-907e8f4f2ccb/I3wO06iQcs.lottie"
                loop
                autoplay
              />
            </div>

            <p className="font-Roboto text-center font-bold text-lg text-gray-300">
              Managing Videos
            </p>
            <p className="text-center">
              Upload, remove, and view your videos in a smooth, distraction-free
              interface built for control and ease.
            </p>
          </div>

          <div data-aos='fade-up' data-aos-delay="400" className="cards w-[60%] md:w-[25%] h-25 bg-gray-900 p-4 rounded-xl shadow-[0px_6px_16px_rgba(0,0,0,0.6)]  hover:shadow-[0_0_20px_#8b5cf6] transform hover:-translate-y-5 hover:scale-105 transition-all duration-[800ms]">
            <div className="anime p-2">
            <DotLottieReact
      src="https://lottie.host/c8b4d813-8b5d-488f-8079-2d0ca7f88af0/oIsJ19WHML.lottie"
      loop
      autoplay
    />
            </div>

            <p className="font-Roboto text-center font-bold text-lg text-gray-300">
              Catogorizing video
            </p>
            <p className="text-center">
            Group videos by topic, mood, or project into organized playlists for faster access.
            </p>
          </div>

          <div data-aos='fade-right' data-aos-duration='400' className="cards w-[60%] md:w-[25%] h-25 bg-gray-900 p-4 rounded-xl shadow-[0px_6px_16px_rgba(0,0,0,0.6)]  hover:shadow-[0_0_20px_#8b5cf6] transform hover:-translate-y-5 hover:scale-105 transition-all duration-[800ms]">
            <div className="anime p-2">
            <DotLottieReact
      src="https://lottie.host/533c92cc-e494-48fc-a7a5-8c438f904a0b/8x9QAhBh1M.lottie"
      loop
      autoplay
    />
            </div>

            <p className="font-Roboto text-center font-bold text-lg text-gray-300">
              Managing History
            </p>
            <p className="text-center">
            Track what you’ve watched, revisit past videos, and keep your play activity tidy.
            </p>
          </div>
        </div>
      </div>

      <div className="about w-full p-[3%] ">
        <div className="final-head  my-[10%]">
          <p className="text-gray-300 text-2xl md:text-4xl text-center font-[satisfy] ">
            How Stack Play Works
          </p>
        </div>
        <div data-aos='zoom-in' className="AboutCard shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_34px_rgba(0,0,0,0.8)] hover:scale-95 transition-all duration-[800ms] rounded-lg p-[1%] flex flex-col lg:flex-row items-center ">
          <div className="about-text w-100 md:w-50 p-[4%]  ">
            <p className="text-gray-300 text-lg md:text-3xl font-sans font-semibold px-2">
              Get started in just 3 simple steps.
            </p>
            <div className="stepCard  bg-gray-800 shadow-[0_16px_20px_rgba(0,0,0,0.8)] p-3 rounded-xl mb-[5%] transform hover:translate-y-3 hover:scale-105 trasition-all duration-[800ms]">
              <p className="font-sans text-lg font-medium text-gray-300">
                Paste YouTube Link
              </p>
              <p className="text-gray-400">
                Copy your favorite video’s URL and drop it into Stack Play.
                That’s it no login needed.
              </p>
            </div>
            <div className="stepCard  bg-gray-800 shadow-[0_16px_20px_rgba(0,0,0,0.8)] p-3 rounded-xl  mb-[5%] transform hover:translate-y-3 hover:scale-105 trasition-all duration-[800ms]">
              <p className="font-sans text-lg font-medium text-gray-300">
                Organize Easily
              </p>
              <p className="text-gray-400">
                Group your videos into playlists based on topics, moods, or
                projects.
              </p>
            </div>
            <div className="stepCard  bg-gray-800 shadow-[0_16px_20px_rgba(0,0,0,0.8)] p-3 rounded-xl mb-[5%] transform hover:translate-y-3 hover:scale-105 trasition-all duration-[800ms] ">
              <p className="font-sans text-lg font-medium text-gray-300">
                Play Distraction Free
              </p>
              <p className="text-gray-400">
                Watch videos without ads or sidebars just the content you saved,
                clean and focused..
              </p>
            </div>
          </div>
          <div className=" p-4 w-full  max-w-4xl mx-auto aspect-video ">
            <iframe
             className="w-full h-full rounded-lg shadow-[0_19px_19px_rgba(0,0,0,0.9)] hover:scale-105 transition-all duration-[800ms]"
              src="https://www.youtube.com/embed/d9MyW72ELq0?si=V447cNnevk6cCxJq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
