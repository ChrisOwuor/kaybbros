import "./About.css"
import Card from "./Body/Card";
import Cards from "./Body/Cards";
// import Paragraph from "./Body/Paragraph";

const Services = () => {
  const cardparagraph1 = `Kaybros Global Consulting ltd was registered on 24th December 2020 to provide high value consultancy services to various clienteles in these dynamic times of business. We are committed to helping organizations to increase their productivity through better use of their human resources and to enable companies to achieve real competitive advantages.

`;
  const cardparagraph2 = `Our skills and expertise covers a wide range of HR activities and initiatives, Business Valuations, Business registration, Payroll Management, Business strategic plans, Tax planning and management and many more. The programmes we design are developed to meet specific organizational needs. We work across all industry sectors, employing a simple yet effective approach to each project. By developing short term, middle term and long-term strategic partnerships with Private and Public sector organizations, we are well placed to offer "best of breed" solutions to our clients`;
    return (
      <div>
        <div className="top-bar-about">
          {/* this div mainatins height of the topbar */}
        </div>
        <div className="topbar">
          <h1>Our Services</h1>
        </div>
        <div className="p-holder2 " id="p-holderid">
          <p className=" font-montserrat  ">{cardparagraph1}</p>
          <p className=" font-montserrat  ">{cardparagraph2}</p>
        </div>

        <Cards>
          <Card />
        </Cards>
      </div>
    );
}
 
export default Services;