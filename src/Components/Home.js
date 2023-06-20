import React from "react";
import EmblaCarousel from "./Carousel/EmblaCarousel";
import fimg from "../Img/pexels-andrea-piacquadio-3760067.jpg";
import simg from "../Img/pexels-energepiccom-288477.jpg";
import timg from "../Img/pexels-karolina-grabowska-4475527.jpg";
import fiimg from "../Img/pexels-kuncheek-210990.jpg";
// import Paragraph from "../Components/Body/Paragraph";
import Cards from "../Components/Body/Cards";
import './About.css'


const Home = () => {
 
  const images = [
    fiimg,
    simg,
    timg,
    fimg
    
  ]
  const textOne = `Kaybros Global Consulting ltd was registered on 24th December 2020 to provide high value consultancy services to various clienteles in these dynamic times of business. We are committed to helping organizations to increase their productivity through better use of their human resources and to enable companies to achieve real competitive advantages.

`;
  const textTwo = `Our skills and expertise covers a wide range of HR activities and initiatives, Business Valuations, Business registration, Payroll Management, Business strategic plans, Tax planning and management and many more. The programmes we design are developed to meet specific organizational needs. We work across all industry sectors, employing a simple yet effective approach to each project. By developing short term, middle term and long-term strategic partnerships with Private and Public sector organizations, we are well placed to offer "best of breed" solutions to our clients.`;

  return (
    <div className="body-holder">
      <EmblaCarousel images={images} />
      {/* <Paragraph message={textOne} /> */}
      <div className="p-holder2 ">
        <p className=" font-montserrat text-3xl mt-5">{textOne}</p>
      </div>
      <Cards />
      <div className="p-holder2 ">
        <p className=" font-montserrat text-3xl mt-5">{textTwo}</p>
      </div>
    </div>
  );
};
export default Home;
