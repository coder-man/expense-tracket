import React,{ useEffect, useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import Firebase from '../../config/FirebaseConfig';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#7bada8',        
        justifyContent: 'center',
        paddingTop:20,
    },
    formContainer:{
      flexDirection: 'row',
      height: 80,
      marginTop: 40,
      marginBottom: 20,
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input:{
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        marginRight: 5,        
    },
    button:{
       height: 47,
       borderRadius: 5,
       overflow: 'hidden',
       backgroundColor: '#788eec',
       width: 80,
       alignItems: 'center',
       justifyContent: 'center'
    },
    buttonText:{
      color: '#FFFFFF',
      fontSize: 16,
    },
    listContainer:{
      marginTop: 16,
      borderBottomColor: '#cccccc',
      borderBottomWidth: 1,
      paddingBottom: 16,
    },
    entityText:{
      fontSize: 20,
      color: '#FFFFFF'
    },
    item:{
        padding: 10,
        fontSize: 15,
        height: 44,
    },
});

const DashboardScreen = (props) => {

    const [ entityText, setEntityText ] = useState('');
    const [ entities, setEntities ] = useState([]);
    const userID = null;

    const entityRef = Firebase.firestore().collection('entities');  

    const usersRef = Firebase.firestore().collection('users');
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          usersRef.doc(user.uid).get()
            .then((document) => {
              const userData = document.data()
              userID = userData.uid;              
            }).catch((error) => {
              setLoading(false)
            });
        } else {
          setLoading(false)
        }
      });
   
    useEffect(() => {
        entityRef.where("authorID", "==", userID).orderBy('createdAt', 'desc')
          .onSnapshot(querySnapshot => {
              const newEntities = [];
              querySnapshot.forEach(
                doc => {
                  const entity = doc.data();
                  entity.id = doc.id;
                  newEntities.push(entity);
                });
                setEntities(newEntities)
                setEntityText('');
            },
            error => {
              console.log(error)
            })  
    }, []);

    const onAddButtonPress = () => {
       if(entityText && entityText.length > 0){
        const timestamp = new Date();
          const data ={
            text: entityText,
            authorID: userID,
            createdAt: timestamp,
          };
          entityRef.add(data).then(_doc => {
                 setEntityText('');
                 Keyboard.dismiss();
              }).catch((error) => {
                console.log(error);
              });

       }
    }

    const renderEntity =({ item, index}) => {
       return(
         <View style={styles.entityContainer}>
           <Text style={styles.entityText}>
            {index}. {item.text}
           </Text>  
         </View>  
       )
    }

    return(
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput
                style={styles.formContainer}
                placeholder='Add new entity'
                placeholderTextColor='#FFFFFF'
                onChangeText={(text) => setEntityText(text)}
                value={entityText}
                underlineColorAndroid="transparent"
                autoCapatilize="none"
            />
            <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
          { entities && (
              <View style={styles.listContainer}>
                <FlatList
                    data={entities}
                    renderItem={renderEntity}
                    keyExtractor={(item) => item.id}
                    removeClippedSubviews={true}
                />
              </View>  
          )}
        </View>
    );   
}


export default DashboardScreen; 