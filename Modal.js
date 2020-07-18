import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Modal, StyleSheet, Text, TextInput, View, Image, ImageBackground, ScrollView, TouchableHighlight, Modal, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import axios from 'axios';

export const Modal = () => {
    return (
        <Modal style={styles.popup}>
            <Text style={styles.poptitle}>{props.name}</Text>

            {/* {props.appearance.map((outfit, index) => {
                return(
                    <Image key={index} style={styles.popPoster} source={{ uri: outfit }} />
                )
            })} */}
            
            <Text style={styles.text} >Rating: {props.birthday}</Text>
            {/* <Text style={styles.text} >Actors: {props.occupation[0]}</Text> */}
            <Text style={styles.text} >{props.status}</Text>
            <Text style={styles.text} >{props.nickname}</Text>

        </Modal>
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
  closeBtn: {
    padding: 20,
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    backgroundColor: '#FF9900',
    margin: 10,
  },
})
