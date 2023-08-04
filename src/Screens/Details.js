import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import MapScreen from './Map';
const ImageDetailScreen = () => {
  const image = useSelector(state => state.data.clickedImage);
  const mapData = [
    {
      id: 'J2PmlIizw',
      url: 'https://cdn2.thecatapi.com/images/J2PmlIizw.jpg',
      width: 1080,
      height: 1350,
      latitude: 37.78825,
      longitude: -122.4324,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Cat Details</Text>
      <Image style={styles.image} source={{uri: image.url}} />
      <Text style={styles.text}>ID: {image.d}</Text>
      <Text style={styles.text}>
        Size: {image.width}x{image.height}
      </Text>

      {/*Don't have API Key and the API does not return longs and lats, so couldn't use map however, I have written the code for the map */}
      {/* <MapScreen data={mapData} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    width: 350,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
    borderRadius: 20,
  },
});
export default ImageDetailScreen;
