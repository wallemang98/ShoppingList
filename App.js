import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';

//React native components
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const [items, setItems] = useState([
        { id: uuidv4(), text: 'milk' },
        { id: uuidv4(), text: 'eggs' },
        { id: uuidv4(), text: 'bread' },
        { id: uuidv4(), text: 'juice' },
    ]);

    return (
        //Most fundamental component for building UI, styled using Flexbox
        <View style={ styles.container }>
            <Header />

            <FlatList
                data={items}
                renderItem={({ item }) => <ListItem item={item} />}
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