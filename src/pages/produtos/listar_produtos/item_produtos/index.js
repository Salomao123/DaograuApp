import React from 'react';

import {
  ThumbDescription,
  TitleDescription,
  ImageProduto,
  ContainerProduto,
  ContainerSecao,
  BoxSecao,
  TextSecao,
  ContentSecao,
} from './styled';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {id: 1, img: require('../../../../assets/img/daograu_1.jpg')},
  {id: 2, img: require('../../../../assets/img/daograu_2.jpg')},
  {id: 3, img: require('../../../../assets/img/daograu_3.jpg')},
];

const datasecao = [
  {id: 1, nome: 'Empresas', icon: 'building'},
  {id: 3, nome: 'Mini Box', icon: 'home'},
  {id: 4, nome: 'Hospitais', icon: 'plus'},
];

function ItemProdutos() {
  return (
    <>
      <ThumbDescription>
        <TitleDescription>DESTAQUES</TitleDescription>
      </ThumbDescription>

      <ContainerProduto
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <ImageProduto
          source={require('../../../../assets/img/daograu_1.jpg')}
        />
        <ImageProduto
          source={require('../../../../assets/img/daograu_2.jpg')}
        />
        <ImageProduto
          source={require('../../../../assets/img/daograu_3.jpg')}
        />
        <ImageProduto
          source={require('../../../../assets/img/daograu_1.jpg')}
        />
        <ImageProduto
          source={require('../../../../assets/img/daograu_2.jpg')}
        />
        <ImageProduto
          source={require('../../../../assets/img/daograu_3.jpg')}
        />
      </ContainerProduto>

      <ThumbDescription>
        <TitleDescription>SEÇÕES</TitleDescription>
      </ThumbDescription>

      <ContainerSecao horizontal={true} showsHorizontalScrollIndicator={false}>
        {datasecao.map(item => (
          <>
            <ContentSecao>
              <BoxSecao key={item.id}>
                <Icon name={item.icon} size={20} color="#fff" />
              </BoxSecao>
              <TextSecao>{item.nome}</TextSecao>
            </ContentSecao>
          </>
        ))}
      </ContainerSecao>
    </>
  );
}

export default ItemProdutos;
