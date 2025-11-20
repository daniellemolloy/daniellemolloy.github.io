import React, { useState, useRef, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { Container } from "./styles";

export function Testimonials() {

    return (
      <Container>
        <h2>Testimonials</h2>
        <h3>People I've worked with have said some nice things...</h3>
        
        <Carousel>
          <div className="testimonial">
            <p>
              "Beyond his technical abilities, Noam possesses a remarkable talent and innate
              capabilities that set him apart. He consistently approached challenges, showcasing
              his ability to remain resourceful in various situations."
            </p>
            <h4>Tom Lavi</h4>
            <h5>CEO, SueApp LTD</h5>
          </div>
          <div className="testimonial">
            <p>
              "Noam has a solid, pragmatic approach to these projects that I respect, and I appreciate 
              the way his questions and thoughts help me focus - so I just wanted to acknowledge that 
              and make sure everyone understands the regard I have for his skills, abilities, and initiative."
            </p>
            <h4>Stephen van Ness</h4>
            <h5>Associate Director, Brandeis Office of Research Administration</h5>
          </div>
        </Carousel>
        
      </Container>
    );
  }