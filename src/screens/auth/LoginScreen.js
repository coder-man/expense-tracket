import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ToastAndroid, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, login, getUser, google_signin } from '../../actions'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import Firebase from '../../config/FirebaseConfig';

class LoginScreen extends Component{

    componentDidMount = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.getUser(user.uid);
                   if(this.props.user != null){
                       this.props.navigation.navigate('ProfileScreen');
                   }
            }
        })
    }

    render(){
        return(
           <View style={styles.container}>
              <Image source={require('../../images/indian_currency.png')}  style={{ width: 100, height: 70 }} />
              <TextInput
                 style={styles.inputBox}
                 value={this.props.user.email}
                 onChangeText={email => this.props.updateEmail(email)}
                 placeholder = 'Email'
                 placeholderTextColor='#FFFFFF'
                 autoCapitalize = 'none'
              />
              <TextInput
                  style={styles.inputBox}
                  value= {this.props.user.password}
                  onChangeText={password => this.props.updatePassword(password)}
                  placeholder = 'Password'
                  placeholderTextColor='#FFFFFF'
                  secureTextEntry={true}
              />
              <TouchableOpacity style={styles.button} onPress={() => this.props.login()}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Button title="Don't have an account yet? Sign up" onPress={() => this.props.navigation.navigate('SignupScreen')} />
              <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => this.props.google_signin()}
              />


           </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#7bada8',
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
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    buttonSignUp: {
        fontSize: 12
    }
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateEmail, updatePassword, login, getUser, google_signin}, dispatch);
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (LoginScreen);
