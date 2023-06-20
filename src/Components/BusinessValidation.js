import './About.css'
import {Link} from 'react-router-dom'



const BusinessValidation = () => {

  const introp = `In today's rapidly evolving business landscape, it's crucial to validate your strategies, processes, and operations to ensure sustainable growth and competitive advantage. At Kaybros Limited, our Business Validation Services offer a comprehensive assessment of your business's key elements. We work closely with you to validate your business strategies, ensuring they are aligned with market trends and industry best practices. Our experts delve into your processes, identifying areas for improvement and streamlining to enhance operational efficiency and reduce costs. By conducting thorough operational validation, we uncover opportunities to optimize your business and enhance overall performance. With our expertise in business validation, we help you make informed decisions, mitigate risks, and position your organization for long-term success.`;
    return (
      <div className="a-cont">
        <div className="top-bar-about">
          {/* this div mainatins height of the topbar */}
        </div>
        <div className="topbar">
          <h1>Business Validation</h1>
        </div>
        <div className="p-holder" id="p-holderid">
          <p className=" font-montserrat  ">{introp}</p>
          
          <ol>
            <li className="list-decimal ml-4">Statutory audits</li>
            <li className="list-decimal ml-4">Due diligence audits</li>
            <li className="list-decimal ml-4">Special purpose audits</li>
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
}
 
export default BusinessValidation;