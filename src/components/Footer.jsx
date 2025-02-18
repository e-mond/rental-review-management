import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Subscription */}
        <div>
          <h2 className="text-2xl font-bold">Logo</h2>
          <p className="mt-2 text-gray-400">
            Stay informed about our latest news and offers.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l bg-gray-800 text-white w-full focus:outline-none"
            />
            <button className="bg-primary px-4 py-2 rounded-r">Join</button>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold">Useful Links</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-2 text-gray-400 space-y-2">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-primary">
              <Facebook />
            </a>
            <a href="#" className="hover:text-primary">
              <Twitter />
            </a>
            <a href="#" className="hover:text-primary">
              <Instagram />
            </a>
            <a href="#" className="hover:text-primary">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 mt-8">
        <p>© 2025 Rental Review. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
