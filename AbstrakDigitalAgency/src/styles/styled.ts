import { keyframes } from "styled-components"

/**
 * This is used in the banner for zoomIn the Background box
 */
export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
`
/**
 * This is used for lady in the banner and Side Navbar to move right to left
 */
export const slideInRight = keyframes`
0%{
  transform: translate3d(50%, 0, 0);
}
100%{
  transform: translate3d(0, 0, 0);
}
`
/**
 * This is used for chat box in the banner and Mobile Navbar to move left to right
 */
export const slideInLeft = keyframes`
  0%{
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`
/**
 * These all the animations for collabrate sessions
 */
export const movingleftright1 = keyframes`
  0% {
      transform: translateX(0) translateY(0);
  }

  40% {
      transform: translateX(50px) translateY(-200px);
  }

  75% {
      transform: translateX(800px);
  }

  100% {
      transform: translateY(0) translateX(0);
  }
`

export const movingleftright2 = keyframes`
  0% {
      transform: translateX(0) translateY(0);
  }

  40% {
      transform: translateX(-50px) translateY(200px);
  }

  75% {
      transform: translateX(-500px);
  }

  100% {
      transform: translateY(0) translateX(0);
  }
`

export const movingleftright3 = keyframes`
  0% {
      transform: translateX(0) translateY(0);
  }

  40% {
      transform: translateX(100px) translateY(-200px);
  }

  75% {
      transform: translateX(-500px);
  }

  100% {
      transform: translateY(0) translateX(0);
  }
`
/**
 * This is used for left content in the banner
 */
export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`


