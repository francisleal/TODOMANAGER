import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const imgChecList = require('../assets/checklist.png');

export default class ToDoTasks extends Component {
    static navigationOptions = {
        tabBarLabel: 'To Do',
        tabBarIcon: ({ tintColor }) => (
            <Image source={imgChecList} style={[styles.icon, { tintColor }]} />
        )
    }

    render() {
        return (
            <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        paddingRight: 10
    },
    icon: {
        width: 26,
        height: 26
    },
    img: {
        width: 50,
        height: 50
    }
});