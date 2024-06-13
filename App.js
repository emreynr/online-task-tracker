import React from 'react';
import LoginPage from "./src/screens/LoginPage";
import SignUpPage from './src/screens/SignUpPage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // ilgili libleri kullanabilmek icin mutlaka objesi olsuturulmalı

const App = () => {
  return (
  
    // artık bu tıp kullanım ıle navigation yapmıyoruz. <LoginPage/>
    //navigatorler bu sekılde kullanılır. App.js altında stack screen ıle navigasyon yapılmıs olur.
    // yukarıdakı gıbı bır kullanım yanlıs degıl fakat aynı sayfayı bırden cok yerden kulllanmak ıstedıgmız zaman bu sefer uygun referans
    // tanımlamamamıs oluyoruz. ornegın asagıdakı tanımlama seklı ıle ılgılı sayfaya aslında bır ad vermıs olduk ver artık ıstedıgmız yerde
    // ıstedıgımız sekılde kullanabılırız. 
    
    <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Login' component={LoginPage}/>
          <Stack.Screen name='SignUp' component={SignUpPage}/>


        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

