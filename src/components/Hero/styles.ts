import styled from "styled-components";

export const Container = styled.section`
  padding: 10rem 5rem;
  display: flex;
  justify-content: center;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  position: relative;

  background-image: url("../../assets/abstract-green-doodle.jpg"); /* Set the image URL */
  background-repeat: repeat-x; /* Repeat the image horizontally */
  background-size: auto; /* Use the image's original size */
  background-position: top;

  .hero-text {
    text-align: center;

    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      // color:var(--secondary);
      margin: 2rem auto;
      font-weight: 500;
      font-size: 3rem;
      max-width: 75rem;
    }

    p.small-intro {
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 5rem;
    }
  }

  .hero-image {
    img {
      margin-top: 6rem;
      max-width: 500px;
      width: 25%;
      border-radius: 50%;
    }
  }

  @media (max-width: 1130px) {
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 480px) {
    .hero-text {
      h1 {
        font-size: 3.5rem;
      }

      h3 {
        font-size: 2.5rem;
      }
    }
    .hero-image {
      img {
        width: 40%;
      }
    }
  }

  // .icons{
  //   > *{
  //   position: absolute;
  //     opacity: 0.3;
  //     path{
  //       stroke: var(--primary);
  //     }
  //   }

  //   #hex1{
  //     top: 0;
  //     right: 75%;
  //     width: 20%;
  //     height: 20%;
  //   }
  //   #hex2{
  //     top: 2rem;
  //     left: 10rem;
  //     width: 5vw;
  //     height: 5vh;
  //   }
  // }
`;
