import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, View, Image, Button, TextInput, Text, Alert } from 'react-native';

import { createUserOnFirebaseAsync } from '../services/FirebaseApi';

const img = require('../assets/TodoList.png');

export default class Register extends Component {
    static navigationOptions = {
        title: 'Register'
    };

    state = {
        // email: this.props.email,
        email: '',
        password: ''
    };

    render() {
        return (
            // <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.topView}>
                    <Image style={styles.img} source={img} />
                    <Text style={styles.title}>Registrando novo usuário</Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.input}
                        placeholder='Email'
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        onChangeText={email => this.setState({ email })} />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })} />

                    <Button title='Register ' onPress={() => this._createUserAsync()} />
                </View>
            </KeyboardAvoidingView>
            // </SafeAreaView>
        );
    }

    async _createUserAsync() {
        try {
            const user = await createUserOnFirebaseAsync(this.state.email, this.state.password);
            Alert.alert("User Created",
                `User ${user.email} has succesfuly been created!`,
                [{
                    text: 'Ok', onPress: () => {
                        this.props.navigation.goBack();
                    }
                }]);
        } catch (error) {
            Alert.alert('Create User Failed!', error.message);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    topView: {
        flex: 0.20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 25
    },
    img: {
        width: 50,
        height: 50
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    bottomView: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 20,
        paddingLeft: 20
    },
    input: {
        marginBottom: 20
    }
});