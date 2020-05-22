import React from 'react';

//React native components
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

const ListItem = ({item}) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.ListItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    
});

//exporting App
export default ListItem;