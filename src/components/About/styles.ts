import styled from "styled-components";

export const Container = styled.section`
  
  text-align: center;
  padding: 0;
  
  
  .background-wrapper{
    background-color: var(--primary);
  }
  
  .about-text{
    padding: 10rem 10rem 27.5rem 10rem;
    max-width: 100rem;
    margin: 0 auto;
    color: #e8ecd4;

    > p{
      font-size: 2rem;
      font-weight: 700;

      &:not(:last-child){
        margin-bottom: 2rem;
      } 
    }
  }

  .skills-wrapper{
    margin: 0 3rem;
    
  }

  .about-skills{
    position: relative;
    bottom: 15rem;
    margin: 0 auto;
    background-color: var(--offColor);
    border-radius: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    max-width: 160rem;

    
  }

  @media screen and (min-width: 1000px){
    .about-skills{
      display: flex;
    }
    .column:not(:last-child){
      border-right: 1px solid #E6ECF8;
    }
  }
  
  .column{
    flex: 1;
    color: black;
    padding: 5rem 7.5rem;

    > h3{
      margin-bottom: 3.5rem;
      color: black;
      font-size: 3rem;
    }
    
    > h4{
      margin-top: 6rem;
      color: var(--primary);
      font-size 2.25rem; 
    }

    > p, > ul{
      margin-top: 1.5rem;
      color: black; 
      font-size: 2rem;
      line-height: 4rem;
    }
    
    &:not(:last-child){
      border-bottom: 1px solid #E6ECF8;
    }


  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size : 4rem;
    margin-top: 0rem;
    color: var(--offColor);
  }

  h3{
    margin-top: 2rem;
    color: var(--secondary);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    color: var(--offColor);
  }
  
  

  


  @media only screen and (max-width: 480px) {
    h2{
      font-size: 3.5rem;
    }

    .about-text{
      padding: 10rem 4rem 27.5rem 4rem;
    }

    .column{
      padding: 5rem 5rem;
    }

    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`