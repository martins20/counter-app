import styled, { css } from "styled-components";

const inneButtonAnimationCSS = css`
  @keyframes inneButtonAnimation {
    from {
      background: var(--white);
      width: 20px;
      height: 20px;

      top: 0.4rem;
      right: -0.4rem;
    }

    to {
      top: -1.5rem;
      right: -2.3rem;

      width: 75px;
      height: 75px;
    }
  }

  @keyframes outButtonAnimation {
    from {
      background: var(--red);

      top: -1.5rem;
      left: -2.2rem;
    }

    to {
      background: transparent;

      width: 75px;
      height: 75px;

      top: -1.5rem;
      left: -2.3rem;
    }
  }
`;

export const Container = styled.button`
  border: none;

  background: transparent;

  text-transform: uppercase;

  padding: 10px;

  border-radius: 50%;

  width: 50px;
  height: 50px;
`;

export const Text = styled.b`
  font-size: 2rem;
  line-height: 2rem;
  position: relative;

  position: relative;

  color: var(--light-red);

  transition: all 0.7s;

  ${inneButtonAnimationCSS}

  &:active {
    color: var(--red);

    &:before {
      opacity: 0.2;
      content: ".";
      background: var(--red);

      width: 70px;
      height: 70px;

      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;

      color: transparent;

      top: -1.5rem;
      left: -2.2rem;

      border-radius: 50%;

      transition: background 0.8s;

      animation-name: outButtonAnimation;
      animation-duration: 0.3s;
    }

    &:after {
      content: ".";
      opacity: 0.2;

      background: var(--white);

      width: 20px;
      height: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;

      color: transparent;

      top: 0.4rem;
      right: -0.4rem;

      border-radius: 50%;

      transition: background 0.8s;

      animation-name: inneButtonAnimation;
      animation-duration: 0.3s;
    }

    &:after {
      background: var(--light-red);
    }
  }
`;
