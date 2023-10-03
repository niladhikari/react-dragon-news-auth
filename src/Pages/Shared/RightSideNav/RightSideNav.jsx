import {
  FaGithub,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import "./RightSideNav.css";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-7">
        <h2 className="text-2xl font-semibold">Login With</h2>
        <button className="btn btn-outline w-full text-blue-600">
          <FaGoogle></FaGoogle>
          Google Login
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          GitHub Login
        </button>
      </div>

      <div className="p-4  mb-7">
        <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
        <div className="font-medium">
          <a className="flex items-center gap-3 text-lg p-4 border-2 rounded-t-lg">
            <FaFacebookF className="text-blue-600"></FaFacebookF>
            <span>FaceBook</span>
          </a>
          <a className="flex items-center gap-3 text-lg p-4 border-x ">
            <FaTwitter className="text-blue-400"></FaTwitter>
            <span>Twitter</span>
          </a>
          <a className="flex items-center gap-3 text-lg p-4 border-2 rounded-b-lg">
            <FaInstagram className="text-pink-500"></FaInstagram>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="p-4  mb-7 bg-[#F3F3F3]">
        <h2 className="text-2xl font-semibold mb-5">Q-Zone</h2>
        <img src="https://i.ibb.co/dMf3FVy/qZone1.png" alt="Swimming" />
        <img src="https://i.ibb.co/7X188cH/qZone2.png" alt="Class" />
        <img src="https://i.ibb.co/fF42j7Q/qZone3.png" alt="PlayGround" />
      </div>

      <div className="mb-7 background text-white">
        <div className="p-4 py-10 text-center">
          <h2 className="text-3xl font-bold mb-5">Create an Amazing Newspaper</h2>
          <p className="mb-7">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <button className="btn btn-error">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
