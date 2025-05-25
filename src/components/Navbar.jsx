import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWikipediaW } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import wikipedia from '../assets/wikipedia.png';
import wikipediaTagline from '../assets/wikipediaTagline.svg';
import wikipediaWordmark from '../assets/wikipediaWordmark.svg';

const Navbar = () => {
  return (
    <div className="flex justify-between mt-3 mx-9">
      <div className="flex gap-3.5 space-x-9">
        <div className="flex  items-center gap-3">
          <div className="flex gap-3.5 hover:cursor-pointer">
            <RxHamburgerMenu size={25} className="mt-3.5" />
            <img src={wikipedia} alt="logo" width={50} />
          </div>

          <div className="flex flex-col w-[140px] gap-1  hover:cursor-pointer ">
            <img src={wikipediaWordmark}  alt="wikipediaWordmark" />
            <img src={wikipediaTagline} alt="wikipedia" />
          </div>
        </div>
        <div>
          <label className="flex relative ">
            <input type="text" className="border-1 px-20 rounded-xs" placeholder="Search Wikipedia" />
            <IoIosSearch size={25} className="absolute left-2 top-1 text-gray-500" />
            <button className="text-black font-semibold px-2 border-1 bg-gray-200 p-1 rounded-xs hover:cursor-pointer">Search</button>
          </label>
        </div>

      </div>

      <div>
        <ul className="flex gap-2 mx-4 text-blue-600">
          <li>
            <a href="#">Create account</a>
          </li>
          <li>
            <a href="#">Log in</a>
          </li>
          <li>
            <a href="#" className="text-black">...</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
