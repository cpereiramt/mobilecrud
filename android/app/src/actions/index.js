import {dataAvailable, updatePostCount} from '../reducers/dataReducer';
const Realm = require('realm');
import {FilmSchema, FILM_SCHEMA} from '../model/filmSchema';
import axios from 'axios';

const databaseOptions = {
  path: 'realmT4.realm',
  schema: [FilmSchema],
  schemaVersion: 1,
};

export const fetchAndStoreToDatabase = () => {
  return (dispatch) => {
    axios.get('http://swapi.dev/api/films').then((response) => {
      // console.log('response' + JSON.stringify(response.data));
      Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
          response.data.results.forEach((obj) => {
            realm.create(FILM_SCHEMA, obj);
          });
          console.log('size' + realm.objects(FILM_SCHEMA).length);
          dispatch(updatePostCount(realm.objects(FILM_SCHEMA).length));
        });
      });
    });
  };
};

export const getDataFromDatabase = () => {
  return (dispatch) => {
    Realm.open(databaseOptions).then((realm) => {
      const res = realm.objects(FILM_SCHEMA);
      dispatch(dataAvailable(res));
      dispatch(updatePostCount(realm.objects(FILM_SCHEMA).length));
    });
  };
};

export const clearPostsFromDatabase = () => {
  return (dispatch) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const allPosts = realm.objects(FILM_SCHEMA);
          realm.delete(allPosts);
          dispatch(dataAvailable([]));
          dispatch(updatePostCount(realm.objects(FILM_SCHEMA).length));
        });
      })
      .catch((error) => {});
  };
};
