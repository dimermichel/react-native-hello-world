import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default Main = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://travelpacking.herokuapp.com/api/defaultlist')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.error(error))
      .finally(() => {
        setLoading(false);
        console.log(data);
      });
  }, []);

  const list = data.map(el => <Text key={el.title}>{el.title}</Text>);
  return <View>{!isLoading ? list : <Text>Loading...</Text>}</View>;
};
