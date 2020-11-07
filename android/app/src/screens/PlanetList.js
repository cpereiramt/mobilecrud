import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
/* import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; */
import {useSelector, useDispatch} from 'react-redux';

import {
  fetchAndStoreToDatabase,
  getDataFromDatabase,
  clearPlanetsFromDatabase,
} from '../actions/index';
const PlanetList = () => {
  const planets = useSelector((state) => state.dataReducer.planets);
  const totalPlanets = useSelector((state) => state.dataReducer.totalPlanets);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 18,
        margin: 8,
        elevation: 10,
        borderRadius: 5,
      }}>
      <TouchableOpacity style={{backgroundColor: '#16a085', padding: 10}}>
        <Text style={{color: 'white'}}>edit</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.name}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>
        {item.rotation_period}
      </Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>
        {item.orbital_period}
      </Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.diameter}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.climate}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.gravity}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.terrain}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.surface_water}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.population}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.created}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.edited}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.url}</Text>
    </View>
  );

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: 'white',
      alignContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.main}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#16a085',
          alignItems: 'center',
          marginBottom: 8,
        }}>
        <Text style={{color: 'white'}}>
          Total of Planets in database:{totalPlanets}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          style={{backgroundColor: '#16a085', padding: 10, marginRight: 8}}
          onPress={() => dispatch(fetchAndStoreToDatabase())}>
          <Text style={{color: 'white'}}>Fetch data</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: '#16a085', padding: 10, marginRight: 8}}
          onPress={() => dispatch(getDataFromDatabase())}>
          <Text style={{color: 'white'}}>Load Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{backgroundColor: '#16a085', padding: 10}}
          onPress={() => dispatch(clearPlanetsFromDatabase())}>
          <Text style={{color: 'white'}}>Clear Data</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={planets}
        key={planets.created}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PlanetList;
