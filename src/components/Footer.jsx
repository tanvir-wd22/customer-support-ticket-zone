import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div>
      {/* Main Footer */}
      <footer className="footer bg-neutral text-neutral-content p-10 flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-5">
        {/* About Section */}
        <nav>
          <h6 className="footer-title">CS - Ticket System</h6>
          <p className="text-sm leading-relaxed">
            This CS Ticket System is a software tool used to centralize, manage,
            and track customer inquiries from various channels into a single
            dashboard.
          </p>
        </nav>

        {/* Company Section */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>

        {/* Services Section */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products and Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>

        {/* Information Section */}
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>

        {/* Social Links */}
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaXTwitter /> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaLinkedinIn /> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaFacebookF /> <span>@ CS - Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2">
            <MdEmail /> <span>support@cst.com</span>
          </a>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer footer-center bg-neutral text-neutral-content p-4 border-t border-gray-700">
        <aside>
          <p className="text-sm">
            © 2026 CS — Ticket System. All rights reserved.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
