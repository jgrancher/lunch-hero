// Externals
import styled from 'styled-components';

// Variables
import { colors, mediaQuery, times } from '../../styles/variables';

export default styled.a`
  color: ${colors.black};
  font-size: ${props => (props.isBigger ? 2.4 : 2)}rem;
  font-weight: 900;
  line-height: 46px;
  transition: opacity ${times.medium}ms ease;

  ${mediaQuery(1)} {
    opacity: ${props => (props.isVisible ? 1 : 0)};
  }

  ${mediaQuery(2)} {
    font-size: ${props => (props.isBigger ? 3.8 : 3)}rem;
  }

  sup {
    font-size: 0.9rem;
    font-weight: 800;

    ${mediaQuery(2)} {
      font-size: 1.2rem;
    }
  }
`;
