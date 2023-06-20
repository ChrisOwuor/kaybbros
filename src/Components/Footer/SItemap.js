import './Sitemap.css'

import { Link } from "react-router-dom";

const Sitemap = () => {
  return (
    <div className="div-sitemap">
      <h1 className="s-h  text-teal-400 text-3xl">Sitemap</h1>
      <ul className="div-sitemap">
        <li>
          <Link className="hover:underline text-lg" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-lg" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-lg" to="/Services">
            Services
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-lg" to="/Contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
