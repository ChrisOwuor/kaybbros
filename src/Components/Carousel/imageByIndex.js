// import image1 from "../images/slide-1.jpg";
// import image2 from "../images/slide-2.jpg";
// import image3 from "../images/slide-3.jpg";
// import image4 from "../images/slide-4.jpg";


import fimg from "../../Img/pexels-andrea-piacquadio-3760067.jpg";
import simg from '../../Img/pexels-energepiccom-288477.jpg'
import timg from '../../Img/pexels-karolina-grabowska-4475527.jpg'
import fiimg from '../../Img/pexels-kraken-images-5426376.jpg'


export const images = [fimg, simg, timg, fiimg];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
