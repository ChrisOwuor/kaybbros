import ItemContact from "./ItemContact";
import Sitemap from "./SItemap";
import "./Sitemap.css";

const ItemsContainer = () => {
  return (
    <div className="flex flex-wrap gap-20 md:justify-center py-5">
      <div className="w-full md:w-auto py-5 px-7">
        <ItemContact />
      </div>
      <div className="w-full md:w-auto  py-5 px-7">
        <Sitemap />
      </div>

      <div className="w-full md:w-auto  py-5 px-7">
        {" "}
        <p className="text-lg"> Subscribe to our newsletter</p>
        <br></br>{" "}
        <input
          id="s-input"
          type="text"
          placeholder="Your Email"
          className="text-gray-800  border border-gray-300 
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none shadow-md shadow-white "
        />
        <button
          className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 
           rounded-md text-white md:w-auto w-full"
        >
          Subscribe
        </button>
      </div>
    </div>

    // <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-6 sm:px-8 px-5 py-16">
    //   <ItemContact />
    //   <Sitemap />
    //   <div>
    //     <p> Subscribe to our newsletter</p>
    //     <br></br>
    //     <input
    //       id="s-input"
    //       type="text"
    //       placeholder="Your Email"
    //       className="text-gray-800
    //        sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
    //     />
    //     <button
    //       className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
    //        rounded-md text-white md:w-auto w-full"
    //     >
    //       Subscribe
    //     </button>
    //   </div>
    // </div>
  );
};

export default ItemsContainer;
