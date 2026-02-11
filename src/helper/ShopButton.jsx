import React from "react";
import styled from "styled-components";

const ShopButton = ({ size }) => {
  return (
    <Wrapper>
      <a className={`btn btn-two ${size}`}>Shop Now</a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .btn {
    user-select: none;
    border-radius: 50px;
    border: 3px solid white;
    color: white;
    background-color: #faa432;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: 1.4;
    margin-bottom: 0;
    /* padding: 17px 52px; */
    text-align: center;
    text-transform: capitalize;
    touch-action: manipulation;
    transition: all 0.3s ease 0s;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .btn:before {
    content: "";
    position: absolute;
    transition-duration: 0.8s;
    width: 200%;
    height: 200%;
    top: 110%;
    left: 50%;
    transform: translate(-50%);
    border-radius: 50%;
    z-index: -1;
  }
  .btn-two:before {
    background-color: #0d9b4d;
  }

  .btn:hover {
    color: white;
  }

  .btn:hover::before {
    top: -40%;
  }
`;

export default ShopButton;
