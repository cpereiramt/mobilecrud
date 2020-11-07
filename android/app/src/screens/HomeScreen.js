import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
/* import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'; */
import {useSelector, useDispatch} from 'react-redux';

import {
  fetchAndStoreToDatabase,
  getDataFromDatabase,
  clearPostsFromDatabase,
} from '../actions/index';
const HomeScreen = () => {
  const posts = useSelector((state) => state.dataReducer.films);
  const totalPosts = useSelector((state) => state.dataReducer.totalFilms);
  const dispatch = useDispatch();
  /*  const [state, setState] = useState({
    modalVisible: true,
    submenu: [],
    orders: [],
       const mapStateToProps = (state) => {
      return {
        posts: state.dataReducer.posts,
        totalPosts: state.dataReducer.totalPosts,
      };
    };
  }); */

  const renderItem = ({item}) => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 18,
        margin: 8,
        elevation: 10,
        borderRadius: 5,
      }}>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.title}</Text>
      <Text style={{fontSize: 18, color: '#16a085'}}>{item.body}</Text>
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
          Total posts in database:{totalPosts}
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
          onPress={() => dispatch(clearPostsFromDatabase())}>
          <Text style={{color: 'white'}}>Clear Data</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  /*   function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(
        {fetchAndStoreToDatabase, getDataFromDatabase, clearPostsFromDatabase},
        dispatch,
      ),
    };
  }
}; */

  /* export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen); */
};

export default HomeScreen;
