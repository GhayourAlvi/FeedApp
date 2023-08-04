import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData, setClickedImage} from '../redux/catSlice';
import PrimaryButton from '../Components/PrimaryButton';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handlePress = item => {
    dispatch(setClickedImage(item));
    navigation.navigate('Details');
  };
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: item.url}} />
        <PrimaryButton
          text={'View Details'}
          onPress={() => handlePress(item)}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Welcome to the cats world!</Text>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 350,
    height: 220,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 10,
  },
  itemId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
  },
});

export default HomeScreen;
