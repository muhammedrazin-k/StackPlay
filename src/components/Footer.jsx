import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-950 w-full p-8  ">
      <div className="flex flex-col  sm:flex-row gap-2 justify-center items-center sm:items-start ">
        <div className="footerhead w-75 sm:w-[25%] text-center">
          <h1 className="text-yellow-700 text-[20px]">Stack Play</h1>
          <p className="text-[12px] lg:text-[16px]  text-neutral-400  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            tenetur voluptas unde ipsam quaerat, minus iste minima quis
            recusandae iusto consequatur! Blanditiis dolorem tempora atque iste
            totam minima tenetur delectus?
          </p>
        </div>
        <div className=" w-75 sm:w-[25%] flex flex-col items-center text-center ">
            <h1 className="text-yellow-700 text-sm lg:text-[18px]">Links</h1>
            <div className="flex flex-col gap-2 ">
            <Link to={'/'} className="text-[12px] lg:text-sm text-neutral-400 no-underline  ">Landing</Link>
            <Link to={'/home'} className="text-[12px] lg:text-sm text-neutral-400 no-underline">Home</Link>
            <Link to={'/history'} className="text-[12px] lg:text-sm text-neutral-400 no-underline">History</Link>
            </div>
            
        </div>
        <div className=" w-75 sm:w-[25%] text-center  ">
            <h1 className="text-yellow-700 text-sm lg:text-[18px] ">Guids</h1>
            <p className="text-[12px] lg:text-sm text-neutral-400">React</p>
            <p className="text-[12px] lg:text-sm text-neutral-400">React Bootstrap</p>
            <p className="text-[12px] lg:text-sm text-neutral-400">React Router</p>
        </div>
        <div className=" w-75 sm:w-[25%] text-center">
            <h1 className="text-yellow-700 text-sm lg:text-[20px]">contact us</h1>
            <div className="searchbar flex gap-2 w-[80%] sm:w-full mx-auto">
                <input type="email" className="rounded-xl w-full h-10 px-2" placeholder="Enter your email"/>
                <button className="text-white bg-amber-700 px-[6%] rounded-md">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
            </div>
            <div className="media-div  justify-center my-8 px-3">
                <div className="insta my-2 flex justify-evenly">
                    <i className="fa-brands fa-instagram fa-lg mx-1 fa-xl  cursor-pointer hover:scale-110 transition-all duration-[500] transform hover:-translate-y-2"></i> 
                    <i className="fa-brands fa-twitter mx-1 fa-xl cursor-pointer hover:scale-110 transition-all duration-[500] transform hover:-translate-y-2"></i>
                    <i className="fa-brands fa-linkedin-in mx-1 fa-xl cursor-pointer hover:scale-110 transition-all duration-[500] transform hover:-translate-y-2"></i>
                    <i className="fa-brands fa-facebook-f mx-1 fa-xl cursor-pointer hover:scale-110 transition-all duration-[500] transform hover:-translate-y-2"></i>
                    </div>
            </div>
        </div>
        

      </div>
      <aside className="flex gap-2 justify-center mb-0  ">
        <svg
          
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current w-6">
          <path
            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p className="my-auto text-sm sm:text-lg">Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      
    </div>
  );
};
