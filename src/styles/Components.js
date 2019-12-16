import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 30px 5px;
`;

export const SubContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 30px 5px;
`;

export const TitleDetalhes = styled.Text`
  font-weight: normal;
  color: #010111;
  align-self: center;
  font-size: 16px;
  margin: 10px;
`;

export const Excluir = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #d00000;
  align-self: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #707070;
  align-self: center;
  font-size: 14px;
`;

export const Subtitle = styled.Text`
  font-weight: normal;
  color: #010111;
  align-self: center;
  font-size: 12px;
  line-height: 30px;
`;

export const Input = styled.TextInput`
  padding: 10px 10px;
  margin: 10px 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

export const Select = styled.Picker`
  background: #ddd;
  color: #000;
`;

export const Link = styled.Text`
  font-weight: normal;
  color: #1b76b7;
  align-self: center;
  font-size: 14px;
  line-height: 30px;
`;

export const Small = styled.Text`
  margin: 0px 10px;
  padding: 0px 10px;
  font-size: 12px;
  line-height: 16;
  color: #d0d0d0;
`;
