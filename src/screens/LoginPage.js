import { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View, Pressable, Image } from 'react-native';
import Loading from '../components/Loading';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginPage = ({navigation}) => {
  const [name, setName] = useState(""); // usestate verileri gecici sekilde tutmak icin kullanilir.
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false); // isLoading, baslangicta false 

  console.log(isLoading)


  return (
    <View style={styles.container}>

      <Image
        source={require('../../assets/coffee.gif')}
        style={styles.image}
        />

      <Text> welcome {result} </Text>

      <Text>name</Text>
      <TextInput
      placeholder='Your Name'
      style={styles.input}
      onChangeText={(value) => setName(value)} 
      />

      <Text>last name </Text>
      <TextInput
      placeholder='Surname'
      style={styles.input}
      onChangeText={(value) => setLastName(value)}
      keyboardType='twitter'
      />

      <Pressable
        // onPress={() => setResult(name + lastName)}
        onPress={() => setIsLoading(true)} // tiklandiginda true cevir
        style={({pressed}) => [{ backgroundColor: pressed ?  "yellow" : 'blue'},styles.button]  }>
        <Text style={styles.buttonText}>gir </Text>
      </Pressable>

      <Pressable
        // onPress={() => setResult(name + lastName)}
        onPress={() => navigation.navigate('SignUp')}
        style={({pressed}) => [{ backgroundColor: pressed ? "yellow" : 'blue'},styles.button]  }>
        <Text style={styles.buttonText}>kayit ol</Text>
      </Pressable>


      {/* </Pressable>*/}
      {/* loading ekraninin butona basildigi zaman gelmesini sagliyoruz*/}
      
        {isLoading
         ? <Loading
         buttonName="buttonname"
          changeIsLoading={() => setIsLoading(false)}/> 
         : null}
      
    </View>
  );
};

export default LoginPage;

// define to styles css
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height:40,
    width: '50%',
    margin:12,
    borderWidth:3,
    padding: 12,
    marginVertical: 10,
    textAlign: 'center'
  },

  button: {
    backgroundColor: 'lightblue',
    width: '80%', // sayfaya olan orani olarak dusun.
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10,
  },

  buttonText: {
    fontWeight: 'condensedBold',
    color: 'white',
  },

  image: {
    width: 50,
    height: 50,
  },
});
