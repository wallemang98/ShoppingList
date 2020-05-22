import React from 'react';

//React native components
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        //Most fundamental component for building UI, styled using Flexbox
        <View style={styles.header}>
            <Text style={styles.text}>Shopping List</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',

    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});

//exporting App
export default Header;