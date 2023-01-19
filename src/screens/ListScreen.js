import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'one',key:'1'},
        {name:'two',key:'2'},
        {name:'three',key:'3'},
        {name:'four',key:'4'},
        {name:'five',key:'5'},
    ];
    return (
    <FlatList 
        data={friends} 
        renderItem={({item})=> {
            return <Text>{item.name}</Text>;
        }}/>
    );
}

const styles = StyleSheet.create({});

export default ListScreen; 