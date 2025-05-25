import image from '../assets/images.jpeg';

const Headerbar = () => {
  return (
    <div className="flex justify-between border-[2px] border-red-500 h-[75px] w-[94%] mx-auto mt-3.5 items-center ">

      <div className="flex gap-5 ">

        <img src={image} className='rounded-[100px] w-12 h-12 ml-3 hover:cursor-pointer'  alt="ronaldoBhai" />
        <div>
          <p>
            Wiki Loves Monuments: Photograph a monument, help Wikipedia and win!
          </p>
          <p>
            <a href="#" className="font-bold">Learn more</a>
          </p>
        </div>
      </div>

      <button className="bg-gray-300 rounded-full mr-2.5 h-10 w-10 ">
        X</button>
      
      
    </div>
  );
};

export default Headerbar;
