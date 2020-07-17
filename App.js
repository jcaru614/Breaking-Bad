import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, TouchableHighlight, Modal, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
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
    <View style={styles.container}>
      <SafeAreaView>
        <Text>I am the one who knocks!</Text>
        <ScrollView>
        { characters ?
          characters.map ((char, index) => {
            return (
              <View>
              <Text key={char.char_id}>{char.name}</Text>
              </View>
              
            )
          }) : null
        }
        </ScrollView>
        
      </SafeAreaView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
});
