import React from "react";
import img from "../images/ladyCall_li2u6h.jpg";

function About() {
  return (
    <div>
      <>
        <main class="about" id="about">
          <div class="about-img">
            <img src={img} alt="lady image" srcset="" />
          </div>
          <div class="about-content">
            <h2 class="heading">
              About <span>Company</span>
            </h2>
            <h3>Full Stack Developer</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
              dolor at corrupti consectetur, exercitationem nisi architecto
              corporis dolorem aspernatur porro consequatur, ipsa inventore
              voluptate unde commodi quia, atque consequuntur eos.
            </p>
            <button type="button" class="btn btn-primary">
              Call
            </button>
            <button type="button" class="btn btn-primary">
              Our works
            </button>
          </div>
        </main>
      </>
    </div>
  );
}

export default About;
