import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem;
  margin-bottom: 10rem;
  text-align: center;

  h2 {
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
  }

  h3 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 10rem;
  }

  .testimonial {
    min-width: 100%;
    text-align: center;
    padding: 3rem;

    p {
      font-size: 3rem;
      font-family: "Crimson Text", serif;
      font-style: italic;
      letter-spacing: 0.1rem;
    }

    h4 {
      font-size: 2.5rem;
      font-weight: 800;

      margin-top: 3.5rem;
      margin-bottom: 1rem;
    }

    h5 {
      font-size: 2rem;
      font-weight: normal;
    }
  }

  @media (max-width: 600px) {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .testimonial {
      // min-width: 80%;

      p {
        font-size: 2.5rem;
      }
      h4 {
        font-size: 2.5rem;
      }

      h5 {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 320px) {
    .testimonial {
      max-width: 100%
    }
  }
`;
