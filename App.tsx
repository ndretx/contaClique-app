import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COMPLEMENTARY_COLORS } from './src/components/complementary-colors';
import { COLORS } from './src/components/text-color-component';


export default function App() {
  const [clique, setClique] = useState(0);
  const [corTexto, setCorTexto] = useState('black');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const alterarCorTexto = () => {
    const cores = Object.values(COMPLEMENTARY_COLORS);
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    setCorTexto(corAleatoria);
  };
  const alterarCorFundo = () => {
    const cores = Object.values(COLORS);
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    setBackgroundColor(corAleatoria);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: corTexto }]}>Voce clicou </Text>
      <Text style={[styles.textClique, { color: corTexto }]}>{clique} </Text>

      <TouchableOpacity
        style={[styles.Button, { left: 50 },]}
        onPress={() => {
          setClique(clique + 1);
          alterarCorTexto();
          alterarCorFundo();
        }}>

        <Text style={styles.textButton}> Clique !</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Button, { right: 50 }]}
        onPress={() => {
          setClique(0);
          setCorTexto('black');
          setBackgroundColor('white')
        }}>
        <Icon name="refresh-ccw" size={50} color="black" ></Icon>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    position: 'absolute',
    bottom: 150,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 300,
    borderColor: 'black',
    borderWidth: 4,
    marginHorizontal: -20


  },
  textButton: {

    color: 'black',
    fontWeight: 'bold',
    fontSize: 36,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',


  },
  text: {
    position: 'absolute',
    top: 250,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,


  },
  textClique: {
    position: 'absolute',
    top: 300,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 50,


  }
});
