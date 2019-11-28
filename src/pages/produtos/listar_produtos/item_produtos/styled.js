import styled from 'styled-components/native';

export const ThumbDescription = styled.View`
    width: 100%;
    background: #ddd;
    padding: 3px 5px;
    margin 20px 10px;
`;

export const TitleDescription = styled.Text`
  color: #707070;
  font-size: 10px;
  font-weight: bold;
`;

export const ImageProduto = styled.Image`
  width: 300px;
  height: 200px;
  resize-mode: contain;
  border-radius: 50px;
`;

export const ContainerProduto = styled.ScrollView`
  margin: 20px;
  max-height: 200px;
`;

export const ContainerSecao = styled.ScrollView`
  margin: 20px;
  max-height: 200px;
`;

export const BoxSecao = styled.View`
  max-width: 80px;
  height: 60px;

  padding: 10px;
  margin: 10px;

  border: 1px solid #ddd;
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #30b2e2;
  box-shadow: 10px 5px 5px black;
`;

export const TextSecao = styled.Text`
  align-self: center;
  color: #cecece;
  font-size: 10px;
`;

export const ContentSecao = styled.View`
  width: 100px;
  max-width: 100px;
`;
