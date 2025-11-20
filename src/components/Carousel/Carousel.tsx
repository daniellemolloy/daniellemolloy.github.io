import React, { PropsWithChildren, useState, useRef, useEffect } from "react";
import { Container } from "./styles";

type CarouselProps = PropsWithChildren<{
  shadow?: boolean;
}>;

const Carousel: React.FC<CarouselProps> = ({ shadow = true, children }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const leftArrowRef = useRef<HTMLButtonElement>(null);
  const rightArrowRef = useRef<HTMLButtonElement>(null);


  function clickLeftArrow() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function clickRightArrow() {
    const track = trackRef.current;
    if (track && index < track.childElementCount - 1) {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      // Update the transform to match the current index
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    if (leftArrowRef.current) {
      const leftArrow = leftArrowRef.current;
      if (index <= 0) {
        leftArrow.classList.add('disabled');
      } else {
        leftArrow.classList.remove('disabled');
      }

    }

    if (rightArrowRef.current) {
      const rightArrow = rightArrowRef.current;
      if (track && index >= track.childElementCount - 1) {
        rightArrow.classList.add('disabled');
      } else {
        rightArrow.classList.remove('disabled');
      }
    }

  }, [index]);


  return (
    <Container>

      <div className={`carousel ${!shadow ? "no-shadow" : ""}`}>
        <button className="arrow left-arrow" ref={leftArrowRef} onClick={clickLeftArrow}>&lt;</button>
        <div className="carousel-track" ref={trackRef}>
          {children}
        </div>
        <button className="arrow right-arrow" ref={rightArrowRef} onClick={clickRightArrow}>&gt;</button>
      </div>

    </Container>
  );
}

export default Carousel;