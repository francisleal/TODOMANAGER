import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const imgDone = require('../assets/done.png');

export default class DoneTasks extends Component {
    static navigationOptions = {
        tabBarLabel: 'Done',
        tabBarIcon: ({ tintColor }) =>
            (<Image source={imgDone}
                style={[styles.icon, { tintColor: tintColor }]} />)
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