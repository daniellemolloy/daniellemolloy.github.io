import styled from "styled-components";


export const Container = styled.main`
  margin: 5rem;
  margin-bottom: 25rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
  }
  
  h3{
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 15rem;
    font-weight: 600;

    a{
      transition: smooth;
    }
  }


  .project-card{
    display: flex;
    position: relative;
    // z-index: 1000;
    // border: 1px solid lightgray;
    border-radius: 20px 0 0 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    max-width: 50rem;
    height: 40rem;

    > img{
      margin: auto;
      padding: 2rem;
      width: 100%;
    }
  }


  .all-projects{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem,1fr));
    grid-template-rows: auto;
    gap: 7rem;
    padding: 1rem;
    max-width: 140rem;
    margin: 0 auto;

    .project{
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
      transition: background-color 0.75s ease;

      &:hover{
        background-color: #181c3c !important;
        
        img {
          transform: scale(1.5);
          opacity: 0;
        }

        .figure-text{
          opacity: 1;
        }

      }

      img{
        margin: auto;
        transition: transform 0.5s ease, opacity 0.5s ease;
        opacity: 1;
        max-width: 100%;
      }
      
      .figure-text{
        opacity: 0; 
        color: var(--offColor);   
        transition: opacity 0.75s ease;
        position: absolute;
        padding: 0 1.8rem;
        top: 50%;
        transform: translate(0, -50%);

        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .title{
        margin-bottom: 2rem;
      }

      button{
        margin-bottom: 3rem;
      }

      footer{
        margin-top: auto;
        margin-bottom: 1rem;

        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }

      &#BUSAA{
        background-color: #304c94;
      }

    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`