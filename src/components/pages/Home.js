import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../images/img1.jpg";
function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus venenatis libero. Vestibulum vitae congue purus. Pellentesque et lobortis risus. Sed felis tellus, dictum et metus accumsan, tincidunt blandit justo. Nam semper arcu sit amet lectus tristique fringilla.  </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VMC />
      <section className="section border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  alt="services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Service 1</h6>
                  <div className="underline"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus venenatis libero. Vestibulum vitae congue purus.</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  alt="services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Service 2</h6>
                  <div className="underline"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus venenatis libero. Vestibulum vitae congue purus.</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img
                  src={Service1}
                  alt="services"
                  className="w-100 border-bottom"
                />
                <div className="card-body">
                  <h6>Service 3</h6>
                  <div className="underline"></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus venenatis libero. Vestibulum vitae congue purus.</p>
                  <Link to="/services" className="btn btn-link">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;
