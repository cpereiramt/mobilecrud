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
      <Text style={{fontSize: 18, color: '#16a085'}}>
        {params.orbital_period}
      </Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.diameter}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.climate}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.gravity}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.terrain}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>
        {params.surface_water}
      </Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.population}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.created}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.edited}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{params.url}</Text>
      <TouchableOpacity
        style={{backgroundColor: '#16a085', padding: 10, marginBottom: 8}}>
        <Text style={{color: 'white'}}>edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#16a085', padding: 10}}>
        <Text style={{color: 'white'}}>delete</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlanetDetails;
