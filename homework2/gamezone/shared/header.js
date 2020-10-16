import React from 'react';
import { Dimensions, StyleSheet, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.button} />
    <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    header:{
        width: Dimensions.get('screen').width,
        //height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    button: {
        position: 'absolute',
        left: 16
    }
})