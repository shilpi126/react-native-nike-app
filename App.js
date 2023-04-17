import { StatusBar } from 'expo-status-bar';
import {  StyleSheet,  View } from 'react-native';

import Navigation from './src/Navigation';


export default function App() {

  return (


      
      <Navigation/>
 
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
      width:"100%",
      aspectRatio:1,
  },
  itemContainer:{
    width: "50%",
    padding:1,
  }
});
