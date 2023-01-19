import React from 'react'; //how components work together. importing entire library
import { Text, StyleSheet, View} from 'react-native'; //how to take information and show on mobile device. Just importing two pieces from the library

const ComponentsScreen = () => {
        const name = 'Peter Rifken'; 

    return (
        <View>
            <Text style={styles.textStyle}>Getting Started with React Native!</Text>
            <Text style={styles.textStyle2}>My name is {name}</Text>
        </View>
    );
}; 

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    textStyle2:{
        fontSize: 20
    }
});

export default ComponentsScreen; 