// Externals
import styled from 'styled-components';

// Variables
import { colors } from '../../styles/variables';

export default styled.div`
  background-color: ${colors.white};
  border-radius: 50%;
  border: 8px solid ${colors.greyBlue};
  color: ${colors.pinkLight};
  font-size: 2rem;
  font-weight: 800;
  height: 60px;
  line-height: 44px;
  margin: 0 auto;
  text-align: center;
  transform: translateY(${props => (props.isShifted ? '50%' : 0)});
  width: 60px;
`;
