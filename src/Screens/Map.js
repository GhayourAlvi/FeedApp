import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

const MapScreen = ({data}) => {
  const handleMarkerPress = item => {
    console.log('Marker pressed:', item);
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {data.map(item => (
          <Marker
            key={item.id}
            coordinate={{latitude: item.latitude, longitude: item.longitude}}
            onPress={() => handleMarkerPress(item)}>
            <Callout>
              <View>
                <Text>ID: {item.id}</Text>
                <Text>
                  Size: {item.width}x{item.height}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
