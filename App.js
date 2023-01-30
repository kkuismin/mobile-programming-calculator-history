import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

  const lisaa = () => {
    const summa = parseInt(number1) + parseInt(number2);
    setResult(summa);
    const history = number1 + " + " + number2 + " = " + summa;
    setData([...data, {key: history}]);
    setNumber1('');
    setNumber2('');
  }

  const vahenna = () => {
    const vahennys = parseInt(number1) - parseInt(number2);
    setResult(vahennys);
    const history = number1 + " - " + number2 + " = " + vahennys;
    setData([...data, {key: history}]);
    setNumber1('');
    setNumber2('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result}</Text>
      <TextInput 
        style={styles.input}
        onChangeText={number1 => setNumber1(number1)}
        value={number1}
        keyboardType="numeric"
      />
      <TextInput 
        style={styles.input}
        onChangeText={number2 => setNumber2(number2)}
        value={number2}
        keyboardType="numeric"
      />
      <View style={styles.buttons}>
        <Button onPress={lisaa} title="+" />
        <Button onPress={vahenna} title="-" />
      </View>
      <Text style={styles.text}>History</Text>
      <FlatList 
        style={styles.flatlist} 
        data={data}
        renderItem={({ item }) => <Text>{ item.key }</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
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
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
    margin: 5,
  },
  text: {
    fontSize: 16,
    marginTop: 50,
  },
  buttons: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  flatlist: {
    margin: 10,
  }
});
