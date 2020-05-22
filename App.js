import React from 'react';
import Header from './components/Header';

//React native components
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        //Most fundamental component for building UI, styled using Flexbox
        <View style={ styles.container }>
            <Header />
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