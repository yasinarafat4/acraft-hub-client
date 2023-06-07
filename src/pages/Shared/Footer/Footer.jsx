import moment from "moment";
import logo from "../../../assets/logo/Acraft_hub.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = moment().format("YYYY");
  return (
    <footer>
      <div className="footer p-10 bg-base-200 text-base-content">
        <div className="space-y-2">
          <div>
            <img className="h-32 mb-3 md:mb-0 lg:mb-3" src={logo} alt="" />
            <p className="ms-2 text-base md:hidden lg:block">
              ArtCraft has been bringing creative peoples dreams to life since
              2016. We teach digital <br />
              art, 2D and 3D graphics, and animation to beginners from square
              one.
            </p>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaFacebookF className="h-5 w-5 text-blue-500" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaTwitter className="h-5 w-5 text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaInstagram className="h-5 w-5 text-pink-500" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <FaLinkedinIn className="h-5 w-5 text-blue-600" />
            </a>
          </div>
        </div>
        <div>
          <span className="footer-title text-lg">Services</span>
          <a className="link link-hover">Custom Artwork</a>
          <a className="link link-hover">Craft Supplies</a>
          <a className="link link-hover">Art Classes</a>
          <a className="link link-hover">Commissioned Pieces</a>
        </div>
        <div>
          <span className="footer-title text-lg">Features</span>
          <a className="link link-hover">Artistic Inspiration</a>
          <a className="link link-hover">Crafting Techniques</a>
          <a className="link link-hover">DIY Projects</a>
          <a className="link link-hover">Art Exhibitions</a>
        </div>
        <div>
          <span className="footer-title text-lg">Address</span>
          <p>123 Main Street, Dhaka, Bangladesh</p>
          <p>Phone: (123) 456-7890</p>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-[#133795] hover:bg-[#1a5bbe] text-white absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © {currentYear} - All right reserved by ACraft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
