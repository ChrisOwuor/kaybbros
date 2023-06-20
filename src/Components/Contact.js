import React from "react";
// import SimpleMap from "./Map";
import './About.css'
import Form from "./Form";

const Contact = () => {
  return (
    <div>
      <div className="top-bar-about">
        {/* this div mainatins height of the topbar */}
      </div>
      <div className="topbar mb-10">
        <h1>Contact Us </h1>
      </div>

      <div className=" mapholder flex justify-center">
        <div className=" iframeholder sm:w-auto">
          {/* <div  class="h-64 sm:h-auto bg-gray-300"> */}
          <iframe
            title="kaybroslocation"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.27264561575!2d36.816305!3d-1.282935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f42bf35%3A0x449d7ec7b378dfeb!2sUtalii%20House!5e0!3m2!1sen!2ske!4v1676800314835!5m2!1sen!2ske"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
          {/* </div> */}
        </div>
      </div>
      <div className="ctmp-cont ">
        <div className="contact-fm mt-0">
          <h1 className="text-teal-400  text-3xl underline">
            Make a business enquiry
          </h1>
          <Form />
        </div>
        <div className="contact-detais p-5">
          <div>
            <h1 className="text-teal-400 text-3xl underline">Contacts</h1>

            <ol>
              <li className="text-sm">Kaybros Consulting Limited</li>
              <li className="text-sm">Utalii House 10th Floor room 1020</li>
              <li className="text-sm">P.O. Box 7563-00300</li>
              <li className="text-sm">Nairobi-Kenya</li>

              <li className="text-sm">+254 715 248882</li>
              <li className="text-sm">+254700136900</li>

              <li className="text-sm">kaybrosglobalconsulting@gmail.com</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
