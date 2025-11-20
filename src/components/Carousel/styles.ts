import styled from "styled-components";


export const Container = styled.section`

  .no-shadow{
    box-shadow: none !important;
  }

  .carousel {
    display: flex;
    align-items: center;
    position: relative;
    max-width: 100rem;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    // position: relative;
  }

  

  .arrow {
    filter: none;
    position: absolute;
    background: none;
    border: none;
    padding: 0 1rem;
    font-size: 3rem;
    font-weight: 700;
    cursor: pointer;
    color: var(--primary);
    opacity: 0.7;
    z-index: 1;
    -moz-transform:scale(1,2); /* Firefox */
    -ms-transform:scale(1,2); /* IE 9 */
    -o-transform:scale(1,2); /* Opera */
    transform:scale(1,2);

    transition: opacity 0.5s ease;

    &.left-arrow {
      left: 0;
    }

    &.right-arrow {
      right: 0;
    }

    &:not(.disabled):hover{
      opacity: 1;
    }

    &.disabled {
      color: lightgray;
      cursor: default;
    }

  }
 

  .arrow:focus {
    outline: none;
  }

`