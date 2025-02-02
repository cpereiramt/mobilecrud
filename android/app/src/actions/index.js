import {dataAvailable, updatePlanetCount} from '../reducers/dataReducer';
const Realm = require('realm');
import {PlanetSchema, PLANET_SCHEMA} from '../model/planetSchema';
import axios from 'axios';

const databaseOptions = {
  path: 'realmT4.realm',
  schema: [PlanetSchema],
  schemaVersion: 2,
};

export const fetchAndStoreToDatabase = () => {
  return (dispatch) => {
    axios.get('http://swapi.dev/api/planets').then((response) => {
      // console.log('response' + JSON.stringify(response.data));
      Realm.open(databaseOptions).then((realm) => {
        realm.write(() => {
          response.data.results.forEach((obj) => {
            realm.create(PLANET_SCHEMA, obj);
          });
          console.log('size' + realm.objects(PLANET_SCHEMA).length);
          dispatch(updatePlanetCount(realm.objects(PLANET_SCHEMA).length));
        });
      });
    });
  };
};

export const getDataFromDatabase = () => {
  return (dispatch) => {
    Realm.open(databaseOptions).then((realm) => {
      const res = realm.objects(PLANET_SCHEMA);
      dispatch(dataAvailable(res));
      dispatch(updatePlanetCount(realm.objects(PLANET_SCHEMA).length));
    });
  };
};

export const clearPlanetsFromDatabase = () => {
  return (dispatch) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const allPlanets = realm.objects(PLANET_SCHEMA);
          realm.delete(allPlanets);
          dispatch(dataAvailable([]));
          dispatch(updatePlanetCount(realm.objects(PLANET_SCHEMA).length));
        });
      })
      .catch((error) => {});
  };
};

export const deletePlanetById = (name) => {
  return (dispatch) => {
    Realm.open(databaseOptions).then((realm) => {
      realm.write(() => {
        let allPlanets = realm.objects(PLANET_SCHEMA);

        let planetsToDelete = allPlanets.filtered('name ==  "Naboo"');
        console.log(planetsToDelete);
        realm.delete(planetsToDelete);
        const res = realm.objects(PLANET_SCHEMA);
        dispatch(dataAvailable(res));
        dispatch(updatePlanetCount(realm.objects(PLANET_SCHEMA).length));
      });
    });
  };
};
