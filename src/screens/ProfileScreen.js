import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import Firebase from '../config/FirebaseConfig';

class ProfileScreen extends Component{

    logOut = () => {
        Firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('LoginScreen')            
        }).catch(error => console.log(error));
    }

    render(){
        return(
           <View style={styles.container}>             
                  <Text style={styles.buttonText}>Profile Screen</Text>
                  <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={() => this.logOut()}
                  />                  
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
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    buttonSignUp: {
        fontSize: 12
    }
})

export default ProfileScreen;