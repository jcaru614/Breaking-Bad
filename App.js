import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableHighlight, Modal, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({});


  useEffect(() => {
    getBreakingBad();
  }, [])

  const getBreakingBad = () => {
    axios.get("https://www.breakingbadapi.com/api/characters")
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err))
  }

  const searchBreakingBad = () => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${search}`)
    .then(result => console.log("walter !!!!!! ", result))
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
          onChangeText={text => setSearch(text)}
          onSubmitEditing={searchBreakingBad()}
          value={search}
        />

        <ScrollView>
          {characters ?
            characters.map((char, index) => {
              return (
                <TouchableHighlight key={char.char_id}>
                  <Image style={styles.poster} source={{ uri: char.img }} />
                  <Text style={styles.heading} >{char.name}</Text>
                </TouchableHighlight>
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
    alignSelf:'center',
    margin: 10
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
    width: 250,
    textAlign:'center',
    alignSelf:'center',
    
  },
  poster: {
    width: 250,
    height: 350,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 10,
    textAlign:'center',
    alignSelf:'center'
  },
});
