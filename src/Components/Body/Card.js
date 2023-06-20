import "./Card.css";

import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="Card  w-full  shadow-md rounded px-6 py-8 ">
      <figure className="img-cont">
        <img
          src={props.img}
          alt=""
        />
      </figure>
      <h3 class="service_title   text-3xl underline">{props.heading} </h3>
      <div class="service_intro_wrap">
        <p class="service_intro text-xl">{props.text}</p>
        <div className="service_cta bg-red">
          <p>
              <Link
            class="service_url  bg-teal-400 mb-5 hover:bg-teal-500 duration-300 
           rounded-md text-white py-3 px-4 md:w-auto w-full"
            to={props.link}
          >
            Read more{" "}
          </Link>
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Card;
