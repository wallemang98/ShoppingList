import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
//React native components
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';

import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [items, setItems] = useState([
        { id: uuidv4(), text: 'milk' },
        { id: uuidv4(), text: 'eggs' },
        { id: uuidv4(), text: 'bread' },
        { id: uuidv4(), text: 'juice' }
    ]);

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter(item => item.id != id);
        });
    };

    const addItem = text => {
        //if nothing is typed in
        if (!text) {
            //'title', 'message', object with text for button
            Alert.alert('Error', 'Please enter an item', [{ text: 'Ok' }]);
        } else {
            setItems(prevItems => {
                return [{ id: uuidv4(), text }, ...prevItems]
            });
        }
    };

    return (
        //Most fundamental component for building UI, styled using Flexbox
        <View style={ styles.container }>
            <Header />

            <AddItem addItem={addItem} />
            <FlatList
                data={items}
                renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem}/>}
            />
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
 
});

//exporting App
export default App;