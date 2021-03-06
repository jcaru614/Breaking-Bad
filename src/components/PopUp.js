import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
export default function PopUp(props) {
    return (
        <SafeAreaView style={styles.popup}>
            <Text style={styles.poptitle}>{props.name}</Text>
            <Text style={styles.text} >Birthday: {props.birthday}</Text>
            <Text style={styles.text} >Status: {props.status}</Text>
            <Text style={styles.text} >Nickname: {props.nickname}</Text>
            <Text style={styles.text} >Nickname: {props.portrayed}</Text>
            {/* <Text style={styles.text} >Occupation: {props.occupation[0]} {",", props.occupation[1]}</Text> */}

          <TouchableOpacity onPress={() => props.setModalVis(!props.modalVis)} >
            <Ionicons name="md-exit" size={44} color="#D5A30F" />
          </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
  text: {
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
    paddingHorizontal: 10,
    padding: 5,
  },
})
