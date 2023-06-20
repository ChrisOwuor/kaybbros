import React, { useState } from "react";
import ceoimg from '../Img/photo_2023-04-26_10-02-27.jpg'
import memimg from '../Img/photo_2023-04-26_10-01-54.jpg'
import womanimg from "../Img/imgage4.jpg";
import   './Accordion.css'
const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
 
  

  return (
    <div className="border-b border-gray-200 list-decimal  ">
      <button
        className="w-full  mt-5 flex items-center justify-between py-5 bg-gray-200 p-2 rounded-md"
        onClick={toggleAccordion}
      >
        <span className="flex items-center">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.646 10l4.95-4.95a.5.5 0 0 1 .708 0l.707.707a.5.5 0 0 1 0 .708L6.707 10l4.95 4.95a.5.5 0 0 1 0 .708l-.707.707a.5.5 0 0 1-.708 0L3.646 10z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.646 6.354a.5.5 0 0 1 0-.708l.707-.707a.5.5 0 0 1 .708 0L10 8.293l4.95-4.95a.5.5 0 0 1 .708 0l.707.707a.5.5 0 0 1 0 .708L10.707 10l4.95 4.95a.5.5 0 0 1 0 .708l-.707.707a.5.5 0 0 1-.708 0L10 11.707l-4.95 4.95a.5.5 0 0 1-.708 0l-.707-.707a.5.5 0 0 1 0-.708L9.293 10 4.343 5.05a.5.5 0 0 1 0-.708l.707-.707z"
              />
            </svg>
          )}
          {title}
        </span>
      </button>
      {isOpen && <div className="mt-2 ml-5">{children}</div>}
    </div>
  );
};

