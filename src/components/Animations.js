import { keyframes } from "styled-components"
import styled from "styled-components"

const slideInFwd = keyframes`

  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

export const SlideInForward = styled.div`
	animation: ${slideInFwd} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.2s both;
}
`

// keyframes returns a unique name based on a hash of the contents of the keyframes
const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate360} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;