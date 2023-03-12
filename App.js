import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './src/components/Header'
import List from './src/components/List';

export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Jordan Ferreira',
      descricao: 'Mais um dia de muitos bugs :)',
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1,
    },
    {
      id: '2', 
      nome: 'Matheus', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Jose Augusto', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Gustavo Henrique', 
      descricao: 'Isso sim que é TI!', 
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Guilherme', 
      descricao: 'Boa tarde galera do insta...', 
      imgPerfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false, 
      likers: 32
    }
  ])

  return(
    <View style={styles.container} >

      <Header />

      <FlatList
        data={feed}
        renderItem={ ({ item }) => <List data={item} /> }
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item.id }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})