const Grid = (props) => {
  return (
    <div className=" grid-cont grid grid-cols-1 sm:grid-cols-2 py-5 gap-4 mt-5">
      {/* <div className="py-10 px-10 rounded-full ">
        <img src={props.teamimg} alt="teammener" className="w-10" />
      </div> */}
      <div className="left-div  ">
        <img
          class="object-cover  rounded-full"
          src={props.teamimg}
          alt=""
          loading="lazy"
        />
      
      </div>

      <div className="py-10 px-10">
        <h1 className="mb-3 text-2xl">{props.heading}</h1>

        <p className="text-lg">
        

          {props.info}
        
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const ceoheading = `CPA- Dominic A. Midigo`;
  const womanheading = `Nancy Opiyo`;
  
  
  
  const memberheading = `Francis Young Athoo (B- COM, CPA (K),)`;
  
  const ceodet = `
   Mr. Midigo holds MSC- Finance from the University of Nairobi
, B.Com (Finance), CPA-K, CPS-K and currently undertaking PHD degree.
He has over 20 years’ hands on working experience. He has held Head of department responsible 
positions in leading companies among them; Shear logic Management consultant’s ltd, Catholic 
University of Eastern Africa. He is the former Finance Director Sheer logic Management 
consultants Kenya.
He is a member of the Institute of Certified Public Accountants of Kenya. He has widely 
traveled and has attended many international seminars and workshops. He is
currently the Managing Partner of the firm. He is the lead Partner in charge of quality Assurance, 
Taxation and Audit in the firm.`;
  const memdet = `He holds a B.Com degree in Business Administration, and CPA (K).
He has worked for various leading Organizations among them; Action aid Kenya, Sheer logic 
Management consultants. He is a member of the institute of Certified Public Accountants of 
Kenya.He holds a B.Com degree in Business Administration, and CPA (K).
He has worked for various leading Organizations among them; Action aid Kenya, Sheer logic 
Management consultants. He is a member of the institute of Certified Public Accountants of 
Kenya.`;
  const woman = `
  Nancy Opiyo holds a BBM degree in Bachelor of Commerce. He has over 5 years’
   experience in Accounting, Finance, Projects Financial management and reporting and HR
   rb Management with various
  companies. He is a member of the Institute of human resource management of Kenya (HRM). `;
  
  
  
  
  
  return (
    <div className="sec-one">
      <Accordion title="Vision">
        {/* <h1 className="text-12l  mb-3" lass>
          Our Value Proposition
        </h1> */}
        <p className="max-w-100">
          Our Vision is to be the definitive Consultancy firm offering the best
          solutions to all our partners.
        </p>
        {/* <h1 className="text-12l  mb-3">Our Values</h1>
        <ol className="ml-10">
          <li className="list-decimal">
            <h1 className="text-12l font-bold ">Professionalism</h1>
            <ul>
              <li className="list-disc ml-4 ">Integrity.</li>
              <li className="list-disc  ml-4  ">
                Adherence to international standards
              </li>
            </ul>
          </li>
          <li className="list-decimal">
            <h1 className="text-12l font-bold ">Continuous Learning</h1>
            <ul>
              <li className="list-disc ml-4 ">
                Keeping abreast of developments in our profession
              </li>
            </ul>
          </li>
          <li className="list-decimal">
            <h3 className="text-12l font-bold ">Customer Centricity</h3>
            <ul>
              <li className="list-disc ml-4  ">Efficiency</li>
              <li className="list-disc ml-4  ">
                Strive to understand client needs, deliver quality service, and
                continuous involvement
              </li>
              <li className="list-disc ml-4 ">Involvement</li>{" "}
              <li className="list-disc ml-4 ">
                Collegiality – to be friendly and accessible
              </li>
            </ul>
          </li>
          <li className="list-decimal">
            <h3 className="text-12l font-bold ">Commitment</h3>
            <ul>
              <li className="list-disc ml-4">God Fearing</li>
              <li className="list-discml-4 ">Ethical conduct</li>
            </ul>
          </li>

          <li className="list-decimal">
            <h3 className="text-12l font-bold "> Innovation</h3>
            <ul>
              <li className="list-disc ml-4">
                Continuously seeking new ways of improving customer service and
                efficiency
              </li>
            </ul>
          </li>
        </ol> */}
      </Accordion>

      <Accordion title="Mission">
        <p className="max-w-100">
          To positively contribute towards enhancing our clients corporate
          values. Care for people and deliver results within the time frame
          agreed with our clients by providing the insight knowledge of Human
          resource, Cooperate governance, Business strategic models, financial
          planning and management thereby the reason and desire to always use
          the best human resources practices.
        </p>
      </Accordion>
      <Accordion title="Core Values">
        <h1 className="text-12l  mb-3">
          We give our commitment to a service that at all times:
        </h1>
        <ol className="ml-10">
          <li className="list-decimal">
            <h1 className="text-12l  ">
              Maintain Personal and Professional Integrity.
            </h1>
            {/* <ul>
              <li className="list-disc ml-4 ">Integrity.</li>
              <li className="list-disc  ml-4  ">
                Adherence to international standards
              </li>
            </ul> */}
          </li>
          <li className="list-decimal">
            <h1 className="text-12l  ">
              Hold to principles; deliver outstanding work that meets personal
              and firm standards.
            </h1>
            {/* <ul>
              <li className="list-disc ml-4 ">
                Keeping abreast of developments in our profession
              </li>
            </ul> */}
          </li>
          <li className="list-decimal">
            <h3 className="text-12l  ">
              Develops and empower individuals, teams and organizations.
            </h3>
            {/* <ul>
              <li className="list-disc ml-4  ">Efficiency</li>
              <li className="list-disc ml-4  ">
                Strive to understand client needs, deliver quality service, and
                continuous involvement
              </li>
              <li className="list-disc ml-4 ">Involvement</li>{" "}
              <li className="list-disc ml-4 ">
                Collegiality – to be friendly and accessible
              </li>
            </ul> */}
          </li>
          <li className="list-decimal">
            <h3 className="text-12l  ">
              Provides on-going support and advice to our clients on matters
              affecting their businesses.
            </h3>
            {/* <ul>
              <li className="list-disc ml-4">God Fearing</li>
              <li className="list-discml-4 ">Ethical conduct</li>
            </ul> */}
          </li>

          <li className="list-decimal">
            <h3 className="text-12l  ">
              {" "}
              Develops programmes, processes and systems that "fit"
              organizations and meet their needs.
            </h3>
          </li>
          <li className="list-decimal">
            <h3 className="text-12l  ">
              {" "}
              Provides an emphasis on practical skill development based on
              proven management theory.
            </h3>
          </li>
          <li className="list-decimal">
            <h3 className="text-12l  ">
              {" "}
              We are committed to professionalism and excellence.
            </h3>
          </li>
          <li className="list-decimal">
            <h3 className="text-12l  ">
              {" "}
              Provides clients with value for each Dollar invested.
            </h3>
          </li>
        </ol>
      </Accordion>

      <Accordion title="Our Team">
        <Grid teamimg={ceoimg} heading={ceoheading} info={ceodet} />
        <Grid teamimg={memimg} heading={memberheading} info={memdet} />
        <Grid teamimg={womanimg} heading={womanheading} info={woman} />
      </Accordion>
     
    </div>
  );
};

export default App;
