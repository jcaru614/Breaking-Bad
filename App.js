import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableHighlight, FlatList, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import axios from 'axios';
import PopUp from './PopUp'
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [selected, setSelected] = useState({});
  const [modalVis, setModalVis] = useState(false)


  useEffect(() => {
    axios.get("https://www.breakingbadapi.com/api/characters")
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err))
  }, [])

  const setBreakingBad = (text) => {
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
      .then((res) => {
        setSelected(res.data[0])
        setModalVis(!modalVis)
      })
      .catch(err => console.log(err))
  }

  return (
    <ImageBackground style={styles.container} resizeMode={'stretch'}
      style={{ flex: 1 }} source={{ uri: 'https://github.com/bradtraversy/breaking-bad-cast/blob/master/src/img/bg.jpg?raw=true' }} >
      <SafeAreaView style={styles.center}>

        <Image style={styles.titleImg} source={{ uri: 'https://raw.githubusercontent.com/bradtraversy/breaking-bad-cast/master/src/img/logo.png' }} />

        <TextInput
          style={styles.searchBox}
          placeholder="I am the one who knocks!"
          onChangeText={text => setSearchField(text)}
          value={searchField}
        />

        <ScrollView>
          {characters ?
            characters.filter(char => char.name.toLowerCase().includes(searchField.toLowerCase()))
            .map((char, index) => {
              return (
                <TouchableHighlight key={char.char_id} onPress={() => setBreakingBad(char.name)}>
                  <View>
                    <Image style={styles.poster} source={{ uri: char.img }} />
                    <Text style={styles.heading} >{char.name}</Text>
                  </View>
                </TouchableHighlight>
              )
            }) : null
          }
        </ScrollView>


        <Modal animationType='fade' visible={modalVis} transparent={true} >
          <PopUp name={selected.name} birthday={selected.birthday} occupation={selected.occupation}
          status={selected.status} nickname={selected.nickname} portrayed={selected.portrayed} 
          button={<TouchableOpacity onPress={() => setModalVis(!modalVis)} >
            <View>
            <Ionicons name="md-exit" size={44} color="#D5A30F" />
            </View>
          </TouchableOpacity>} 
          />
         
        </Modal>


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
    alignSelf: 'center',
    margin: 10
  },
  center: {
    textAlign: 'center',
    alignSelf: 'center'
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
    textAlign: 'center',
    alignSelf: 'center',

  },
  poster: {
    width: 250,
    height: 350,
    resizeMode: 'cover',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 10,
    alignSelf: 'center'
  },
});
