import React from "react";
import VMC from "./inc/Vmc";

function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto">
              <h4>About Us</h4>
            </div>
            <div className="col-md-8 my-auto">
              <h6 className="float-end">Home / About Us</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light border-bottom">
        <div className="container">
          <h5 className="main-heading">Our Company</h5>
          <div className="underline"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque libero mauris, egestas dignissim arcu nec, rhoncus
            venenatis libero. Vestibulum vitae congue purus. Pellentesque et
            lobortis risus. Sed felis tellus, dictum et metus accumsan,
            tincidunt blandit justo. Nam semper arcu sit amet lectus tristique
            fringilla. Mauris dui massa, tempus ac velit vitae, posuere
            consequat mauris. Ut malesuada imperdiet magna, a bibendum erat
            imperdiet eu. Sed viverra leo purus, sit amet ullamcorper eros
            eleifend ac. Morbi ac elit id dolor ultricies varius ut sed felis.
            Maecenas ultricies suscipit fermentum. Fusce porttitor elit eget
            vehicula pretium.
          </p>
        </div>
      </section>
      <VMC />
    </div>
  );
}

export default About;
