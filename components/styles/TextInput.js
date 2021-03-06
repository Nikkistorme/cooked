import styled from 'styled-components';

const TextInput = styled.input`
  border: 2px solid ${props => props.theme.color_primary};
  padding: 10px;
  border-radius: 10px;
  margin: 5px;
  font-size: 100%;
  min-width: 0;
`;

export default TextInput;