import './About.css'
import {Link} from 'react-router-dom'

import React from "react";


const HumanResourceManagement = () => {
  
  const introp = `At Kaybros Limited, we understand the critical role that effective human resources management plays in driving organizati
  onal success. Our HR Management Services are designed to optimize your workforce and create a thriving work environment. From talent a
  cquisition to employee engagement and performance management, our 
  
  team of experienced HR professionals is dedicated to helping you attract,
   retain, and develop top talent. We collaborate closely with you to 
   understand your unique needs and provide tailored solutions that
    align with your business goals. Whether you require assistance with
     recruitment strategies, fostering a positive workplace culture, or
      implementing robust performance evaluation systems, we have the 
expertise and tools to elevate your HR practices to new heights.`;


  return (
    <div className="a-cont">
      <div className="top-bar-about">
        {/* this div mainatins height of the topbar */}
      </div>
      <div className="topbar">
        <h1>Human Resource Management</h1>
      </div>
      <div className="p-holder" id="p-holderid">
        <p className=" font-montserrat  ">{introp}</p>

        <ol>
          <li className="list-decimal ml-4">
            Talent Acquisition:
            <ul className=" ml-3">
              <li className="list-disc">
                Describe the company's expertise in sourcing, recruiting, and
                selecting top-quality candidates for various positions.
              </li>
            </ul>
          </li>
          <li className="list-decimal ml-4">
            Employee Engagement:
            <ul className=" ml-3">
              <li className="list-disc">
                Explain how Kaybros Limited helps clients create a positive work
                culture, boost employee morale, and enhance productivity.
              </li>
            </ul>
          </li>
          <li className="list-decimal ml-4">
            Performance Management:
            <ul className=" ml-3">
              <li className="list-disc">
                Detail the company's approach to performance evaluation,
                feedback, and goal setting to optimize individual and
                organizational performance.
              </li>
            </ul>
          </li>
          <li className="list-decimal ml-4">
            Human Resource Policy Development:
            <ul className=" ml-3">
              <li className="list-disc">
                Highlight how the company assists clients in developing
                comprehensive HR policies and procedures that align with legal
                requirements and best practices.
              </li>
            </ul>
          </li>
        </ol>
        <div className="mt-7">
          <Link to="/Contact">
            <button
              className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5
           rounded-md text-white md:w-auto w-full"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <div className="accordin-holder"></div>
    </div>
  );
};

export default HumanResourceManagement;
