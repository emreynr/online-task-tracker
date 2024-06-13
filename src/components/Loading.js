import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import React from 'react';


const Loading = (props) => { // props lar ile aslinda herhangi bir degiskeni veya adi istedigimiz yerden cekebiliriz.
    // probs. ile de hangi props oldugunu belirtiyoruz

    return (
        <View style={styles.container}>
            <Pressable 
            onPress={() => props.changeIsLoading}
            style={styles.closeButtonContainer}>
                <Text style={[{},styles.closeButton]}> X </Text>
            </Pressable>
            <ActivityIndicator size={'large'}/>
            <Text style={styles.loginText}> {props.buttonName} loading </Text>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({

    container: {
        flex: 1, // yani ekranin tamamini kapla
        position: 'absolute', // en on katmana getiriyor. bu sekilde container icinde herseyi en katmana getirmis olduk
        backgroundColor: 'lightblue',

        // tam bir login ekrani icin yapiyoruz
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    loginText: {
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 20, // mesela yukaridaki nesne ile arasinda 20px olucak
    },

    closeButton: {
        backgroundColor : 'yellow',
        fontWeight: 'bold',
        fontWidth: 50,
        fontHeight: 50,
        fontSize: 12,
        // height:
        // width: bu ikisi ile sadece butonu yapiladiririz. yukaridaki ile icindeki metni yapilandiririrz
    },

    closeButtonContainer: {
        backgroundColor: 'yellow',
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 50,
        right: 29,
    },
})