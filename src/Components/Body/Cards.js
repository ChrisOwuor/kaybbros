 import Card from "./Card";
import "./Cards.css";

const heading1 = `Audit And Assurance`;
const text1 = `It includes Business Valuation,Business registration,Annual returns,Share transfer, Change in directorship. We invest time to ensure that we understand your business; its organizational make-up,culture, strategic direction, performance goals and competitive position.`;
const heading2 = `Human Resource management`;
const text2 = `It includes Recruitment, Training & Development. As a standard 
element of recruitment process, each candidate is assessed through a
competency-based interview and objectivly presented with full interview reports`

const heading3 = `Business Evaluation
`;
const text3 = `It Includes Tax consultation, Monthly tax returns, Annual tax returns fillings and Auditing. We ensure the client business remains compliant with statutory bodies such as registrar of companies, Tax Issues, County governments etc.`;
 
const linkone = `/Human Resource Management`;
 const linktwo = `/Business Validation`;
const linkthree = `/Audit And Assurance`;
const img1 = `https://www.mgkconsult.co.ke/wp-content/uploads/2022/10/Tax-consultancy-services-in-kenya.webp`;
  const img2 = `https://www.mgkconsult.co.ke/wp-content/uploads/2022/10/Business-Outsourced-services-in-Kenya.webp`;

   const img3 = `https://www.mgkconsult.co.ke/wp-content/uploads/2022/10/Business-advisory-services-in-Kenya.webp`;







const Cards = () => {
  return (
    <div className="card-holder">
      <Card text={text1} heading={heading1} link={linkthree} img={img1} />
      <Card text={text2} heading={heading2} link={linkone} img={img2} />
      <Card text={text3} heading={heading3} link={linktwo} img={img3} />
    </div>
  );
};

export default Cards;
