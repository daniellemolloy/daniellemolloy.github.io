import styled from "styled-components";


export const Container = styled.section`
  position: relative;
  text-align: center;
  margin: 0 2rem;
  position: relative;

  .contact-background{
    position: relative;
    top: 12rem;
    // background-color: #181c3c;
    background-color: var(--secondary);
    color: var(--offColor);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    border-radius: 20px;
    max-width: 130rem;
    align-items: center;
    padding: 7rem 5rem;
    margin: 0 auto;
    
    .column{
      flex: 1;
      text-align: center;

      > *{
        margin: auto;
      }

      h2{
        font-size: 4rem;
      }
      
      .text{
        font-size: 2rem;
      }

      p{
        font-size: 2.5rem;
      }

      &.info{
        line-height: 5rem;
        margin: auto;
        
        p{
          display: flex;
          gap: 1rem;

          svg{
            width: 3.5rem;
            vertical-align: middle;
            
            path{
              fill: var(--offColor);
            }
          }

        }

        
      }

    }
  }

  @media screen and (max-width: 1100px){

    .contact-background{
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
      max-width: 75rem;
      padding: 4rem 3rem;
      gap: 1rem;

      .column.info p{
        display: block;
        svg{
          margin-right: 1rem;
        }
      }
    }

  }

  
`

