import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">CS - Ticket System</h6>
          <p>
            This Customer Support (CS) Ticket System is a software <br /> tool
            used to centralize, manage, and track customer <br /> inquiries from
            various channels into a single dashboard. <br /> It streamlines
            communication by converting emails, <br /> chats, and social
            messages into organized tickets <br /> for faster resolution.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products and Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover"> Privacy policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaXTwitter></FaXTwitter> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaLinkedinIn></FaLinkedinIn> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaFacebookF></FaFacebookF> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <MdEmail></MdEmail> <span>support@cst.com</span>
          </a>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-neutral text-neutral-content p-4 border-t boreder-gray-300">
        <aside>
          <p>© 2026 CS — Ticket System. All rights reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
