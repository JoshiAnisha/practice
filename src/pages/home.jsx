import { Link } from "react-router-dom";
import Image1 from "/images/download.jpeg";

export default function Home() {
  return (
    <>
      <div>
        <div className="h-[calc(100vh/1.25)] bg-gray-200 flex items-center justify-center">
          <div className="h-[calc(100vh/1.5)] w-[90%] bg-green-900 flex flex-col items-center justify-center text-green-100 shadow-xl/40 rounded-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-5 text-shadow-lg hover:scale-105 transition-transform duration-200">
              WELCOME!
            </h1>
            <p className="text-lg md:text-2xl mb-5 text-shadow-lg">
              View images and read informations
            </p>
            <Link to="/random">
              <button className="bg-green-700 text-white border border-white px-4 py-2 rounded-full hover:bg-green-600 hover:shadow-lg/40">
                Go to random
              </button>
            </Link>
          </div>
        </div>
        <div className="image-container p-15 ml-10 mr-10 mt-10 ">
          <div className="w-72 h-auto box flex justify-center rounded-2xl space-x-10">
            <img
              className="rounded-2xl transition-transform duration-500 hover:scale-110"
              src={Image1}
              alt="1"
            />
            <img
              className="rounded-2xl transition-transform duration-500 hover:scale-110"
              src={Image1}
              alt="1"
            />
            <img
              className="rounded-2xl transition-transform duration-500 hover:scale-110"
              src={Image1}
              alt="1"
            />
            <img
              className="rounded-2xl transition-transform duration-500 hover:scale-110"
              src={Image1}
              alt="1"
            />
          </div>
        </div>
        <div className="w-auto h-auto bg-gray-100 text-gray-800 box justify-center rounded-2xl">
          <p className="p-10 text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            blanditiis, cupiditate quas repudiandae accusamus cumque consectetur
            quos assumenda ad fugiat enim eius tenetur est sapiente ab error
            inventore perferendis natus.
          </p>
        </div>
      </div>
    </>
  );
}
