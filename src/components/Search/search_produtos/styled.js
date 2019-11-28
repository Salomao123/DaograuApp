import styled from 'styled-components/native';

export const Container = styled.View`
  background: #474f61;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin: 30px 30px;
  padding: 0px 10px;

  border-radius: 10px;
`;

export const SearchInput = styled.TextInput`
  font-family: 'Open Sans';
  font-size: 16px;
  padding: 10px 10px;
  color: #fff;
  box-shadow: 2px 2px #000;
`;
