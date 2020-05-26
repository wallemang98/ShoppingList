import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

const ListItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        fontSize: 64,
    },
});

//exporting App
export default ListItem;