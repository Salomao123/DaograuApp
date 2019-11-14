import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 30px 5px;
`;

export const Title = styled.Text`
  font-weight: normal;
  color: #010111;
  align-self: center;
  font-size: 16px;
`;

export const Subtitle = styled.Text`
  font-weight: normal;
  color: #010111;
  align-self: center;
  font-size: 10px;
  line-height: 30px;
`;

export const Input = styled.TextInput`
  padding: 10px 10px;
  margin: 10px 10px;
  font-size: 16px;
  background: #ddd;
`;

export const Select = styled.Picker`
  background: #ddd;
  color: #000;
`;
