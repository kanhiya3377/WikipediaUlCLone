import React from "react";

const Rightsidebar = () => {
  return (
    <div className="w-[15%] flex flex-col gap-3 mt-10">
      <div className="mt-1 flex gap-4">
        <a href="#"> <strong>Appearance</strong> </a>
        <button className="bg-gray-300 px-2 ">hide</button>
      </div>
      <hr />

      <div className="flex flex-col gap-1">
        <p>Text</p>
        <hr />

        <label className="hover:cursor-pointer" >
          <input type="radio" name="option" id="1" /> <span>Small</span>
        </label>

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="2" /> <span>Standard</span>
        </label>

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="3" /> <span>Large</span>
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <p>Width</p>
        <hr />

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="1" /> <span>Standard</span>
        </label>

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="2" /> <span>Wide</span>
        </label>
      </div>

      <div className="flex flex-col gap-1">
        <p>Color (beta)</p>
        <hr />

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="1" /> <span>Automatic</span>
        </label>

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="2" /> <span>Light</span>
        </label>

        <label className="hover:cursor-pointer">
          <input type="radio" name="option" id="3" /> <span>Dark</span>
        </label>
      </div>
    </div>
  );
};

export default Rightsidebar;
