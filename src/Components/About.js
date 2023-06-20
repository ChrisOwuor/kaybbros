import "./About.css";
import Accordion from "./Accordion";

const atextone = `Kaybros Global Consulting ltd was registered on 24th December 2020 to provide high value consultancy services to various clienteles in these dynamic times of business. We are committed to helping organizations to increase their productivity through better use of their human resources and to enable companies to achieve real competitive advantages.`;
const atexttwo = `Our skills and expertise covers a wide range of HR activities and initiatives, Business Valuations, Business registration, Payroll Management, Business strategic plans, Tax planning and management and many more. The programmes we design are developed to meet specific organizational needs. We work across all industry sectors, employing a simple yet effective approach to each project. By developing short term, middle term and long-term strategic partnerships with Private and Public sector organizations, we are well placed to offer "best of breed" solutions to our clients.`;
const atextthree = `One of the key goals for Kaybros Global Consulting ltd team is to establish a Human Resources infrastructure that supports employers, owners and managers in their current business and the future growth requirements. Kaybros Global Consulting ltd works in partnership with business owners and managers to build a value adding workforce by implementing a practical performance management system that effectively and efficiently tracks the performance and growth of the business.

`;
// const atextfour = `Whether you are an individual or corporate client requiring help in registering a new business,
//  setting up your accounting and control systems, handling your payroll or getting assurance services, MGK is your
//   friendly expert.`;

const About = () => {
  return (
    <div className="a-cont">
      <div className="top-bar-about">
        {/* this div mainatins height of the topbar */}
      </div>
      <div className="topbar">
        <h1>About Us</h1>
      </div>
      <div className="p-holder"   id="p-holderid">
        <p className=" font-montserrat  ">{atextone}</p>
        <p className=" font-montserrat  ">{atexttwo}</p>
        <p className=" font-montserrat "> {atextthree}</p>
        {/* <p className=" font-montserrat    ">{atextfour}</p> */}
      </div>
      <div className="accordin-holder">
        <Accordion />
      </div>
    </div>
  );
};

export default About;
