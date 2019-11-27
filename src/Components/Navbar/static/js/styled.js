import styled from "styled-components";

let Search = styled.div`
  background-color: #f8f4f1;
  border-bottom: 1px solid #d1cecc;
  padding: 0.5rem;
  display: ${props => props.display.display} !important;
  opacity: ${props => props.display.opacity} !important;
  transition: ease-in-out 3s;
`;

export default Search;