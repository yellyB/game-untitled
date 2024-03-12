import { styled } from "styled-components";
import { colors } from "../datas/staticData";

const Button = styled.button`
  background-color: ${(props) => props.color || colors.blue};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken(${(props) => props.color || colors.blue}, 10%);
  }
`;

export default Button;
