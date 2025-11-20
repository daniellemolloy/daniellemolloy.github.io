import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem;
  margin-bottom: 25rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
  }

  h3 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 15rem;
    font-weight: 600;

    a {
      transition: smooth;
      color: blue;
    }
  }

  .project-card {
    display: flex;
    position: relative;
    border-radius: 20px 0 0 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    max-width: 50rem;
    height: 40rem;

    > img {
      margin: auto;
      padding: 2rem;
      width: 100%;
    }
  }

  .all-projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    grid-template-rows: auto;
    gap: 7rem;
    padding: 1rem;
    max-width: 140rem;
    margin: 0 auto;

    .project {
      position: relative;
      padding: 2rem 1.8rem;
      border-radius: 1.2rem;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: black;
      border-radius: 20px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
      aspect-ratio: 1/0.75;
      transition: background-color 0.5s ease, background-image 0.5s ease;

      &:hover {
        background-color: var(--secondary) !important;
        background-image: none !important;

        img {
          transform: scale(1.5);
          opacity: 0;
        }

        .figure-text {
          opacity: 1;
        }
      }

      img {
        margin: auto;
        transition: transform 0.5s ease, opacity 0.4s ease;
        opacity: 1;
        max-width: 100%;
      }

      .figure-text {
        opacity: 0;
        color: var(--offColor);
        transition: opacity 0.5s ease;
        position: absolute;
        padding: 0 1.8rem;
        top: 50%;
        transform: translate(0, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .title {
        margin-bottom: 5rem;
      }

      .button {
        padding: 0.6rem 2rem;
        color: #e8ecd4;
        font-size: 2rem;
        background-color: transparent;
        border: solid;
        border-color: #e8ecd4;
        transition: 0.2s;

        &:hover {
          background-color: #e8ecd4;
          color: var(--primary);
        }
      }

      &#ProsperOn {
        background-color: #ffffff;
      }
      &#sueapp {
        background-color: white;
      }
      &#BUSAA {
        background-color: #304c94;
      }
      &#DataVis {
        background-color: black;

        img {
          width: 75%;
        }
      }
      &#Webkinz {
        background-color: #5cc4db;

        img {
          width: 50%;
        }
      }
      &#dsi {
        background-color: #cfd3d4;
        // background-image: linear-gradient(to bottom right, #e9eef7 30%, lightblue );

        img {
          width: 85%;
        }
      }
      &#docket {
        background-color: #744fbc;
        // background-image: linear-gradient(to bottom, #d8c4f4 30%, #744fbc);

        img {
          width: 40%;
        }
      }
    }
  }

  #sueapp-modal {
    align-items: center;
    position: relative;
    height: 100%;

    .modal-header {
      margin-bottom: 2rem;
      text-align: center;
      font-size: 3rem;
    }
  }

  .carousel-item {
    min-width: 100%;
    align-items: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;

    img {
      margin: 0 auto;
      max-width: 100%;
      margin-bottom: 2vh;
    }

    p {
      align-self: flex-start;
      line-height: 3rem;
      font-size: 2.2rem;
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    margin-top: 5rem;
    margin-bottom: 10rem;

    h3 {
      margin-bottom: 5rem;
    }

    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
