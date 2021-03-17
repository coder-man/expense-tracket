import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ToastAndroid } from 'react-native';

import Firebase from '../config/FirebaseConfig'

class SignupScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showToast: false,
            name: '',
            email: '',
            password: ''
        }
       // this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp = () => {
        const { email, password } = this.state;
        //console.log('Signup press', email, password);
        ToastAndroid.show('Submit click', ToastAndroid.SHORT);
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('ProfileScreen'))
            .catch(error => console.log(error)); 
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <TextInput
                   style={styles.inputBox}
                   value={this.state.name}
                   onChangeText={name => this.setState({ name })}
                   placeholder = 'Full Name'
                />

                <TextInput 
                    style={styles.inputBox} 
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />

                <TextInput
                   style={styles.inputBox}
                   value={this.state.password}
                   onChangeText= { password => this.setState({ password }) }
                   placeholder = 'Password'
                   securityTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={styles.bottonText}>Signup</Text>
                </TouchableOpacity>
                <Button title="Go to Login" onPress={() => this.props.navigation.navigate('LoginScreen')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox:{
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center',
    },
    button:{
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    bottonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonSignup: {
        fontSize: 12    
    }
})

export default SignupScreen;