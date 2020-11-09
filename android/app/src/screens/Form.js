import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

function Form(type) {
  const {params} = type.route;
  const [name, setName] = useState('');
  const [orbitalPeriod, setOrbitalPeriod] = useState('');
  const [diameter, setDiameter] = useState('');
  const [climate, setClimate] = useState('');
  const [gravity, setGravity] = useState('');
  const [terrain, setTerrain] = useState('');
  const [surfaceWater, setSurfaceWater] = useState('');

  const [population, setPopulation] = useState('');
  const [created, setCreated] = useState('');
  const [edited, setEdited] = useState('');
  const [url, setUrl] = useState('');

  const renderForm = (status) => (
    <>
      <TextInput
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextInput
        placeholder="orbitalPeriod"
        value={orbitalPeriod}
        onChange={(event) => setOrbitalPeriod(event.target.value)}
      />
      <TextInput
        placeholder="diameter"
        value={diameter}
        onChange={(event) => setDiameter(event.target.value)}
      />
      <TextInput
        placeholder="climate"
        value={climate}
        onChange={(event) => setClimate(event.target.value)}
      />
      <TextInput
        placeholder="gravity"
        value={gravity}
        onChange={(event) => setGravity(event.target.value)}
      />
      <TextInput
        placeholder="terrain"
        value={terrain}
        onChange={(event) => setTerrain(event.target.value)}
      />
      <TextInput
        placeholder="surfaceWater"
        value={surfaceWater}
        onChange={(event) => setSurfaceWater(event.target.value)}
      />
      <TextInput
        placeholder="population"
        value={population}
        onChange={(event) => setPopulation(event.target.value)}
      />
      <TextInput
        placeholder="created"
        value={created}
        onChange={(event) => setCreated(event.target.value)}
      />
      <TextInput
        placeholder="edited"
        value={edited}
        onChange={(event) => setEdited(event.target.value)}
      />
      <TextInput
        placeholder="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <Button title={status} />
    </>
  );

  return (
    <View>
      {console.log(params.type)}
      {renderForm(params.type)}
    </View>
  );
}
export default Form;
