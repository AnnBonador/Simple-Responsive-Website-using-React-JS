import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus venenatis libero. Vestibulum vitae congue purus.
            </p>
          </div>
          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/contact">Blog</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
              <p className="text-white mb-1">#XX Diliman Quezon City</p>
            </div>
            <div>
              <p className="text-white mb-1">+6399999999</p>
            </div>
            <div>
              <p className="text-white mb-1">09999999999</p>
            </div>
            <div>
              <p className="text-white mb-1">email@domain.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
