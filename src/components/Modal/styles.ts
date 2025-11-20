import styled from "styled-components";


export const Container = styled.section`
  
  .background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;


    .modal{
      // display: flex;
      // flex-direction: column;
      background: white;
      max-width: 100rem;
      width: 90%;
      max-height: 100vh; //change to auto when theres stuff in it
      margin: auto;
      padding: 7.5vh 2.5%;
      // padding-top: 7.5vh;
      border-radius: 10px;
      position: relative;
      transition: 0.5s;
      overflow-y: auto;

      --size: 5rem;

      .close {
        position: absolute;
        right: 5rem;
        top: 5rem;
        width: var(--size);
        height: var(--size);
        opacity: 0.7;
        cursor: pointer;
        z-index: 1;
      }
      .close:hover {
        opacity: 1;
      }
      .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 0.6rem;
        background-color: #333;
        border-radius: 2rem;
      }
      .close:before {
        transform: rotate(45deg);
      }
      .close:after {
        transform: rotate(-45deg);
      }

      

    }

  }

`