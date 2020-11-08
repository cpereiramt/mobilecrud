import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';

function PlanetDetails(item) {
  const {params} = item.route;
  return (
    <View
      style={{
        backgroundColor: 'white',
        padding: 18,
        margin: 8,
        elevation: 10,
        borderRadius: 5,
      }}>
      {console.log(params)}
      <Text style={{fontSize: 20, color: '#16a085'}}>{params.name}</Text>
    </View>
  );
}

export default PlanetDetails;
