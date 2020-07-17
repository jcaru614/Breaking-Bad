import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableHighlight, Modal, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getBreakingBad();
  }, [])

  const getBreakingBad = () => {
    axios.get("https://www.breakingbadapi.com/api/characters")
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err))
  }


  return (
    <ImageBackground style={styles.container} resizeMode={'stretch'} 
          style={{flex: 1}} source={{ uri: 'https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/bg.jpg?raw=true' }} >   
      <SafeAreaView style={styles.center}>
        
        <Image style={styles.titleImg} source={{ uri: 'https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png' }} />
             
        <TextInput
          style={styles.searchBox}
          placeholder="I am the one who knocks!"
        />

        <ScrollView>
          {characters ?
            characters.map((char, index) => {
              return (
                <View key={char.char_id}>
                  <Image style={styles.poster} source={{ uri: char.img }} />
                  <Text style={styles.heading} >{char.name}</Text>
                </View>
              )
            }) : null
          }
        </ScrollView>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#054532',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titleImg: {
    width: 220,
    height: 100,
    alignSelf:'center'
  },
  center: {
    textAlign:'center',
    alignSelf:'center'
  },
  searchBox: {
    fontSize: 20,
    fontWeight: '300',
    padding: 20,
    width: 375,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    padding: 15,
    backgroundColor: '#D5A30F',
    marginBottom: 10,
    width: 380,
    
  },
  poster: {
    width: 380,
    height: 500,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 10,
  },

  // popup *****************
  popup: {
    flex: 1,
    backgroundColor: '#282C35',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  popPoster: {
    width: 300,
    height: 400,
    resizeMode: 'cover',
  },
  poptitle: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
    paddingHorizontal: 5,
    padding: 10,
  },
  rating: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    padding: 5,
  },
  writting: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    paddingHorizontal: 10,
    padding: 5,
  },
  closeBtn: {
    padding: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#FF9900',
    margin: 10,
  },
});
