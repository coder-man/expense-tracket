import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22
    },
    item:{
        padding: 10,
        fontSize: 15,
        height: 44,
    },
});

const DashboardScreen = () => {
    return(
        <View style={styles.container}>
        <FlatList
          data={[
              { key: 'Rajeev'},
              { key: 'Mahima' },
              { key: 'Avayav' },
              { key: 'Kushu' }
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <FlatListBasics />
        </View>
    );   
}

const FlatListBasics = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

export default DashboardScreen; 