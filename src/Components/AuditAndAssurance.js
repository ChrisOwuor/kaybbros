import React from "react";
import { Link } from 'react-router-dom'
import './About.css'
  



  
const AuditAndAssurance = () => {
  const introp = `Maintaining financial integrity, regulatory 
  compliance, and robust internal controls are essential for every business.
   At Kaybros Limited, our Auditing Services provide the expertise you need to
    ensure the accuracy, transparency, and security of your financial and 
    operational processes. Our skilled auditors conduct meticulous financial 
    audits, examining your financial statements, records, and transactions to
     validate their accuracy and compliance with relevant accounting standards.
      Additionally, our compliance audits assess your adherence to laws, regulations,
       and industry-specific requirements, safeguarding your organization against 
       legal and reputational risks. We also offer comprehensive internal control
        reviews, evaluating your internal control systems to identify weaknesses,
         enhance governance, and protect your assets. With our auditing services,
          you can have confidence 
  in the integrity of your financial and operational practices.`;
  
const adtextthree = `Our audit services include:`;
  return (
    <div className="a-cont">
      <div className="top-bar-about">
        {/* this div mainatins height of the topbar */}
      </div>
      <div className="topbar">
        <h1>Audit And Assurance</h1>
      </div>
      <div className="p-holder" id="p-holderid">
        <p className=" font-montserrat  ">{introp}</p>
       
        <p className=" font-montserrat "> {adtextthree}</p>
        <ol>
          <li className="list-decimal ml-4">Financial Auditing</li>
          <li className="list-decimal ml-4">Compliance Auditing</li>
          <li className="list-decimal ml-4">Internal Control Reviews</li>
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

export default AuditAndAssurance;
