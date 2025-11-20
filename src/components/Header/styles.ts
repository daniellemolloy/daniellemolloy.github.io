import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.8rem 5%;
  padding-top: 3rem;
  align-items: center;

  

  .logo-image{
    width: 10rem;
  }
  
  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;

    NavHashLink{
      font-weight: bold;
      
    }
    a{
      position: relative;
      padding: 0.6rem;
      font-weight: 600;
      font-size: 2.25rem;
      transition:  0.25s;

      &:hover{
        color: var(--primary);
      }

      &:not(.button){
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0.1em;
          background-color: var(--primary);
          transition: transform 0.4s;
          opacity 1;
          transform: scale(0);
          transform-origin: center;
        }

        &:hover::after, &:focus::after{
          transform: scale(0.75);
        }
      }
      

      &.button{
        padding: 0.6rem 2rem;
        color: var(--primary);
        background-color: var(--offColor);
        border: solid;
        border-color: var(--primary);
        
        &:hover{
          background-color: var(--primary);
          color: var(--offColor);
        }

      }
    }

  }

  


  @media (max-width: 550px){

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      // display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      // transition: opacity 0.25s, visibility 0.25s;
      background-color: #d4ddecff;
      z-index: 1000;
      gap: 1rem;

      a{
        transition: opacity 0s, visibility 0s;
      }

    }

    .menu {
      display: flex !important;
      
      &.opened ~ nav{
        opacity: 1 ;
        visibility: visible;
      }
    }

  }
  
  .menu {
    display: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0; 
    width: 8rem;
    z-index: 1001;
  }
  .line {
    fill: none;
    stroke: black;
    stroke-width: 6;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .line1 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .line2 {
    stroke-dasharray: 60 60;
    stroke-width: 6;
  }
  .line3 {
    stroke-dasharray: 60 207;
    stroke-width: 6;
  }
  .opened .line1 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }
  .opened .line2 {
    stroke-dasharray: 1 60;
    stroke-dashoffset: -30;
    stroke-width: 6;
  }
  .opened .line3 {
    stroke-dasharray: 90 207;
    stroke-dashoffset: -134;
    stroke-width: 6;
  }

`